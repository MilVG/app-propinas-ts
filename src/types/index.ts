export type itemsLunch = {
  id: string,
  name: string,
  price: number,
  description: string
}

export type lunchOrder = itemsLunch & {
  quantity: number
}
