/**
 * Representa una cuenta bancaria con operaciones de depósito y retiro.
 */
export class Account {
  /**
   * Monto máximo permitido para depositar en una sola operación.
   */
  public MAX_INPUT_AMOUNT: number = 10000;

  /**
   * Número identificador de la cuenta.
   */
  public AccountNumber: number;

  /**
   * Saldo actual de la cuenta.
   */
  public AccountBalance: number;

  /**
   * Realiza un retiro del saldo de la cuenta.
   * 
   * @param amount - Monto a retirar
   * @throws Error si el monto a retirar es mayor al saldo disponible
   */
  public Withdraw(amount: number): void {
    if (amount > this.AccountBalance)
      throw new Error('The input amount is greater than balance.');
    this.AccountBalance -= amount;
  }

  /**
   * Realiza un depósito al saldo de la cuenta.
   * 
   * @param amount - Monto a depositar
   * @throws Error si el monto a depositar excede el máximo permitido
   */
  public Deposit(amount: number): void {
    if (amount > this.MAX_INPUT_AMOUNT)
      throw new Error('The input amount is greater than maximum allowed.');
    this.AccountBalance += amount;
  }
}
