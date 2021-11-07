import { Fragment, memo } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { TextField as MaterialForm } from '@material-ui/core'

export const TextField = () => {
  const { control } = useForm({
    defaultValues: {
      textBox: '',
    },
  })
  return (
    <Fragment>
      <Controller
        control={control}
        name="textBox"
        render={({ field }) => (
          <MaterialForm
            {...field}
            label="テキストフィールド"
            fullWidth
            margin="normal"
            placeholder="プレースホルダー"
          />
        )}
      />
    </Fragment>
  )
}

export default memo(TextField)
