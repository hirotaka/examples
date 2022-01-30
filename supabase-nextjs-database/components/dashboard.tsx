import { useState } from 'react'
import { useUser } from '@/contexts/user'

export default function Account() {
  const { logout, user, loading, updateProfile, message } = useUser()
  const [name, setName] = useState(user.name)

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl mb-4">ダッシュボード</h1>
      <div className="mb-4">
        <p className="mb-2">{message}</p>
        <button className="secondary" onClick={() => logout()}>
          ログアウト
        </button>
      </div>
      <div className="mb-4">
        <label className="block mb-2">名前</label>
        <input
          id="name"
          className="w-full"
          type="text"
          value={name || ''}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button
        className="primary mb-4 mr-4"
        onClick={() => updateProfile({ name })}
        disabled={loading}
      >
        {loading ? '読み込み中...' : '更新'}
      </button>
    </div>
  )
}
