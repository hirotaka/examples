import { createContext, useState, useContext, useEffect } from 'react'
import { supabase } from '@/lib/supabase-client'

const Context = createContext()

const Provider = ({ children }) => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState()

  useEffect(() => {
    const rpcHello = async () => {
      const { data } = await supabase.rpc('hello_world')
      setMessage(data)
    }
    if (user) rpcHello()
  }, [user])

  useEffect(() => {
    setUser(supabase.auth.user())
    supabase.auth.onAuthStateChange(() => {
      setUser(supabase.auth.user())
    })
  }, [])

  const login = async (email) => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signIn({ email })
      if (error) throw error
      alert('ログインのリンクをEメールで確認してください！')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }

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

  const exposed = {
    login,
    logout,
    user,
    loading,
    updateProfile,
    message,
  }

  return <Context.Provider value={exposed}>{children}</Context.Provider>
}

export const useUser = () => useContext(Context)

export default Provider
