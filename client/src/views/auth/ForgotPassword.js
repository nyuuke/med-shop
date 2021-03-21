import React from 'react'

//components
import ForgetPass from '../../services/auth/ForgetPass'
//styles
import { Wrapper } from '../../styles/Auth.element'

const ForgotPassword = () => {
  return (
    <>
      <Wrapper>
        <ForgetPass />
      </Wrapper>
    </>
  )
}

export default ForgotPassword
