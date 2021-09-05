import React from "react";
import { action, observable } from "mobx";
import { observer, Provider } from "mobx-react";
import Button from '@material-ui/core/Button';
import { useStores } from '../hooks/use-stores'

const App = observer(() => {
    const { countStore  } = useStores()

  return (
    <div className="App">
{/*     variant?: 'text' | 'outlined' | 'contained'; */}
      <Button variant='contained'
        onClick={() => {
          countStore.setIncrementCount();
        }}
      >
        Increment
      </Button>
      <Button
        onClick={() => {
        }}
      >
        Decrement
      </Button>
      <p>{countStore.count}</p>
      <p>{countStore.getDoubleCount}</p>
    </div>
)});

export default App