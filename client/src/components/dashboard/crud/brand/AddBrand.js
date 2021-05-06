import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { useCrud } from '../../../../global/exports'
import { InputLeftedUp } from '../../../imports'

const AddBrand = () => {
  const history = useHistory()
  const [text, setText] = useState('')
  const [message, setMessage] = useState()
  const { storeData } = useCrud()

  const handleClick = () => {
    text.length === 0
      ? setMessage('Please enter some information')
      : storeData('brands', {
          tag: text,
        })
    history.push('/dash/brands')
  }

  return (
    <>
      <Wrapper>
        <p style={{ marginBottom: '1rem' }}>{message}</p>
        <InputLeftedUp state={{ text: [text, setText] }} />
        <Div>
          <Linker to='/dash/brands'>cancel</Linker>
          <Button onClick={handleClick}>Add</Button>
        </Div>
      </Wrapper>
    </>
  )
}

export default AddBrand

const Wrapper = styled.div`
  padding: 1rem;
`

const Div = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 400px) {
    justify-content: space-between;
  }
`
const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.third};

  &:hover {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.hover};
  }
`
const Linker = styled(NavLink)`
  padding: 8px 12px;
  margin-right: 1rem;
  border-radius: 5px;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.third};
  background-color: ${({ theme }) => theme.fourth};
`
