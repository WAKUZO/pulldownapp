import React, { useState } from 'react'

export const Header = () => {
  // open という名前の state 変数を宣言、初期値 true をセット
  const [open, setOpen] = useState(true)

  const [list, setList] = useState('選択されていません')

  // toggleの関数を宣言
  const toggle = () => setOpen(!open)

  const lists = [{ name: 'リスト1' }, { name: 'リスト2' }, { name: 'リスト3' }, { name: 'リスト4' }]

  const mouseOverBackgroundColor = (e) => {
    e.target.style.background = '#ff6666'
  }

  const mouseOutBackgroundColor = (e) => {
    e.target.style.background = 'red'
  }

  const listChange = lists.map((list) => {
    return (
      <li class="pull-down-list" onClick={() => setList(list.name)}>
        {list.name}
      </li>
    )
  })

  return (
    <div class="navbar">
      <ul class="nav-lists">
        <li class="list-status">
          現在のリスト：
          <span id="current-list">{list}</span>
        </li>
        <li
          className="red"
          onMouseOver={mouseOverBackgroundColor}
          onMouseOut={mouseOutBackgroundColor}
          onClick={toggle}
        >
          リスト
        </li>
        {open ? '' : <ul class="show-lists">{listChange}</ul>}
      </ul>
    </div>
  )
}
