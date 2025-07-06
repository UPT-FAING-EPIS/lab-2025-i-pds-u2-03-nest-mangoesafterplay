import { Account } from './account';
import { ICommand } from './icommand.interface';

/**
 * Comando concreto que representa una operación de depósito en una cuenta.
 */
export class DepositCommand implements ICommand {
  /**
   * Cuenta asociada al comando.
   */
  private _account: Account;

  /**
   * Monto a depositar.
   */
  private _amount: number;

  /**
   * Crea una instancia del comando de depósito.
   * 
   * @param account - Cuenta destino del depósito.
   * @param amount - Monto a depositar.
   */
  constructor(account: Account, amount: number) {
    this._account = account;
    this._amount = amount;
  }

  /**
   * Ejecuta el comando de depósito en la cuenta asociada.
   */
  Execute(): void {
    this._account.Deposit(this._amount);
  }
}
