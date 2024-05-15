export interface Order {
  id: number
  order_name: string
  product_amount: number
  creation_date: {
    full: string
    short: string
  }
  price: {
    USD: string
    UAH: string
  }
}

export interface OrderState {
	orders: Order[]
}