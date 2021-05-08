import React, { useEffect, useState } from 'react'

export const LikeButton = () => {
  // カウント
  const [count, setCount] = useState(0)

  const [backgroundColor, setBackgroundColor] = useState(false)

  const countUp = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    console.log('ゆーエフ')
  }, [count])

  return (
    <>
      <button onClick={countUp}>いいね：{count}</button>
      {/* {backgroundColor && <p>＼(^o^)／</p>} */}
    </>
  )
}
