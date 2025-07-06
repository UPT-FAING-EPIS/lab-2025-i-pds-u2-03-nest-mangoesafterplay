/**
 * Interfaz que define el comportamiento esperado para las estrategias de pago.
 *
 * Implementaciones concretas de esta interfaz deben proporcionar la lógica
 * necesaria para procesar un pago según un método específico (tarjeta de crédito,
 * débito, efectivo, etc.).
 */
export interface IPaymentStrategy {
  /**
   * Método para realizar un pago por el monto especificado.
   * 
   * @param amount - Monto a pagar.
   * @returns `true` si el pago se realizó exitosamente, de lo contrario `false`.
   */
  Pay(amount: number): boolean;
}
