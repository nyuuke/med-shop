import React, { useEffect, useMemo } from 'react'
import { useCrud } from '../../../global/exports'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import {
  ContentHeader,
  ContentLoader,
  AddProduct,
  EditProduct,
  DataTable,
} from '../../../components/imports'

const _Products = () => {
  const { path } = useRouteMatch()
  const { loadData, socket, loading } = useCrud()

  const column = useMemo(
    () => [
      { Header: 'id', accessor: 'id' },
      { Header: 'name', accessor: 'name' },
      { Header: 'price', accessor: 'price' },
      { Header: 'brand', accessor: 'tag.tag' },
      { Header: 'stock', accessor: 'stocks.quantity' },
      { Header: 'category', accessor: 'pivot[0].category' },
      { Header: 'sub category', accessor: 'pivot[0].sub_categ' },
    ],
    []
  )

  useEffect(() => {
    loadData('products')
  }, []) // eslint-disable-line

  return (
    <>
      <ContentHeader
        header='producst list'
        path={'products'}
        boolState={true}
      />
      <Switch>
        <Route exact path={path}>
          {loading ? (
            <ContentLoader />
          ) : (
            socket.length !== 0 && (
              <DataTable
                columns={column}
                data={socket}
                filename='product'
                path='products'
              />
            )
          )}
        </Route>
        <Route path={`${path}/add`}>
          <AddProduct />
        </Route>
        <Route path={`${path}/edit/:id`}>
          <EditProduct />
        </Route>
      </Switch>
    </>
  )
}

export default _Products
