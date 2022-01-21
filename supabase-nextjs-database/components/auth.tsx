import { useState } from 'react'
import { useUser } from '@/contexts/user'

export default function Auth() {
  const { loading, login } = useUser()
  const [email, setEmail] = useState('')

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl mb-2">ログイン</h1>
      <p className="mb-4">
        Eメールを入力してマジック・リンクでログインします。
      </p>
      <div className="mb-4">
        <label className="block mb-2">Eメール</label>
        <input
          className="w-full"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button
        className="primary mt-4"
        onClick={() => login(email)}
        disabled={loading}
      >
        {loading ? '読み込み中...' : 'マジックリンクを送信'}
      </button>
    </div>
  )
}
