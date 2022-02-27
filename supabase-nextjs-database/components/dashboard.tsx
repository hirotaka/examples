import { useUser } from '@/contexts/user'
import Profile from '@/components/profile'

export default function Dashboard() {
  const { logout, user } = useUser()

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl">ダッシュボード</h1>
      <div className="mt-6">
        <p>Hello, {user.email}!</p>
      </div>
      <Profile />
      <div className="mt-6">
        <button className="secondary" onClick={() => logout()}>
          ログアウト
        </button>
      </div>
    </div>
  )
}
