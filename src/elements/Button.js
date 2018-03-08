import React from 'react'

import { DefaultButton } from '../styled-components/Button'

const Button = ({ children, ...props }) =>
  <DefaultButton {...props}>
    { children }
  </DefaultButton>

export default Button