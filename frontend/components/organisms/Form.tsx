import { useState, useEffect } from 'react'
import Calendar from '../molecules/DatePicker'
import { observer } from 'mobx-react'
import { Grid } from '@material-ui/core'
import PullDown from '../molecules/PullDown'
import { TotalPrice } from '../molecules/TotalPrice'

export const Form = observer(() => {
  const [date, setDate] = useState<any>([null, null])
  const [category, setCategory] = useState('')

  const onChange = () => {}
  useEffect(() => {
    console.log(category, date)
  }, [category, date])

  return (
    <Grid container direction="row" alignItems="center">
      <Grid item xs={8} md={8} lg={8}>
        <TotalPrice price={0} />
      </Grid>
      <Grid item xs={4} md={4} lg={4}>
        <Calendar title="日付" onChange={setDate} value={date} />

        <PullDown title="項目選択" onChange={setCategory} value={category} />
      </Grid>
    </Grid>
  )
})
