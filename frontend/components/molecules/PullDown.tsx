import { TextField, MenuItem } from '@material-ui/core'
import { useState, useCallback, memo } from 'react'

type Props = {
  id: number
  title: string
  setValue: (value: string) => void
  select: {
    id: number
    name: string
  }[]
}

export const PullDown = (props: Props) => {
  const menu = props?.select
  const { setValue } = props
  const [selectValue, setSelectValue] = useState('')
  const handleSelect = useCallback(
    (select: string) => {
      setSelectValue(select)
      setValue(select)
    },
    [setSelectValue, setValue]
  )

  return (
    <TextField key={props.id} label={props.title} fullWidth margin="normal" select value={selectValue}>
      {menu.map((selectDate) => (
        <MenuItem key={selectDate.id} value={selectValue} onClick={() => handleSelect(selectDate.name)}>
          {selectDate.name}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default memo(PullDown)
