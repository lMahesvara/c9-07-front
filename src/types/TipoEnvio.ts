export interface TipoEnvio {
  tipo: string
  costo: number | 0
  datos?: {
    nombre: string
    apellido: string
    telefono: string
    calle: string
    numero: string
    piso: string
    ciudad: string
    provincia: string
    codigoPostal: string
  }
}
