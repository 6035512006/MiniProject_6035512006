import React from 'react'
import styled from 'styled-components'
import SigninForm from './components/SigninForm'

const Div = styled.div`
  margin: 0 auto;
  margin-top: -4rem;
  width: 60%;
`

const Modal = ({ state, handleClose }) => {
  const { signinOpen } = state
  return (
    <> 
      {signinOpen && (<Div><SigninForm handleClose={handleClose} /></Div>)}
    </>
  )
}

export default Modal