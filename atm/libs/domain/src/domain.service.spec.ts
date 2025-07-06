import { Account } from './account';
import { WithdrawCommand } from './withdraw-command';
import { DepositCommand } from './deposit-command';
import { ATM } from './atm';

/**
 * Escenario: Se crea una cuenta con saldo inicial de 300.
 * Se ejecuta un retiro de 100 a través del patrón Command.
 * Se espera que el saldo final sea 200.
 */
describe('GivenAccountAndWithdraw_ThenExecute_ReturnsCorrectAmount', () => {
  let account: Account;

  /**
   * Configura la cuenta y ejecuta el comando de retiro antes de cada prueba.
   */
  beforeEach(async () => {
    account = new Account();
    account.AccountBalance = 300;
    const amount = 100;
    const withdraw = new WithdrawCommand(account, amount);
    new ATM(withdraw).Action();
  });

  /**
   * Verifica que el saldo de la cuenta sea 200 después del retiro.
   */
  it('should be 200', () => {
    expect(account.AccountBalance == 200).toBeTruthy();
  });
});

/**
 * Escenario: Se crea una cuenta con saldo inicial de 200.
 * Se ejecuta un depósito de 100 a través del patrón Command.
 * Se espera que el saldo final sea 300.
 */
describe('GivenAccountAndDeposit_ThenExecute_ReturnsCorrectAmount', () => {
  let account: Account;

  /**
   * Configura la cuenta y ejecuta el comando de depósito antes de cada prueba.
   */
  beforeEach(async () => {
    account = new Account();
    account.AccountBalance = 200;
    const amount = 100;
    const deposit = new DepositCommand(account, amount);
    new ATM(deposit).Action();
  });

  /**
   * Verifica que el saldo de la cuenta sea 300 después del depósito.
   */
  it('should be 300', () => {
    expect(account.AccountBalance == 300).toBeTruthy();
  });
});
