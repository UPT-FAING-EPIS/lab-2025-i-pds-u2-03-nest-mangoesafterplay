import { PaymentService } from './payment-service';

/**
 * Pruebas para verificar pagos exitosos con tipos válidos (CreditCard, DebitCard, Cash).
 */
describe('GivenAValidPaymentTypeAndAmount_WhenProcessPayment_ResultIsSuccesful', () => {
  type TestCase = [paymentType: number, amount: number];

  it.each<TestCase>([
    [1, 1000],
    [2, 2000],
    [3, 3000],
  ])(
    'Payment type %i and amount %i should be true',
    (paymentType, amount) => {
      expect(new PaymentService().ProcessPayment(paymentType, amount)).toBeTruthy();
    }
  );
});

/**
 * Pruebas para verificar que un tipo de pago inválido lanza un error.
 */
describe('GivenAnUnknownPaymentTypeAndAmount_WhenProcessPayment_ResultIsError', () => {
  type TestCase = [paymentType: number, amount: number];

  it.each<TestCase>([
    [4, 4000],
  ])(
    'Payment type %i and amount %i should be error',
    (paymentType, amount) => {
      expect(() => {
        new PaymentService().ProcessPayment(paymentType, amount);
      }).toThrow("You Select an Invalid Payment Option");
    }
  );
});
