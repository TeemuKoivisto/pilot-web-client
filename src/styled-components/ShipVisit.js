import styled from 'styled-components'
import { darken } from 'polished'

import * as colors from './colors'

const pilotingListLiTypes = {
  passed: {
    background: colors['extraDarkSmoke'],
    'border-width': '1px 1px 0 1px',
    margin: '0 10px 0 10px'
  },
  current: {
    background: colors['lightGreen'],
    'border-width': '1px',
    margin: '0'
  },
  upcoming: {
    background: colors['lightYellow'],
    'border-width': '0 1px 1px 1px',
    margin: '0 10px 0 10px'
  }
}

export const ShipVisitItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ShipVisitListLi = styled.li`
  border: 1px solid black;
  cursor: pointer;
  margin: 20px;
  padding: 10px;
`

export const PilotingListHeader = styled.li`
  display: flex;
  padding: 10px;
  
  & > span {
    margin-right: 10px;
    width: 25%;
  }
`

export const PilotingListLi = styled.li`
  background: ${({ state }) => pilotingListLiTypes[state]['background']};
  border-color: black;
  border-style: solid;
  border-width: ${({ state }) => pilotingListLiTypes[state]['border-width']};
  cursor: pointer;
  display: flex;
  margin: ${({ state }) => pilotingListLiTypes[state]['margin']};
  padding: 10px;

  &:hover {
    background: ${({ state }) => darken(0.1, pilotingListLiTypes[state]['background'])};
  }

  &:last-child {
    border-bottom: 1px solid black;
  }

  & > span {
    margin-right: 10px;
    width: 25%;
  }
`

// PilotingListLi.defaultProps = {
//   bgColor: 'green',
// }