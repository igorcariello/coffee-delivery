import {
  CheckoutContainer,
  AnddressAndPaymentContainer,
  AddressContainer,
  HeaderAddress,
  PaymentContainer,
  SelectedCoffeesContainer,
  MainSelectedCoffees,
  DivisorCard,
  TotalItems,
  CalculationContainer,
  Delivery,
  Total,
  ButtonConfirm,
  FormAddress,
  FirstLine,
  SecondLine,
  ThirdLine,
  FourthLine,
  PaymentMethods,
  HeaderPayment,
} from './styles'
import { CardSelectedCoffees } from '../Checkout/components/CardSelectedCoffees'

import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from '@phosphor-icons/react'
import { Input } from './components/Input'
import { PaymentMethod } from './components/PaymentMethod'
import { useState } from 'react'

export function Checkout() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(null)

  const handlePaymentMethodSelect = (method: string | null) => {
    setSelectedPaymentMethod(method)
  }

  return (
    <CheckoutContainer>
      <AnddressAndPaymentContainer>
        <h2>Complete seu pedido</h2>
        <AddressContainer>
          <HeaderAddress>
            <MapPinLine />
            <div>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </HeaderAddress>
          <FormAddress>
            <form action="">
              <FirstLine>
                <Input widthInput="12.5rem" type="text" placeholder="CEP" />
              </FirstLine>
              <SecondLine>
                <Input widthInput="35rem" type="text" placeholder="Rua" />
              </SecondLine>
              <ThirdLine>
                <Input widthInput="12.5rem" type="text" placeholder="Número" />
                <Input
                  widthInput="100%"
                  type="text"
                  placeholder="Complemento"
                />
              </ThirdLine>
              <FourthLine>
                <Input widthInput="12.5rem" type="text" placeholder="Bairro" />
                <Input widthInput="100%" type="text" placeholder="Cidade" />
                <Input widthInput="5rem" type="text" placeholder="UF" />
              </FourthLine>
            </form>
          </FormAddress>
        </AddressContainer>
        <PaymentContainer>
          <HeaderPayment>
            <CurrencyDollar />
            <div>
              <p>Pagamento</p>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </HeaderPayment>
          <PaymentMethods>
            <PaymentMethod
              imageSvg={CreditCard}
              nameMethod="Cartão de Crédito"
              isSelected={selectedPaymentMethod === 'Cartão de Crédito'}
              onClick={() => handlePaymentMethodSelect('Cartão de Crédito')}
            />
            <PaymentMethod
              imageSvg={Bank}
              nameMethod="Cartão de Débito"
              isSelected={selectedPaymentMethod === 'Cartão de Débito'}
              onClick={() => handlePaymentMethodSelect('Cartão de Débito')}
            />
            <PaymentMethod
              imageSvg={Money}
              nameMethod="Dinheiro"
              isSelected={selectedPaymentMethod === 'Dinheiro'}
              onClick={() => handlePaymentMethodSelect('Dinheiro')}
            />
          </PaymentMethods>
        </PaymentContainer>
      </AnddressAndPaymentContainer>
      <SelectedCoffeesContainer>
        <h2>Cafés Selecionados</h2>
        <MainSelectedCoffees>
          <CardSelectedCoffees />
          <DivisorCard />
          <CardSelectedCoffees />
          <DivisorCard />
          <CalculationContainer>
            <TotalItems>
              <p>Total de itens</p>
              <span>R$ 29,70</span>
            </TotalItems>
            <Delivery>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </Delivery>
            <Total>
              <p>Total</p>
              <strong>
                R$ <span>33,20</span>
              </strong>
            </Total>
          </CalculationContainer>
          <ButtonConfirm>Confirmar Pedido</ButtonConfirm>
        </MainSelectedCoffees>
      </SelectedCoffeesContainer>
    </CheckoutContainer>
  )
}
