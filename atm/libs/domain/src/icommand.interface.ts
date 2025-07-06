/**
 * Interfaz ICommand.
 *
 * Define el contrato para los comandos que pueden ejecutarse.
 * Cada clase que implemente esta interfaz debe definir el método `Execute`,
 * el cual encapsula una acción a realizar.
 */
export interface ICommand {
  /**
   * Ejecuta el comando asociado.
   */
  Execute(): void;
}
