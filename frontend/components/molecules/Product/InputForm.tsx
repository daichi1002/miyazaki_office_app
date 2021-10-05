import { Grid } from '@material-ui/core'
import { TextField } from '@material-ui/core'

type Props = {
  title: string
  value: string | number
  onChange: (value: string | number) => void
}

export const InputForm = (props: Props) => {
  return (
    <Grid container direction="row" alignItems="center">
      <Grid item xs={4}>
        {props.title}
      </Grid>
      <Grid item xs={8}>
        <TextField
          label={props.title}
          fullWidth
          margin="normal"
          value={props.value}
          onChange={(event) => props.onChange(event.target.value)}
        />
      </Grid>
    </Grid>
  )
}

export default InputForm