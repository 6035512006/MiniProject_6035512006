import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  width: 100%;
  height: 5rem;
  background: black;
  .bar {
    display: flex;
    width: 20%;
    height: 100%;
    margin: 0 3rem 0 auto;
    justify-content: space-between;
    align-items: center;
    button {
      height: 60%;
      width: 7rem;
      color: white;
      font-size: 1.2rem;
      background: teal;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        background: green;
      }
    }
  }
`

const Nav = ({ handleSignup, handleSignin }) => {
  return (
    <Div>
      <div className='bar'>
        <button onClick={handleSignup}>Sign Up</button>
        <button onClick={handleSignin}>Sign In</button>
      </div>
    </Div>
  )
}

export default Nav