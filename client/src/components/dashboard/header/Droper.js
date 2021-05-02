import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../../global/exports'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/menu'
import { MdExitToApp, MdHome } from 'react-icons/md'

const Droper = () => {
  const history = useHistory()
  const { currentUser, logged, logout } = useAuth()

  return (
    <>
      <Menu>
        <Button>{logged && currentUser.name}</Button>
        <List>
          <Item onClick={() => history.push('/')}>
            <MdHome className='icon' />
            <p>Home</p>
          </Item>
          <Item onClick={logout}>
            <MdExitToApp className='icon' />
            <p>Logout</p>
          </Item>
        </List>
      </Menu>
    </>
  )
}

export default Droper

const List = styled(MenuList)`
  padding: 10px 0px;
  border-radius: 10px 0px 10px 10px;
  color: ${({ theme }) => theme.secondary};
  border: 1px solid ${({ theme }) => theme.fourth};
  background-color: ${({ theme }) => theme.primary}!important;
  box-shadow: ${({ theme }) => theme.darkhover} 0px 30px 60px -12px,
    ${({ theme }) => theme.darkhover} 0px 18px 36px -18px;
`

const Item = styled(MenuItem)`
  width: 100%;
  border: none;
  margin: 5px 0px;
  cursor: pointer;
  background: none;
  font-size: 1.125rem;
  display: flex;
  padding: 10px 15px;
  align-items: center;
  flex-direction: row;
  color: ${({ theme }) => theme.third};

  .icon {
    font-size: 1.5rem;
    margin-right: 5px;
  }
  &:hover {
    color: ${({ theme }) => theme.fourth};
    background-color: ${({ theme }) => theme.third};
  }
`

const Button = styled(MenuButton)`
  border: none;
  font-weight: 600;
  padding: 0.7rem;
  cursor: pointer;
  background: none;
  font-size: 1rem;
  transition: none;
  margin-left: 1rem;
  letter-spacing: 1px;
  border-radius: 10px;
  color: ${({ theme }) => theme.secondary};

  &:hover {
    transition: none;
    background-color: ${({ theme }) => theme.darkhover};
  }

  @media (max-width: 1366px) {
    color: ${({ theme }) => theme.primary};

    &:hover {
      transition: none;
      background-color: ${({ theme }) => theme.lighthover};
    }
  }
`
