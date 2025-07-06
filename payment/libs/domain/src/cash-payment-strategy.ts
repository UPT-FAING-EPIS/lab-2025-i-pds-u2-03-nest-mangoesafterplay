import { IPaymentStrategy } from "./ipayment-strategy.interface";

/**
 * Estrategia concreta de pago en efectivo.
 * 
 * Implementa la interfaz IPaymentStrategy para realizar pagos usando efectivo.
 */
export class CashPaymentStrategy implements IPaymentStrategy {
  /**
   * Realiza el pago con efectivo.
   * 
   * @param amount Monto a pagar.
   * @returns `true` si el pago fue exitoso.
   */
  public Pay(amount: number): boolean {
    console.info("Customer pays Rs " + amount + " By Cash");
    return true;
  }
}
