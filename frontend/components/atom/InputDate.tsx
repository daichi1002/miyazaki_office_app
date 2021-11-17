import { Grid } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import jaLocale from 'date-fns/locale/ja'
import { format } from 'date-fns'
import { useState } from 'react'
import dayjs from 'dayjs'

class ExtendedUtils extends DateFnsUtils {
  getCalendarHeaderText(date: any) {
    return format(date, 'yyyy MMM', { locale: this.locale })
  }
  getDatePickerHeaderText(date: any) {
    return format(date, 'MMMd日', { locale: this.locale })
  }
}

const InputDate = (props: any) => {
  const [date, setDate] = useState(null)
  const changeDateHandler = (newDate: any) => {
    setDate(newDate)
    return dayjs(newDate).format('YYYY/MM/DD')
  }

  return (
    <Grid container direction="row" alignItems="center">
      <Grid item xs={12} md={4} lg={4}>
        {props.title}
      </Grid>
      <Grid item xs={12} md={8} lg={8}>
        <MuiPickersUtilsProvider utils={ExtendedUtils} locale={jaLocale}>
          <DatePicker
            label="購入日"
            value={date}
            fullWidth
            margin="normal"
            format="yyyy/M/d"
            onChange={(update) => {
              props.onChange(changeDateHandler(update))
            }}
            okLabel="決定"
            cancelLabel="キャンセル"
          />
        </MuiPickersUtilsProvider>
      </Grid>
    </Grid>
  )
}

export default InputDate
