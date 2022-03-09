import { useState, useEffect } from 'react'
import { useUser } from '@/contexts/user'
import { supabase } from '@/lib/supabase-client'

export default function Kanye() {
  const { user } = useUser()
  const [loading, setLoading] = useState(false)
  const [quote, setQuote] = useState()

  useEffect(() => {
    const rpcTalkToKanye = async () => {
      try {
        setLoading(true)
        const { data } = await supabase.rpc('talk_to_kanye', {
          name: user.profile.name,
        })
        setQuote(data)
      } catch (error) {
        alert(error.message)
      } finally {
        setLoading(false)
      }
    }
    if (user) rpcTalkToKanye()
  }, [user])

  return (
    <div className="mt-6">
      <label className="block">Kanye Quote</label>
      <p className="mt-2">{loading ? '読み込み中...' : quote}</p>
    </div>
  )
}
