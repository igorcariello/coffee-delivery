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
import expressoAmericano from '../../assets/coffesImages/expressoAmericano.svg'
import expressoCremoso from '../../assets/coffesImages/expressoCremoso.svg'
import expressoGelado from '../../assets/coffesImages/expressoGelado.svg'
import cafeComLeite from '../../assets/coffesImages/cafeComLeite.svg'
import latte from '../../assets/coffesImages/latte.svg'
import capuccino from '../../assets/coffesImages/capuccino.svg'
import macchiato from '../../assets/coffesImages/macchiato.svg'
import mocaccino from '../../assets/coffesImages/mocaccino.svg'
import chocolateQuente from '../../assets/coffesImages/chocolateQuente.svg'
import cubano from '../../assets/coffesImages/cubano.svg'
import havaiano from '../../assets/coffesImages/havaiano.svg'
import arabe from '../../assets/coffesImages/arabe.svg'
import irlandes from '../../assets/coffesImages/irlandes.svg'

import { ShoppingCart, Timer, Package, Coffee } from '@phosphor-icons/react'
import { Card } from './components/Card'

export function Home() {
  const imageBanner = bannerImage
  const imageExpressoTradicional = expressoTradicional
  const imageExpressoAmericano = expressoAmericano
  const imageExpressoCremoso = expressoCremoso
  const imageExpressoGelado = expressoGelado
  const imageCafeComLeite = cafeComLeite
  const imageLatte = latte
  const imageCapuccino = capuccino
  const imageMacchiato = macchiato
  const imageMocaccino = mocaccino
  const imageChocolateQuente = chocolateQuente
  const imageCubano = cubano
  const imageHavaiano = havaiano
  const imageArabe = arabe
  const imageIrlandes = irlandes

  return (
    <HomeContainer>
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
            id="1"
            tagCoffee={['Tradicional']}
            imageCard={imageExpressoTradicional}
            name="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            valueCoffee={9.9}
          />
          <Card
            id="2"
            tagCoffee={['Tradicional']}
            imageCard={imageExpressoAmericano}
            name="Expresso Americano"
            description="Expresso diluído, menos intenso que o tradicional"
            valueCoffee={9.9}
          />
          <Card
            id="3"
            tagCoffee={['Tradicional']}
            imageCard={imageExpressoCremoso}
            name="Expresso Cremoso"
            description="Café expresso tradicional com espuma cremosa"
            valueCoffee={9.9}
          />
          <Card
            id="4"
            tagCoffee={['Tradicional', 'Gelado']}
            imageCard={imageExpressoGelado}
            name="Expresso Cremoso"
            description="Bebida preparada com café expresso e cubos de gelo"
            valueCoffee={9.9}
          />
          <Card
            id="5"
            tagCoffee={['Tradicional', 'com leite']}
            imageCard={imageCafeComLeite}
            name="Café com Leite"
            description="Meio a meio de expresso tradicional com leite vaporizado"
            valueCoffee={9.9}
          />
          <Card
            id="6"
            tagCoffee={['Tradicional', 'com leite']}
            imageCard={imageLatte}
            name="Latte"
            description="Uma dose de café expresso com o dobro de leite e espuma cremosa"
            valueCoffee={9.9}
          />
          <Card
            id="7"
            tagCoffee={['Tradicional', 'com leite']}
            imageCard={imageCapuccino}
            name="Capuccino"
            description="Bebida com canela feita de doses iguais de café, leite e espuma"
            valueCoffee={9.9}
          />
          <Card
            id="8"
            tagCoffee={['Tradicional', 'com leite']}
            imageCard={imageMacchiato}
            name="Macchiato"
            description="Café expresso misturado com um pouco de leite quente e espuma"
            valueCoffee={9.9}
          />
          <Card
            id="9"
            tagCoffee={['Tradicional', 'com leite']}
            imageCard={imageMocaccino}
            name="Mocaccino"
            description="Café expresso com calda de chocolate, pouco leite e espuma"
            valueCoffee={9.9}
          />
          <Card
            id="10"
            tagCoffee={['Especial', 'com leite']}
            imageCard={imageChocolateQuente}
            name="Chocolate Quente"
            description="Bebida feita com chocolate dissolvido no leite quente e café"
            valueCoffee={9.9}
          />
          <Card
            id="11"
            tagCoffee={['Especial', 'alcoólico', 'gelado']}
            imageCard={imageCubano}
            name="Cubano"
            description="Drink gelado de café expresso com rum, creme de leite e hortelã"
            valueCoffee={9.9}
          />
          <Card
            id="12"
            tagCoffee={['Especial']}
            imageCard={imageHavaiano}
            name="Havaiano"
            description="Bebida adocicada preparada com café e leite de coco"
            valueCoffee={9.9}
          />
          <Card
            id="13"
            tagCoffee={['Especial']}
            imageCard={imageArabe}
            name="Árabe"
            description="Bebida preparada com grãos de café árabe e especiarias"
            valueCoffee={9.9}
          />
          <Card
            id="14"
            tagCoffee={['Especial', 'Alcoólico']}
            imageCard={imageIrlandes}
            name="Irlandês"
            description="Bebida a base de café, uísque irlandês, açúcar e chantilly"
            valueCoffee={9.9}
          />
        </CoffeesContainer>
      </MainContainer>
    </HomeContainer>
  )
}
