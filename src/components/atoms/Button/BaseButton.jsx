import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  border: none;
  outline: none;
  font-size: 14px;
  border-radius: 4px;
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-around;
  color: #fff;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`

export const BaseButton = (props) => {
  return <ButtonStyled {...props} />
}
