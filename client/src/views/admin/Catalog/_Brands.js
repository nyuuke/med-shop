import React, { useMemo, useEffect } from 'react'
import { useCrud } from '../../../global/exports'
import {
  ContentLoader,
  DataTable,
  ContentHeader,
  AddBrand,
  EditBrand,
} from '../../../components/imports'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

const _Brands = () => {
  const { path } = useRouteMatch()
  const { socket, loadData, loading } = useCrud()

  const column = useMemo(
    () => [
      { Header: 'id', accessor: 'id' },
      { Header: 'tag', accessor: 'tag' },
    ],
    []
  )

  useEffect(() => {
    loadData('brands')
  }, []) // eslint-disable-line

  return (
    <>
      <ContentHeader header='brands list' path='brands' boolState={true} />
      <Switch>
        <Route exact path={path}>
          {loading ? (
            <ContentLoader />
          ) : (
            <DataTable
              columns={column}
              data={socket}
              filename='BrandCSV'
              path='brands'
            />
          )}
        </Route>
        <Route path={`${path}/add`}>
          <AddBrand />
        </Route>
        <Route path={`${path}/edit/:id`}>
          <EditBrand />
        </Route>
      </Switch>
    </>
  )
}

export default _Brands
