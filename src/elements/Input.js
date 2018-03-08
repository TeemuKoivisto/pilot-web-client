import React from 'react'

import { DefaultInput } from '../styled-components/Input'

export const Input = ({ children, ...props }) =>
  <DefaultInput {...props}>
    { children }
  </DefaultInput>
