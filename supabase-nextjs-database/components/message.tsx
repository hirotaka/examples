import { useState, useEffect } from 'react'
import { useUser } from '@/contexts/user'
import { supabase } from '@/lib/supabase-client'

export default function Message() {
  const { user } = useUser()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState()

  useEffect(() => {
    const rpcHello = async () => {
      try {
        setLoading(true)
        const { data } = await supabase.rpc('hello_world')
        setMessage(data)
      } catch (error) {
        alert(error.message)
      } finally {
        setLoading(false)
      }
    }
    if (user) rpcHello()
  }, [user])

  return (
    <div className="mt-6">
      <p>{loading ? '読み込み中...' : message}</p>
    </div>
  )
}
