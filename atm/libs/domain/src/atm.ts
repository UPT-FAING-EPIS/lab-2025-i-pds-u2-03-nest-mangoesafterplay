import { ICommand } from './icommand.interface';

/**
 * Representa el invocador en el patrón de diseño Command.
 * Ejecuta el comando proporcionado.
 */
export class ATM {
  /**
   * Comando a ejecutar.
   */
  private _command: ICommand;

  /**
   * Crea una instancia de la clase ATM con un comando específico.
   * 
   * @param command - Instancia que implementa la interfaz ICommand.
   */
  constructor(command: ICommand) {
    this._command = command;
  }

  /**
   * Ejecuta la acción del comando actual.
   */
  public Action(): void {
    this._command.Execute();
  }
}
