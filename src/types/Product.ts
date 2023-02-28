export interface Product {
  id?: string
  name: string
  description: string
  price: number
  cover?: string
  images?: string[]
  discount: number
  category?: string
  franchise?: string
  quantity?: number
}
