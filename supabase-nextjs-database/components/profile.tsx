import { useState } from 'react'
import { useUser } from '@/contexts/user'
import { supabase } from '@/lib/supabase-client'

export default function Profile() {
  const { user, setUser } = useUser()
  const [loading, setLoading] = useState()
  const [name, setName] = useState(user.name)

  async function updateProfile({ name }) {
    try {
      setLoading(true)
      const user = supabase.auth.user()

      const updates = {
        id: user.id,
        name,
        updated_at: new Date(),
      }

      const { data: profile, error } = await supabase
        .from('profiles')
        .upsert(updates)
        .single()

      if (error) {
        throw error
      } else {
        alert('プロフィールを更新しました！')
        setUser({ ...user, ...profile })
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
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
  )
}
