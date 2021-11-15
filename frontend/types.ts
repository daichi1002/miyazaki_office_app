export type History = {
  userId: number
  title: string
  purchaseAt: any
}

export type HistoryDetail = {
  id: number
  historyId: number | null
  content: string
  price: string
  num: string
}
