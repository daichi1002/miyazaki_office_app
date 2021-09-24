import 'react-datepicker/dist/react-datepicker.css'
import dayjs from 'dayjs'
import { Fragment, useState } from 'react'
import DatePicker from 'react-datepicker'
import { makeStyles } from '@material-ui/styles'

type Props = {
  title: string
  onChange: (value: string[] | undefined) => void
  value: null[]
}

const useStyles = makeStyles({
  title: {
    fontSize: 20,
    paddingRight: 5,
    width: '100%',
  },
  box: {
    display: 'flex',
    alignItems: 'center',
  },
})
export const Calendar = (props: Props) => {
  const classes = useStyles()
  const [dateRange, setDateRange] = useState<any>([null, null])
  const [startDate, endDate] = dateRange
  const sendDate = (dateRange: any) => {
    setDateRange(dateRange)
    if (dateRange.includes(null)) {
      return
    }
    const formatDate = dateRange.map((date: Date) => {
      return dayjs(date).format('YYYY/MM/DD')
    })

    return formatDate
  }
  return (
    <Fragment>
      <div className={classes.box}>
        <p className={classes.title}>{props.title}</p>
        <DatePicker
          className="input"
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          onChange={(update) => {
            props.onChange(sendDate(update))
          }}
          isClearable={true}
        />
      </div>
    </Fragment>
  )
}

export default Calendar
