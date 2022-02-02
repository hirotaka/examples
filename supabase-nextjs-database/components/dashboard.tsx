import { useUser } from '@/contexts/user'
import Message from '@/components/message'
import Profile from '@/components/profile'
import Counter from '@/components/counter'

export default function Dashboard() {
  const { logout } = useUser()

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl">ダッシュボード</h1>
      <Message />
      <Profile />
      <Counter />
      <div className="mt-6">
        <button className="secondary" onClick={() => logout()}>
          ログアウト
        </button>
      </div>
    </div>
  )
}
