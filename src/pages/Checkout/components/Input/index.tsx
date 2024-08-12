import { InputContainer } from './styles'

interface InputProps {
  type: string
  placeholder: string
  widthInput: string
}

export function Input({ type, placeholder, widthInput }: InputProps) {
  return (
    <InputContainer widthInput={widthInput}>
      <input
        type={type}
        style={{ width: widthInput }}
        placeholder={placeholder}
      />
    </InputContainer>
  )
}
