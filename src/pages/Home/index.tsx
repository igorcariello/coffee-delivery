import { Header } from '../../components/Header'
import {
  BannerContainer,
  HomeContainer,
  ImageContainer,
  TextContainer,
  CharacteristicsContainer,
} from './styles'
import bannerImage from '../../assets/banner.svg'

export function Home() {
  const imageBanner = bannerImage
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
          <CharacteristicsContainer></CharacteristicsContainer>
        </TextContainer>
        <ImageContainer>
          <img
            src={imageBanner}
            alt="Imagem de um copo de café no banner da página"
          />
        </ImageContainer>
      </BannerContainer>
    </HomeContainer>
  )
}
