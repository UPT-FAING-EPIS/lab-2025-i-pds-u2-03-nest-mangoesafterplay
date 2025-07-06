import { IPaymentStrategy } from "./ipayment-strategy.interface";

/**
 * Clase que representa el contexto para la ejecución de estrategias de pago.
 * 
 * Esta clase utiliza el patrón Strategy para permitir cambiar el algoritmo de pago
 * en tiempo de ejecución, delegando la operación a una implementación concreta de `IPaymentStrategy`.
 */
export class PaymentContext {
    
    /**
     * Estrategia de pago actual utilizada por el contexto.
     */
    private PaymentStrategy: IPaymentStrategy;

    /**
     * Establece la estrategia de pago que se desea utilizar.
     * 
     * @param strategy Estrategia concreta que implementa `IPaymentStrategy`.
     */
    public SetPaymentStrategy(strategy: IPaymentStrategy): void {
        this.PaymentStrategy = strategy;
    }

    /**
     * Ejecuta el pago utilizando la estrategia previamente establecida.
     * 
     * @param amount Monto a pagar.
     * @returns `true` si el pago fue exitoso.
     */
    public Pay(amount: number): boolean {
        return this.PaymentStrategy.Pay(amount);
    }
}
