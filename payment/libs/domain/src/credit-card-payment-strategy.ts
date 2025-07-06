import { IPaymentStrategy } from "./ipayment-strategy.interface";

/**
 * Estrategia concreta de pago con tarjeta de crédito.
 * 
 * Implementa la interfaz IPaymentStrategy para realizar pagos usando tarjeta de crédito.
 */
export class CreditCardPaymentStrategy implements IPaymentStrategy {
  /**
   * Realiza el pago con tarjeta de crédito.
   * 
   * @param amount Monto a pagar.
   * @returns `true` si el pago fue exitoso.
   */
  public Pay(amount: number): boolean {
    console.info("Customer pays Rs " + amount + " using Credit Card");
    return true;
  }    
}
