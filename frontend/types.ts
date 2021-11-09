export type History = {
  id: number
  userId: number
  title: string
  purchaseAt: any
}

export type HistoryDetail = {
  id: number
  historyId: number | null
  content: string
  price: number
  num: number
}
