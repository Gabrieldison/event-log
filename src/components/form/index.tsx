import { FormEvent, ReactNode } from 'react'
import { FormContainer } from './styles'

interface FormProps {
  onSubmit: (e: FormEvent) => void
  children: ReactNode
}

export function Form({ onSubmit, children }: FormProps) {
  return <FormContainer onSubmit={onSubmit}>{children}</FormContainer>
}
