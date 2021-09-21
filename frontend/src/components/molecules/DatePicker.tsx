import 'react-datepicker/dist/react-datepicker.css'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { Control, Controller, Path, useForm } from 'react-hook-form'
export const Calendar = () => {
  const [dateRange, setDateRange] = useState([null, null])
  const [startDate, endDate] = dateRange
  const { control } = useForm({
    defaultValues: {
      Calendar: new Date(),
    },
  })
  return (
    <Controller
      name="Calendar"
      control={control}
      render={({ field }) => (
        <DatePicker
          className="input"
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          onChange={(update: null) => {
            setDateRange(update)
          }}
          selected={field.value}
        />
      )}
    />
  )
}

export default Calendar
