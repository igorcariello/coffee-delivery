import { useState } from 'react'
import {
  CepInput,
  CityInput,
  ComplementInput,
  ComplementWrapper,
  FirstLine,
  FormAddressContainer,
  FourthLine,
  NeighborhoodInput,
  NumberInput,
  SecondLine,
  StateInput,
  StreetInput,
  ThirdLine,
} from './styles'

import { useFormContext } from 'react-hook-form'

export function InputsAddress() {
  const { register } = useFormContext()
  const [haveInput, setHaveInput] = useState('')

  return (
    <FormAddressContainer>
      <FirstLine>
        <CepInput
          {...register('cep')}
          width="12.5rem"
          type="number"
          placeholder="CEP"
        />
      </FirstLine>
      <SecondLine>
        <StreetInput {...register('street')} type="text" placeholder="Rua" />
      </SecondLine>
      <ThirdLine>
        <NumberInput {...register('number')} type="text" placeholder="Número" />
        <ComplementWrapper>
          <ComplementInput
            {...register('complement')}
            onChange={(e) => setHaveInput(e.target.value)}
            type="text"
            placeholder="Complemento"
          />
          {haveInput === '' && <p>Opcional</p>}
        </ComplementWrapper>
      </ThirdLine>
      <FourthLine>
        <NeighborhoodInput
          {...register('neighborhood')}
          type="text"
          placeholder="Bairro"
        />
        <CityInput {...register('city')} type="text" placeholder="Cidade" />
        <StateInput {...register('state')} type="text" placeholder="UF" />
      </FourthLine>
    </FormAddressContainer>
  )
}
