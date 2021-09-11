import React from 'react'
import GenericTemplate from '../components/templates/GenericTemplates'
import { Box } from '@material-ui/core'
import clsx from 'clsx'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'

const Calculation = () => {
  const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
      borderRadius: '30',
    },
    searchField: {
      height: '40vh',
    },
    resultField: {
      height: '6vh',
    },
  }))
  const classes = useStyles()
  const searchFieldPaper = clsx(classes.paper, classes.searchField)
  const resultFieldPaper = clsx(classes.paper, classes.resultField)
  return (
    <GenericTemplate title="経費計算">
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <Paper className={searchFieldPaper}>スト</Paper>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Paper className={resultFieldPaper}>テスト</Paper>
          </Grid>
        </Grid>
        <Box pt={4}></Box>
      </Container>
    </GenericTemplate>
  )
}

export default Calculation
