import { TextField, MenuItem } from '@material-ui/core'
import { useState, useCallback, memo } from 'react'
import Grid from '@material-ui/core/Grid'

type Props = {
  title: string
  onChange: (value: any) => void
  value: String
  select: {
    id: number
    name: string
  }[]
}

export const SelectBox = (props: Props) => {
  const menu = props?.select
  const [selectValue, setSelectValue] = useState('')
  const handleSelect = useCallback((select: string) => {
    setSelectValue(select)
  }, [])
  return (
    <Grid container direction="row" alignItems="center">
      <Grid item xs={12} md={4} lg={4}>
        {props.title}
      </Grid>
      <Grid item xs={12} md={8} lg={8}>
        <TextField
          label={props.title}
          fullWidth
          margin="normal"
          select
          value={selectValue}
          onChange={(event) => props.onChange(event.target.value)}
        >
          {menu.map((selectDate) => (
            <MenuItem key={selectDate.id} value={selectDate.name} onClick={() => handleSelect(selectDate.name)}>
              {selectDate.name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    </Grid>
  )
}

export default memo(SelectBox)
