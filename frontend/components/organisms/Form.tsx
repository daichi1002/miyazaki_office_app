import { useState, useCallback } from 'react'
import { Button } from '@material-ui/core'
import Calendar from '../molecules/DatePicker'
import { observer } from 'mobx-react'
import { Grid } from '@material-ui/core'
import PullDown from '../molecules/PullDown'
import { TotalPrice } from '../molecules/TotalPrice'
import { GET_ITEMMASTER } from '../../graphql/query'
import { useQuery } from '@apollo/client'
import { ProgressBar } from '../atom/ProgressBar'

type Props = {
  setValue: (value: string) => void
  setDate: (value: string[] | undefined) => void
  date: any
}

export const Form = observer((props: Props) => {
  const { loading, error, data } = useQuery(GET_ITEMMASTER)
  const hundleReset = useCallback(() => {
    setValue('')
  }, [])

  const { date, setValue, setDate } = props
  if (loading) return <ProgressBar />
  if (error) return <p>{error.message}</p>

  return (
    <Grid container direction="row" alignItems="center">
      <Grid item xs={8} md={8} lg={8}>
        <TotalPrice date={date} />
      </Grid>
      <Grid item xs={4} md={4} lg={4}>
        <Calendar title="日付" onChange={setDate} />
      </Grid>

      <Grid container direction="row" spacing={2} justifyContent="flex-end" alignItems="flex-end">
        <Grid item xs={4} md={4} lg={4}>
          <PullDown id={data.id} title="項目選択" select={data.itemMasters} setValue={setValue} />
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={hundleReset}>
            リセット
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
})
