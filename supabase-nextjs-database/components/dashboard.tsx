import { useUser } from '@/contexts/user'
import Message from '@/components/message'
import Profile from '@/components/profile'
import Counter from '@/components/counter'
import Kanye from '@/components/kanye'

export default function Dashboard() {
  const { logout, user } = useUser()

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl">ダッシュボード</h1>
      <Message />
      <Profile />
      {user.profile && (
        <>
          <Counter />
          <Kanye />
        </>
      )}
      <div className="mt-6">
        <button className="secondary" onClick={() => logout()}>
          ログアウト
        </button>
      </div>
    </div>
  )
}
