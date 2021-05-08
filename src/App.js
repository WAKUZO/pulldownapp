import React from 'react'
import { Header } from './components/Header'
import { Post } from './components/Post'
import './style.css'

export const App = () => {
  return (
    <>
      <div className="header">
        <div className="heading">
          <h1 className="headertitle">
            OUT PUTer　
            <span style={{ fontSize: '16px' }}>〜学び・気づき・感謝をシェアしよう〜</span>
          </h1>
        </div>
        <Header />
      </div>
      <Post />
    </>
  )
}
