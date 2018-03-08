import styled from 'styled-components'
import { darken } from 'polished'

import * as colors from './colors'

const buttonSizes = {
  small: {
    'font-size': '14px',
    'line-height': '30px',
    padding: '0 8px',
  },
  medium: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 12px',
  },
  large: {
    'font-size': '18px',
    'line-height': '50px',
    padding: '0 16px',
  },
  wide: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 36px',
  },
  extraWide: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 72px',
  },
  yuge: {
    'font-size': '20px',
    'line-height': '40px',
    padding: '10px 72px',
  },
  fullWidth: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 8px',
  },
}

export const DefaultButton = styled.button`
  background: ${({ bgColor })  => colors[bgColor]};
  border: none;
  border-radius: 4px;
  color: ${({ fontColor })  => colors[fontColor]};
  cursor: pointer;
  font-size: ${({ size }) => buttonSizes[size]['font-size']};
  font-weight: 200;
  line-height: ${({ size }) => buttonSizes[size]['line-height']};
  margin: 0;
  outline: none;
  padding: ${({ size }) => buttonSizes[size]['padding']};
  transition: all 300ms ease;
  &:hover {
    background-color: ${({ bgColor })  => darken(0.1, colors[bgColor])};
  }
`

DefaultButton.defaultProps = {
  bgColor: 'blue',
  fontColor: 'white',
  size: 'medium',
}

