import React from 'react'
import Box from '@material-ui/core/Box'
import clsx from 'clsx'
import GenericTemplate from '../components/templates/GenericTemplates'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'

const HomePage: React.FC = () => {
  const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 300,
    },
  }))
  const classes = useStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  return (
    <GenericTemplate title="トップページ">
      <>トップページ内容</>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={6}>
            <Paper className={fixedHeightPaper}>テスト</Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Paper className={fixedHeightPaper}>テスト</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>テスト</Paper>
          </Grid>
        </Grid>
        <Box pt={4}></Box>
      </Container>
    </GenericTemplate>
  )
}

export default HomePage
