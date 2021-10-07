import { useState, useEffect } from 'react'
import Calendar from '../molecules/DatePicker'
import { observer } from 'mobx-react'
import { Grid } from '@material-ui/core'
import PullDown from '../molecules/PullDown'
import { TotalPrice } from '../molecules/TotalPrice'
import { GET_ITEMMASTER } from '../../graphql/query'
import { useQuery } from '@apollo/client'
type Props = {
  setValue: (value: String) => void
}

export const Form = observer((props: Props) => {
  const { loading, error, data } = useQuery(GET_ITEMMASTER)
  const [date, setDate] = useState<any>([null, null])
  const [category, setCategory] = useState('')

  const { setValue } = props
  if (loading) return <p>...loading</p>
  if (error) return <p>{error.message}</p>

  return (
    <Grid container direction="row" alignItems="center">
      <Grid item xs={8} md={8} lg={8}>
        <TotalPrice price={0} />
      </Grid>
      <Grid item xs={4} md={4} lg={4}>
        <Calendar title="日付" onChange={setDate} value={date} />

        <PullDown
          id={data.id}
          title="項目選択"
          onChange={setCategory}
          value={category}
          select={data.itemMasters}
          setValue={setValue}
        />
      </Grid>
    </Grid>
  )
})
