import { TextField, MenuItem } from '@material-ui/core'

type Props = {
  title: string
  onChange: (value: string) => void
  value: string
}
export const PullDown = (props: Props) => {
  return (
    <TextField
      label={props.title}
      fullWidth
      margin="normal"
      select
      value={props.value}
      onChange={(event) => props.onChange(event.target.value)}
    >
      <MenuItem value="one">選択肢1</MenuItem>
      <MenuItem value="two">選択肢2</MenuItem>
      <MenuItem value="three">選択肢3</MenuItem>
    </TextField>
  )
}

export default PullDown
