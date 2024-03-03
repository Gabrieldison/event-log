'use client'

import { Button } from '@/components/button'
import { Form } from '@/components/form'
import { Input } from '@/components/input'
import { useEventContext } from '@/contexts/event-context'
import { validateEmail } from '@/utils/validate-email'
import { useState } from 'react'
import { Toaster, toast } from 'sonner'
import { Container, Title } from './styles'

export default function Subscription() {
  const { registerNewSubscriber } = useEventContext()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [affiliation, setAffiliation] = useState('')

  const [erroName, setErrorName] = useState('')
  const [erroEmail, setErrorEmail] = useState('')
  const [erroAffiliation, setErrorAffiliation] = useState('')

  const resetForm = () => {
    setName('')
    setEmail('')
    setAffiliation('')
  }

  const handleNameChange = (event: any) => {
    setName(event.target.value)
    setErrorName('')
  }

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value)
    setErrorEmail('')
  }

  const handleAffiliationChange = (event: any) => {
    setAffiliation(event.target.value)
    setErrorAffiliation('')
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()

    if (!name.trim()) {
      setErrorName('O nome é obrigatorio')
      return
    }

    if (!email.trim()) {
      setErrorEmail('O email é obrigatorio')
      return
    }

    if (!validateEmail(email)) {
      setErrorEmail('Este email não é valido, verifique seus dados')
      return
    }

    if (!affiliation.trim()) {
      setErrorAffiliation('A afiliação é obrigatoria')
      return
    }

    registerNewSubscriber({ name, email, affiliation })

    toast.success('Sua inscrição foi realizada com sucesso')

    resetForm()
  }

  return (
    <Container>
      <Toaster position="top-right" richColors theme="light" duration={1000} />

      <Form onSubmit={handleSubmit}>
        <Title>Inscrição</Title>
        <Input
          label="Nome"
          placeholder="João..."
          name="name"
          onChange={handleNameChange}
          value={name}
          error={erroName}
        />

        <Input
          label="Email"
          placeholder="joão@gmail.com..."
          name="email"
          onChange={handleEmailChange}
          value={email}
          error={erroEmail}
        />

        <Input
          label="Afiliação"
          placeholder="Estudantes..."
          name="affiliation"
          onChange={handleAffiliationChange}
          value={affiliation}
          error={erroAffiliation}
        />

        <Button type="submit">Inscrever-se</Button>
      </Form>
    </Container>
  )
}
