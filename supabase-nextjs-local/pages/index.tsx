import Auth from '@/components/auth'
import Dashboard from '@/components/dashboard'
import { useUser } from '@/contexts/user'

export default function Home() {
  const { user } = useUser()

  return (
    <div className="max-w-7xl p-10 m-auto">
      {!user ? <Auth /> : <Dashboard />}
    </div>
  )
}
