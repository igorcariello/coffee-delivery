import { Header } from '../../components/Header'
import {
  BannerContainer,
  HomeContainer,
  ImageContainer,
  TextContainer,
  CharacteristicsContainer,
  CoffeesContainer,
  MainContainer,
} from './styles'
import bannerImage from '../../assets/banner.svg'
import expressoTradicional from '../../assets/coffesImages/expressoTradicional.svg'
import { ShoppingCart, Timer, Package, Coffee } from '@phosphor-icons/react'
import { Card } from '../../components/Card'

export function Home() {
  const imageBanner = bannerImage
  const imageExpressoTradicional = expressoTradicional
  return (
    <HomeContainer>
      <Header />
      <BannerContainer>
        <TextContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <CharacteristicsContainer>
            <div>
              <ul>
                <li>
                  <span className="darkYellow">
                    <ShoppingCart weight="fill" />
                  </span>
                  Compra simples e segura
                </li>
                <li>
                  <span className="yellow">
                    <Timer weight="fill" />
                  </span>
                  Entrega rápida e rastreada
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <span className="gray">
                    <Package weight="fill" />
                  </span>
                  Embalagem mantém o café intacto
                </li>
                <li>
                  <span className="purple">
                    <Coffee weight="fill" />
                  </span>
                  O café chega fresquinho até você
                </li>
              </ul>
            </div>
          </CharacteristicsContainer>
        </TextContainer>
        <ImageContainer>
          <img
            src={imageBanner}
            alt="Imagem de um copo de café no banner da página"
          />
        </ImageContainer>
      </BannerContainer>
      <MainContainer>
        <h2>Nossos Cafés</h2>
        <CoffeesContainer>
          <Card
            imageCard={imageExpressoTradicional}
            name="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            valueCoffe="9,90"
          />
        </CoffeesContainer>
      </MainContainer>
    </HomeContainer>
  )
}
