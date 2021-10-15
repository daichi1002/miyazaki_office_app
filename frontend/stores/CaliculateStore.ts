import { action, observable, runInAction } from 'mobx'
import dayjs from 'dayjs'
import { useContext } from 'react'
import { MobXProviderContext } from 'mobx-react'

export class CaliculateStore {
  //===============================
  // observables 監視可能な値
  //===============================
  //===============================
  // fetch APIからデータを取得
  //==============================
}

export const useCaliculateStore = (): CaliculateStore => {
  return useContext(MobXProviderContext).rootStore.assetStore
}
