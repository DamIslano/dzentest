export interface Product {
  id: number
  icon: string
  product_title: string
  product_subtitle: string
  product_condition: string 
  product_description: string
  product_arrivalDate: string
  product_license: string
  status: string
  period_from: string
  period_to: string
  cost_USD: string
  cost_UAH: string
}

export interface ProductState {
	products: Product[]
	type: string
	specification: string
}