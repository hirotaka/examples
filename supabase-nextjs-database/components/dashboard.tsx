import { useUser } from '@/contexts/user'

export default function Account() {
  const { logout, user } = useUser()

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl mb-4">ダッシュボード</h1>
      <div className="mb-4">
        <p className="mb-2">Hello, {user.email}!</p>
        <button className="secondary" onClick={() => logout()}>
          ログアウト
        </button>
      </div>
    </div>
  )
}
