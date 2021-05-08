import React, { useState } from 'react'
import { LikeButton } from './LikeButton'

const style = {
  backgroundColor: 'c1ffff',
  width: '400px',
  height: '30px',
  padding: '50px',
  margin: '0 auto',
  borderRadius: '8px'
}

const outputStyle = {
  backgroundColor: '#CCFFFF',
  width: '600px',
  height: '80px',
  margin: '0 auto',
  borderRadius: '8px',
  textAlign: 'center'
}

export const Post = () => {
  // 入力フォーム
  const [text, setText] = useState('')

  // アウトプット
  const [outputText, setOutputText] = useState(['あああ'])

  // 入力の値を取得
  const onChangeText = (e) => setText(e.target.value)

  // 投稿ボタンを押した時の関数
  const onClickAdd = () => {
    if (text === '') return
    // スプレッド構文(...)で新しい配列を用意、配列を展開する
    // 今のoutputTextの配列の中に、入力したtextの値を追加して、新しい配列を生成;
    const newoutputText = [...outputText, text]
    setOutputText(newoutputText)
    // フォームに入力し、投稿ボタンが押されたらリセット
    setText('')
  }

  // 削除
  const onClickDelete = (index) => {
    const newoutputText = [...outputText]
    // splice →配列の要素を削除する
    // →第一引数(何番目の要素か), 第２引数(削除する要素の数)削除する
    newoutputText.splice(index, 1)
    setOutputText(newoutputText)
  }

  return (
    <>
      <div style={style}>
        <input placeholder="今日の学び・気づき・感謝を一言" value={text} onChange={onChangeText} />
        <button onClick={onClickAdd}>投稿</button>
      </div>

      {/* 今日の学び */}
      {outputText.map((text, index) => {
        return (
          <div key={text}>
            <p className="title">（ユーザー）さんの今日の学び</p>
            <ul style={outputStyle}>
              <li>{text}</li>
              {/* 関数に引数を渡すときは、アロー関数を定義する/* なぜなら、削除ボタンを押して発火させるため */}
              <button onClick={() => onClickDelete(index)}> 削除</button>
              <LikeButton />
            </ul>
          </div>
        )
      })}
    </>
  )
}
