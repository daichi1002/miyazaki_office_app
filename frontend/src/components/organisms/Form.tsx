import React from 'react'
import Calendar from '../molecules/DatePicker'
import { Grid } from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
import { Button, MenuItem } from '@material-ui/core'
import PullDown from '../molecules/PullDown'

export const Form = () => {
  const { handleSubmit } = useForm()
  const onSubmit = () => {}
  return (
    <Grid container>
      <Grid sm={2} />
      <Grid lg={8} sm={8} spacing={10}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Calendar />
          <PullDown />
          <Button variant="contained" color="primary" type="submit">
            次へ
          </Button>
        </form>
      </Grid>
    </Grid>
  )
}

export default Form
