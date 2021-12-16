<script setup>
import { ref } from "vue";
import useAuthUser from "@/composables/UseAuthUser";
import { useRouter } from "vue-router";

const router = useRouter();
const { register } = useAuthUser();

const form = ref({
  name: "",
  email: "",
  password: "",
});

const handleSubmit = async () => {
  try {
    await register(form.value);

    router.push({
      name: "EmailConfirmation",
      query: { email: form.value.email },
    });
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <h1 class="text-3xl">登録</h1>
    <label class="block mt-4">
      <span>お名前</span>
      <input v-model="form.name" class="block w-full mt-2" type="text" />
    </label>
    <label class="block mt-4">
      <span>Eメール</span>
      <input v-model="form.email" class="block w-full mt-2" type="email" />
    </label>
    <label class="block mt-4">
      <span>パスワード</span>
      <input
        v-model="form.password"
        class="block w-full mt-2"
        type="password"
      />
    </label>
    <button class="primary w-full mt-6">登録</button>
  </form>
</template>
