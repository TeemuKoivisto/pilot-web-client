import styled from 'styled-components'
import { darken } from 'polished'

import * as colors from './colors'

const pilotingListLiTypes = {
  passed: {
    background: colors['extraDarkSmoke'],
    'border-width': '1px 1px 0 1px',
    margin: '0 10px 0 10px',
    padding: '10px'
  },
  current: {
    background: colors['lightGreen'],
    'border-width': '1px',
    margin: '0',
    padding: '20px'
  },
  upcoming: {
    background: colors['amber'],
    'border-width': '0 1px 1px 1px',
    margin: '0 10px 0 10px',
    padding: '10px'
  }
}

export const ShipVisitItemHeader = styled.div`
  align-items: center;
  background: ${({ state }) => pilotingListLiTypes[state]['background']};
  display: flex;
  margin-right: 5px;
  justify-content: space-between;
  width: 100%;
  & > span {
    width: 20%;
    margin: 5px;
  }
`

export const ShipVisitListLi = styled.li`
  cursor: pointer;
  margin: 20px;
`

export const PilotingListUl = styled.ul`
  margin: 10px;
`

export const PilotingListHeader = styled.li`
  display: flex;
  margin: 0 10px 0 10px;
  padding: 10px;
  
  & > span {
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
  padding: ${({ state }) => pilotingListLiTypes[state]['padding']};
  transition: all 300ms ease;

  &:hover {
    background: ${({ state }) => darken(0.15, pilotingListLiTypes[state]['background'])};
  }

  &:last-child {
    border-bottom: 1px solid black;
  }

  & > span {
    width: 25%;
  }
`

// PilotingListLi.defaultProps = {
//   bgColor: 'green',
// }