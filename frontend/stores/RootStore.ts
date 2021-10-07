import { useContext } from 'react'
import { MobXProviderContext } from 'mobx-react'
import { CaliculateStore } from './CaliculateStore'

export class RootStore {
  public caliculateStore: CaliculateStore

  constructor() {
    this.caliculateStore = new CaliculateStore()
  }
}
