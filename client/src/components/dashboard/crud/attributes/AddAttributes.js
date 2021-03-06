import React, { useState } from 'react'
import {
  Wrapper,
  InputGroup,
  Input,
  Label,
  Div,
  Button,
  Linker,
  StyledSelect,
} from '../../../../styles/Crud.element'
import { useCrud } from '../../../../global/exports'
import { useHistory } from 'react-router'

const AddAttributes = () => {
  const history = useHistory()
  const { storeData } = useCrud()
  const [category, setCategory] = useState()
  const [attribute, setAttribute] = useState()

  const option = [
    { label: 'artisans', value: 'artisans' },
    { label: 'Product Beauty', value: 'product beauty' },
    { label: 'Books', value: 'book' },
    { label: 'Cosmetic', value: 'cosmetic' },
    { label: 'Organic', value: 'organic' },
  ]

  const CustemStyles = {
    singleValue: () => ({
      color: localStorage.getItem('mode') === 'light' ? '#232323' : '#efefef',
    }),

    container: (provided) => ({
      ...provided,
      width: '100%',
    }),

    control: () => ({
      display: 'flex',
      padding: '5px',
      background:
        localStorage.getItem('mode') === 'light' ? '#efefef' : '#232323',
    }),

    menu: (provided, state) => ({
      ...provided,
      color: state.isSelected && 'red',
      background:
        localStorage.getItem('mode') === 'light' ? '#efefef' : '#232323',
    }),

    option: (provided, state) => ({
      ...provided,
      color: localStorage.getItem('mode') === 'light' ? '#232323' : '#efefef',
      background:
        state.isSelected &&
        (localStorage.getItem('mode') === 'light' ? '#ffffff' : '#111111'),
      '&:hover': {
        background:
          localStorage.getItem('mode') === 'light' ? '#ffffff' : '#111111',
      },
    }),
  }

  return (
    <>
      <Wrapper>
        <InputGroup>
          <StyledSelect
            placeholder='select category...'
            styles={CustemStyles}
            options={option}
            onChange={(e) => setCategory(e.value)}
          />
        </InputGroup>
        <InputGroup>
          <Label>Attributes</Label>
          <Input
            type='text'
            placeholder='add new attributes'
            onChange={(e) => setAttribute(e.target.value)}
          />
        </InputGroup>
        <Div>
          <Linker to='/dash/attributes'>cancel</Linker>
          <Button
            onClick={() =>
              storeData('attributes', {
                category: category,
                sub_categ: attribute,
              }).then(() => history.push('/dash/attributes'))
            }>
            Add
          </Button>
        </Div>
      </Wrapper>
    </>
  )
}

export default AddAttributes
