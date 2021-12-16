import { ref } from "vue";

const user = ref(null);

export default function useAuthUser() {
  const login = async () => {
    return;
  };

  const loginWithSocialProvider = async () => {
    return;
  };

  const logout = async () => {
    return;
  };

  const isLoggedIn = () => {
    return;
  };

  const register = async () => {
    return;
  };

  const update = async () => {
    return;
  };

  const sendPasswordRestEmail = async () => {
    return;
  };

  return {
    user,
    login,
    loginWithSocialProvider,
    isLoggedIn,
    logout,
    register,
    update,
    sendPasswordRestEmail,
  };
}
