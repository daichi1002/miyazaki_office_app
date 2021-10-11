import React, { useState, useEffect } from 'react'
import { Box } from '@material-ui/core'
import clsx from 'clsx'
import client from '../graphql/client'
import { ApolloProvider } from '@apollo/client'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import { Form } from '../components/organisms/Form'
import { TableField } from '../components/molecules/Table/Table'
import { SELECT_ITEMMASTER } from '../graphql/query'
import { useQuery } from '@apollo/client'

export const Calculation = () => {
  const [value, setValue] = useState('')
  const { loading, error, data } = useQuery(SELECT_ITEMMASTER, { variables: { name: value } })

  //関数のchangeStateを定義。引数のisStateは子コンポーネントで実行した際に取ってくる。
  const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(2),
      overflow: 'auto',
      flexDirection: 'column',
      borderRadius: '30',
    },
    searchField: {
      height: '20vh',
    },
    resultField: {
      height: '60vh',
    },
  }))

  const classes = useStyles()
  const searchFieldPaper = clsx(classes.paper)

  return (
    <ApolloProvider client={client}>
      <Container maxWidth="lg">
        <h1>出資確認</h1>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={12}>
            <Paper className={searchFieldPaper}>
              <Form setValue={setValue} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <TableField loading={loading} error={error} data={data} />
          </Grid>
        </Grid>
        <Box pt={4} />
      </Container>
    </ApolloProvider>
  )
}

export default Calculation
