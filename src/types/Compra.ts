import { OpcionesPago } from './Enums'
import { Product } from './Product'
import { TipoEnvio } from './TipoEnvio'

export interface Compra {
  tipoEnvio?: TipoEnvio
  tipoPago?: OpcionesPago
  subtotal?: number
  total?: number
  productos?: Product[]
}
