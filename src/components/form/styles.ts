'use client'

import styled from 'styled-components'

export const FormContainer = styled.form`
  max-width: 60%;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 80%;
    width: 100%;
  }

  @media (max-width: 425px) {
    max-width: 100%;
  }
`
