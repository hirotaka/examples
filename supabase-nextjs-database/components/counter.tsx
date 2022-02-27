import { useState } from 'react'

export default function Counter() {
  const [clicked, setClicked] = useState(0)
  const [loading, setLoading] = useState()

  const incrementCount = async () => {
    setClicked(clicked + 1)
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