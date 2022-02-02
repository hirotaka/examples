import { useEffect, useState } from 'react'
import { useUser } from '@/contexts/user'
import { supabase } from '@/lib/supabase-client'

export default function Counter() {
  const [clicked, setClicked] = useState(0)
  const [loading, setLoading] = useState()
  const { user } = useUser()

  useEffect(() => {
    const getIntitialClicks = async () => {
      try {
        setLoading(true)
        const { data } = await supabase
          .from('profiles')
          .select('clicks')
          .eq('id', user.id)
          .single()

        setClicked(data.clicks)
      } catch (error) {
        alert(error.error_description || error.message)
      } finally {
        setLoading(false)
      }
    }

    if (user) getIntitialClicks()
  }, [user])

  const incrementCount = async () => {
    const { data } = await supabase.rpc('increment_clicks')
    setClicked(data)
  }

  return (
    <div className="mt-6">
      <label className="block">カウンター</label>
      <p className="mt-2">{loading ? '読み込み中...' : `${clicked}回`}</p>
      <button className="primary mt-4" onClick={incrementCount}>
        クリック
      </button>
    </div>
  )
}
