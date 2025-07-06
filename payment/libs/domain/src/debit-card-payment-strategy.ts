import { IPaymentStrategy } from "./ipayment-strategy.interface";

/**
 * Estrategia concreta de pago con tarjeta de débito.
 * 
 * Implementa la interfaz IPaymentStrategy para realizar pagos usando tarjeta de débito.
 */
export class DebitCardPaymentStrategy implements IPaymentStrategy {
  /**
   * Realiza el pago con tarjeta de débito.
   * 
   * @param amount Monto a pagar.
   * @returns `true` si el pago fue exitoso.
   */
  public Pay(amount: number): boolean {
    console.info("Customer pays Rs " + amount + " using Debit Card");
    return true;
  }
}
