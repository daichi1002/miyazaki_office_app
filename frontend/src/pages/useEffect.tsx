import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'

/* https://qiita.com/beeeyan/items/a06225be813ebb5bb11d */

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

const EffectFunc = () => {
  const classes = useStyles()
  const [count, setCount] = useState(0)
  const [name, setName] = useState({
    lastName: '',
    firstName: '',
  })
  useEffect(() => {
    document.title = `${count}回クリックされました`
  }, [count])

  return (
    <>
      <p>{`${count}回クリックされました`}</p>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={() => setCount((prev) => prev + 1)}>ボタン</Button>
        <Button onClick={() => setCount(0)}>リセット</Button>
      </ButtonGroup>
      <p>{`私の名前は${name.lastName} ${name.firstName}です`}</p>
      <form className={classes.root} noValidate autoComplete="off">
        <Input
          placeholder="姓"
          value={name.lastName}
          onChange={(event) => {
            setName({ ...name, lastName: event.target.value })
          }}
        />
        <Input
          placeholder="名"
          value={name.firstName}
          onChange={(event) => {
            setName({ ...name, firstName: event.target.value })
          }}
        />
      </form>
    </>
  )
}

export default EffectFunc
