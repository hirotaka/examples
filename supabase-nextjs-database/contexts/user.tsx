import { createContext, useState, useContext, useEffect } from 'react'
import { supabase } from '@/lib/supabase-client'

const Context = createContext()

const Provider = ({ children }) => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setProfile(supabase.auth.user())
    supabase.auth.onAuthStateChange(() => {
      setProfile(supabase.auth.user())
    })
  }, [])

  const setProfile = async (user) => {
    if (!user) {
      setUser(null)
      return
    }

    try {
      setLoading(true)
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .single()

      if (error) {
        throw error
      } else {
        setUser({ ...user, ...profile })
      }
    } catch (error) {
      console.error(error.message)
    } finally {
      setLoading(false)
    }
  }

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

  const exposed = {
    login,
    logout,
    user,
    setUser,
    loading,
  }

  return <Context.Provider value={exposed}>{children}</Context.Provider>
}

export const useUser = () => useContext(Context)

export default Provider
