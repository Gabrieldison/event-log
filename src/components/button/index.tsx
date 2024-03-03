import { ReactNode } from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
}

export function Button({ children, type = 'button' }: ButtonProps) {
  return <ButtonContainer type={type}>{children}</ButtonContainer>
}
