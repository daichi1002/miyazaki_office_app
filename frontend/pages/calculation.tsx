import React from 'react'
import GenericTemplate from '../components/templates/GenericTemplates'
import { Box } from '@material-ui/core'
import clsx from 'clsx'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import { Form } from '../components/organisms/Form'

const Calculation = () => {
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
      height: '50vh',
    },
    fieldposition: {
      justifyContent: 'end',
    },
  }))
  const classes = useStyles()
  const searchFieldPaper = clsx(classes.paper, classes.fieldposition)
  const resultFieldPaper = clsx(classes.paper, classes.resultField)
  return (
    <GenericTemplate title="経費計算">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={12}>
            <Paper className={searchFieldPaper}>
              <Form />
            </Paper>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Paper className={resultFieldPaper}>テスト</Paper>
          </Grid>
        </Grid>
        <Box pt={4} />
      </Container>
    </GenericTemplate>
  )
}

export default Calculation
