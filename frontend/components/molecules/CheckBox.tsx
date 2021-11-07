import { Fragment, memo } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { FormControlLabel, Checkbox } from '@material-ui/core'

export const CheckBox = () => {
  const { control } = useForm({
    defaultValues: {
      checkBox: false,
    },
  })
  return (
    <Fragment>
      <Controller
        control={control}
        name="checkBox"
        render={({ field: { value, onChange } }) => (
          <FormControlLabel
            control={<Checkbox checked={value} onChange={onChange} color="primary" />}
            label="チェックボックス"
          />
        )}
      />
    </Fragment>
  )
}

export default memo(CheckBox)
