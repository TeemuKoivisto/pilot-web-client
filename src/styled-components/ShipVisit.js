import styled from 'styled-components'

import * as colors from './colors'

export const ShipVisitListLi = styled.li`
  border: 1px solid black;
  cursor: pointer;
  margin: 20px;
  padding: 10px;
`

export const PilotingListHeader = styled.li`
  display: flex;
  margin: 20px;
  padding: 10px;
  
  & > span {
    margin-right: 10px;
    width: 25%;
  }
`

export const PilotingListLi = styled.li`
  background: ${({ bgColor }) => colors[bgColor]};
  border: 1px solid black;
  cursor: pointer;
  display: flex;
  margin: 20px;
  padding: 10px;

  & > span {
    margin-right: 10px;
    width: 25%;
  }
`

PilotingListLi.defaultProps = {
  bgColor: 'green',
}