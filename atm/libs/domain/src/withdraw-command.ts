import { Account } from './account';
import { ICommand } from './icommand.interface';

/**
 * Comando para realizar un retiro desde una cuenta.
 *
 * Implementa la interfaz ICommand y encapsula la operación de retiro.
 */
export class WithdrawCommand implements ICommand {
  /**
   * Cuenta bancaria asociada al comando.
   */
  _account: Account;

  /**
   * Monto a retirar.
   */
  _amount: number;

  /**
   * Constructor del comando Withdraw.
   * @param account Instancia de la cuenta sobre la que se realiza el retiro.
   * @param amount Monto a retirar.
   */
  constructor(account: Account, amount: number) {
    this._account = account;
    this._amount = amount;
  }

  /**
   * Ejecuta el comando de retiro llamando al método Withdraw de la cuenta.
   */
  Execute(): void {
    this._account.Withdraw(this._amount);
  }
}
