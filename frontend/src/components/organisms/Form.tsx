import React from 'react'
import Calendar from '../molecules/DatePicker'
import { Grid } from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
import { Button, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import PullDown from '../molecules/PullDown'

export const Form = () => {
  const { handleSubmit } = useForm()
  const onSubmit = () => {}
  const useStyles = makeStyles(theme => ({
    flexPosition: {
      justifyContent: 'flex-end',
    },
  }))
  const classes = useStyles()
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction="row" justifyContent="flex-end" alignItems="center">
        <Calendar />
        <PullDown />
        <Button variant="contained" color="primary" type="submit">
          次へ
        </Button>
      </Grid>
    </form>
  )
}
