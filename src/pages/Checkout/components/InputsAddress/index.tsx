import { Input } from '../Input'
import {
  FirstLine,
  FormAddressContainer,
  FourthLine,
  SecondLine,
  ThirdLine,
} from './styles'

import { useFormContext } from 'react-hook-form'

export function InputsAddress() {
  const { register } = useFormContext()

  return (
    <FormAddressContainer>
      <FirstLine>
        <Input
          {...register('cep')}
          widthInput="12.5rem"
          type="text"
          placeholder="CEP"
        />
      </FirstLine>
      <SecondLine>
        <Input
          {...register('street')}
          widthInput="100%"
          type="text"
          placeholder="Rua"
        />
      </SecondLine>
      <ThirdLine>
        <Input
          {...register('number')}
          widthInput="12.5rem"
          type="text"
          placeholder="Número"
        />
        <Input
          {...register('complement')}
          widthInput="100%"
          type="text"
          placeholder="Complemento"
          optional="Opcional"
        />
      </ThirdLine>
      <FourthLine>
        <Input
          {...register('neighborhood')}
          widthInput="12.5rem"
          type="text"
          placeholder="Bairro"
        />
        <Input
          {...register('city')}
          widthInput="100%"
          type="text"
          placeholder="Cidade"
        />
        <Input
          {...register('state')}
          widthInput="5rem"
          type="text"
          placeholder="UF"
        />
      </FourthLine>
    </FormAddressContainer>
  )
}
