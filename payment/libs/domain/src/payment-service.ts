import { CashPaymentStrategy } from "./cash-payment-strategy";
import { CreditCardPaymentStrategy } from "./credit-card-payment-strategy";
import { DebitCardPaymentStrategy } from "./debit-card-payment-strategy";
import { PaymentContext } from "./payment-context";

/**
 * Servicio que gestiona el proceso de pago seleccionando dinámicamente la estrategia adecuada.
 */
export class PaymentService {
    
    /**
     * Procesa un pago según el tipo de pago seleccionado.
     * 
     * @param SelectedPaymentType Tipo de pago a realizar (1: tarjeta de crédito, 2: débito, 3: efectivo).
     * @param Amount Monto a pagar.
     * @returns `true` si el pago fue exitoso, lanza error si el tipo de pago es inválido.
     */
    public ProcessPayment(SelectedPaymentType: number, Amount: number): boolean {
        const context = new PaymentContext();

        if (SelectedPaymentType == PaymentType.CreditCard) {
            context.SetPaymentStrategy(new CreditCardPaymentStrategy());
        } else if (SelectedPaymentType == PaymentType.DebitCard) {
            context.SetPaymentStrategy(new DebitCardPaymentStrategy());
        } else if (SelectedPaymentType == PaymentType.Cash) {
            context.SetPaymentStrategy(new CashPaymentStrategy());
        } else {
            throw new Error("You Select an Invalid Payment Option");
        }

        return context.Pay(Amount);
    }
}

/**
 * Enumeración que define los tipos de pago disponibles.
 */
export enum PaymentType {
    /** Pago con tarjeta de crédito. */
    CreditCard = 1,

    /** Pago con tarjeta de débito. */
    DebitCard = 2,

    /** Pago en efectivo. */
    Cash = 3,
}
