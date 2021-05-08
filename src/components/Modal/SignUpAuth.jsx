import React from 'react'
import styled from 'styled-components'
import { SnsButton } from 'components/atoms/Button/SnsButton'
import { pc, sp, tab } from 'media'

const SignupPopUp = styled.div`
  border-radius: 4px;
  background: #fff;
  padding: 30px;
  margin: 100px auto;
  ${sp`
  margin: 120px auto;
  width: 100%
  height: 100%;
`}
  ${tab`
  margin: 200px auto;
  width: 50%;
  height: 50%;
`}
  ${pc`
  width: 25%;
  height: 60%;
`}
`

const SignUpRegiter = styled.div`
  text-align: center;
`

const SignUpRegisterTitle = styled.h2`
  font-weight: bold;
  margin-bottom: 15px;
  letter-spacing: 0.04em;
`

const SignUpRegisterSubTitle = styled.div`
  font-size: 14px;
  line-height: 1.69;
`

const SnsButtonForm = styled.div`
  margin: 40px 0;
  align-items: center;
`

const SignUpLogin = styled.a`
  text-decoration: none;
  color: black;
`

export const SignUpAuth = () => {
  return (
    <SignupPopUp>
      <SignUpRegiter>
        <SignUpRegisterTitle>SIGN UP</SignUpRegisterTitle>
        <SignUpRegisterSubTitle>新規会員登録</SignUpRegisterSubTitle>
        <SnsButtonForm>
          <SnsButton />
        </SnsButtonForm>
        <SignUpLogin href="/">ログインはこちら</SignUpLogin>
      </SignUpRegiter>
    </SignupPopUp>
  )
}
