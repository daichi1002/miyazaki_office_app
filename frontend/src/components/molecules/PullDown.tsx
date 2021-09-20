import React, { Fragment } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { TextField, MenuItem } from '@material-ui/core'
import { Grid } from '@material-ui/core'
export const PullDown = () => {
  const { control } = useForm({
    defaultValues: {
      pullDown: '',
    },
  })
  return (
    <Fragment>
      <Grid item xs={4} md={4} lg={4}>
        <Controller
          control={control}
          name="pullDown"
          render={({ field }) => (
            <TextField
              {...field}
              label="プルダウンリスト"
              fullWidth
              margin="normal"
              id="select"
              select
            >
              <MenuItem value="one">選択肢1</MenuItem>
              <MenuItem value="two">選択肢2</MenuItem>
              <MenuItem value="three">選択肢3</MenuItem>
            </TextField>
          )}
        />
      </Grid>
    </Fragment>
  )
}

export default PullDown
