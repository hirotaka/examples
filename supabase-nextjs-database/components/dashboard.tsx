import { useState } from 'react'
import { useUser } from '@/contexts/user'

export default function Account() {
  const { logout, user, loading, updateProfile, message } = useUser()
  const [name, setName] = useState(user.name)

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl">ダッシュボード</h1>
      <div className="mt-6">
        <p>{message}</p>
        <button className="secondary mt-4" onClick={() => logout()}>
          ログアウト
        </button>
      </div>
      <div className="mt-6">
        <label className="block">名前</label>
        <input
          id="name"
          className="w-full mt-2"
          type="text"
          value={name || ''}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="primary mt-4 mr-4"
          onClick={() => updateProfile({ name })}
          disabled={loading}
        >
          {loading ? '読み込み中...' : '更新'}
        </button>
      </div>
    </div>
  )
}
