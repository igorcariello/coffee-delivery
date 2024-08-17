import { useState } from 'react'
import { InputContainer } from './styles'

interface InputProps {
  type: string
  placeholder: string
  widthInput: string
  optional?: string
}

export function Input({ type, placeholder, widthInput, optional }: InputProps) {
  const [haveInput, setHaveInput] = useState('')

  return (
    <InputContainer $widthInput={widthInput}>
      <input
        onChange={(event) => setHaveInput(event.target.value)}
        type={type}
        style={{ width: widthInput }}
        placeholder={placeholder}
      />
      {haveInput === '' && <p>{optional}</p>}
    </InputContainer>
  )
}
