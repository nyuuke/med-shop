import React from 'react'
import styled from 'styled-components'

import { Cart } from '../../imports'
import { CartContext, useAuth } from '../../../global/exports'
import { NavLink, useRouteMatch, useHistory } from 'react-router-dom'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/menu'
import { Badge } from '@geist-ui/react'

import SearchProd from './SearchProd'
import Drawable from '../../Drawer.js/_Drawable'
import GoCheckoutButton from '../../cart/GoCheckoutButton'

import {
  FiShoppingBag,
  FiUser,
  FiUsers,
  FiHeart,
  FiBox,
  FiHome,
  FiLogOut,
  FiMenu,
} from 'react-icons/fi'

const IconHeader = () => {
  const path = useRouteMatch()
  const history = useHistory()
  const { logged, currentUser, logout } = useAuth()
  const { itemCount } = React.useContext(CartContext)

  return (
    <>
      <List>
        {/* shopping cart */}
        <Item>
          <Link to={path}>
            <Drawable
              width={450}
              direction='right'
              icon={
                <Badge.Anchor placement='bottomLeft'>
                  <Badge
                    size='mini'
                    type='default'
                    style={{
                      color: localStorage.getItem('mode') === 'dark' && '#111',
                      background:
                        localStorage.getItem('mode') === 'dark' && '#fff',
                    }}>
                    {itemCount}
                  </Badge>
                  <FiShoppingBag />
                </Badge.Anchor>
              }
              children={<Cart />}
              footer={<GoCheckoutButton />}
            />
          </Link>
        </Item>
        {/* search icon */}
        <Item>
          <Link to={path}>
            <SearchProd />
          </Link>
        </Item>
        {/* menu */}
        {logged ? (
          <Item>
            <StyledMenu placement='bottom-end'>
              <Button>
                <Link to={path}>
                  <FiMenu />
                </Link>
              </Button>
              <ListDrop>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '15px',
                  }}>
                  <FiUsers className='icon' />
                  <p style={{ fontSize: '1.2rem', fontWeight: '600' }}>
                    {currentUser.name}
                  </p>
                </div>
                <ItemDrop onClick={() => history.push('/profile')}>
                  <FiHome className='icon' />
                  <p style={{ fontSize: '1.1rem', fontWeight: '500' }}>
                    Profile
                  </p>
                </ItemDrop>
                <ItemDrop onClick={() => history.push('/wishlist')}>
                  <FiHeart className='icon' />
                  <p style={{ fontSize: '1.1rem', fontWeight: '500' }}>
                    wihslist
                  </p>
                </ItemDrop>
                {currentUser.role === 1 && (
                  <ItemDrop onClick={() => history.push('/dash')}>
                    <FiBox className='icon' />
                    <p style={{ fontSize: '1.1rem', fontWeight: '500' }}>
                      dashboard
                    </p>
                  </ItemDrop>
                )}
                <ItemDrop onClick={() => logout()}>
                  <FiLogOut className='icon' />
                  <p>logout</p>
                </ItemDrop>
              </ListDrop>
            </StyledMenu>
          </Item>
        ) : (
          <Item>
            <Link to='/login'>
              <FiUser />
            </Link>
          </Item>
        )}
      </List>
    </>
  )
}

export default IconHeader

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  margin: 0rem 0.5rem;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-around;
  }
`

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Link = styled(NavLink)`
  display: flex;
  cursor: pointer;
  font-size: 1.7rem;
  align-items: center;
  justify-content: center;
  margin: 0rem 0rem 0rem 0.5rem;
  color: ${({ theme }) => theme.text};

  &:hover {
    color: ${({ theme }) => theme.text};
  }
`

const StyledMenu = styled(Menu)`
  z-index: 11;
`

const ListDrop = styled(MenuList)`
  z-index: 11;
  width: 300px;
  padding: 10px 0px;
  border-radius: 10px 0px 10px 10px;
  border: 1px solid ${({ theme }) => theme.hover};
  background-color: ${({ theme }) => theme.body}!important;

  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
  }
`

const ItemDrop = styled(MenuItem)`
  border: none;
  outline: none;
  display: flex;
  cursor: pointer;
  background: none;
  min-width: 150px;
  padding: 10px 15px;
  align-items: center;
  text-transform: capitalize;
  justify-content: flex-start;

  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }
`

const Button = styled(MenuButton)`
  border: none;
  display: flex;
  cursor: pointer;
  background: none;
  align-items: center;
  flex-direction: row;
  color: ${({ theme }) => theme.text};
`
