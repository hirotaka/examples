import { useState } from 'react'
import { useUser } from '@/contexts/user'

export default function Auth() {
  const { loading, login } = useUser()
  const [email, setEmail] = useState('')

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl">ログイン</h1>
      <p className="mt-4">
        Eメールを入力してマジック・リンクでログインします。
      </p>
      <div className="mt-6">
        <label className="block">Eメール</label>
        <input
          className="mt-2 w-full"
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
