import React from 'react'
import styled from 'styled-components'
import { BaseButton } from 'components/atoms/Button/BaseButton'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import EmailIcon from '@material-ui/icons/Email'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

const FacebookButton = styled(BaseButton)`
  background-color: #1877f2;
`

const TwitterButton = styled(BaseButton)`
  background-color: #1da1f2;
`

const GoogleButton = styled(BaseButton)`
  background-color: #eeeeee;
  color: black;
`

const EmailButton = styled(BaseButton)`
  background-color: #ff6928;
`

export const SnsButton = () => {
  return (
    <>
      <FacebookButton>
        <FacebookIcon />
        Facebookで登録する
      </FacebookButton>

      <TwitterButton>
        <TwitterIcon />
        Twitterで登録する
      </TwitterButton>

      <GoogleButton>
        <FontAwesomeIcon style={{ fontSize: 20 }} icon={faGoogle} />
        Googleで登録する
      </GoogleButton>

      <EmailButton>
        <EmailIcon style={{ fontSize: 20 }} />
        メールアドレスで登録する
      </EmailButton>
    </>
  )
}
