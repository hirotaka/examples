import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase-client'

export default function Home() {
  const [hello, setHello] = useState(null)

  useEffect(() => {
    const rpcHello = async () => {
      const { data } = await supabase.rpc('hello_world')
      setHello(data)
    }
    rpcHello()
  }, [])

  return <h1 className="text-3xl font-bold underline">{hello}</h1>
}
