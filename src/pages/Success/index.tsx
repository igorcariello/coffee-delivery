import {
  Address,
  AddressContainer,
  Forecast,
  ForecastContainer,
  MainContainer,
  OrderContainer,
  Payment,
  PaymentContainer,
  SuccessContainer,
} from './styles'
import imgSuccess from '../../assets/imageSuccess.svg'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

export function Success() {
  const imageSuccess = imgSuccess
  return (
    <SuccessContainer>
      <MainContainer>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <OrderContainer className="elemento">
          <AddressContainer>
            <span>
              <MapPin weight="fill" />
            </span>
            <Address>
              <p>
                Entrega em <span>Rua João Daniel Martinelli, 102</span>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </Address>
          </AddressContainer>
          <ForecastContainer>
            <span>
              <Timer weight="fill" />
            </span>
            <Forecast>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min</span>
            </Forecast>
          </ForecastContainer>
          <PaymentContainer>
            <span>
              <CurrencyDollar />
            </span>
            <Payment>
              <p>Pagamento na entrega</p>
              <p>Cartão de Crédito</p>
            </Payment>
          </PaymentContainer>
        </OrderContainer>
      </MainContainer>
      <img src={imageSuccess} alt="" />
    </SuccessContainer>
  )
}
