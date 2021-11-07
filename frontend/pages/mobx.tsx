import { Fragment, useState, useEffect } from 'react'
import { observer } from 'mobx-react'
import Button from '@material-ui/core/Button'
import { useStores } from '../hooks/use-stores'

const App = observer(() => {
  const { countStore } = useStores()
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `${count}回クリックされました`
  }, [count])

  return (
    <Fragment>
      {/*     variant?: 'text' | 'outlined' | 'contained'; */}
      <Button
        variant="contained"
        onClick={() => {
          countStore.setIncrementCount()
        }}
      >
        Increment
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          countStore.setDecrimentCount()
        }}
      >
        Decrement
      </Button>
      <h1>useState</h1>
      <p>{countStore.count}</p>
      <p>{countStore.getDoubleCount}</p>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>++</button>
      <button onClick={() => setCount(count - 1)}>--</button>
    </Fragment>
  )
})

export default App
