import {
  AddressAndPaymentContainer,
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
  PaymentMethods,
  HeaderPayment,
  FormContainer,
} from './styles'
import { CardSelectedCoffees } from '../Checkout/components/CardSelectedCoffees'
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from '@phosphor-icons/react'
import { PaymentMethod } from './components/PaymentMethod'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { InputsAddress } from './components/InputsAddress'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export function Checkout() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(null)

  const newOrderFormValidationSchema = zod.object({
    cep: zod
      .string()
      .min(8, 'Informe o CEP de entrega')
      .max(8, 'O CEP deve conter 8 dígitos'),
    street: zod.string().min(5, 'Informe a rua de entrega'),
    number: zod.string().min(1, 'Informe o número de entrega'),
    complement: zod.string(),
    neighborhood: zod.string().min(1, 'Informe o bairro de entrega'),
    city: zod.string().min(3, 'Informe a cidade de entrega'),
    state: zod
      .string()
      .min(1, 'Informe o estado de entrega')
      .max(2, 'Coloque somente a abreviação do estado'),
  })

  type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
    },
  })

  const handlePaymentMethodSelect = (method: string | null) => {
    setSelectedPaymentMethod(method)
  }

  return (
    <FormContainer>
      <AddressAndPaymentContainer>
        <h2>Complete seu pedido</h2>
        <AddressContainer>
          <HeaderAddress>
            <MapPinLine />
            <div>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </HeaderAddress>
          <FormProvider {...newOrderForm}>
            <InputsAddress />
          </FormProvider>
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
      </AddressAndPaymentContainer>
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
          <ButtonConfirm type="submit">Confirmar Pedido</ButtonConfirm>
        </MainSelectedCoffees>
      </SelectedCoffeesContainer>
    </FormContainer>
  )
}
