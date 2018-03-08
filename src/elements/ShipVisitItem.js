import React from 'react'

import Button from '../elements/Button'
import { SmoothContainer } from '../styled-components/Container'
import { ShipVisitListLi, ShipVisitItemHeader, PilotingListHeader, PilotingListLi } from '../styled-components/ShipVisit'

const computeButtonText = visit => visit.active ? 'Sulje' : 'Avaa'
const findCurrentPiloting = visit => visit.pilotings.find(p => p.state === 'current')

const ShipVisitHeader = ({ piloting, buttonText, onVisitClick }) =>
  <ShipVisitItemHeader state={piloting.state}>
    <span>{piloting.ship}</span>
    <span>{piloting.eta.format('D.M.YYYY H:mm:ss')}</span>
    <span>{piloting.location}</span>
    <span>{piloting.pilot}</span>
    <Button onClick={onVisitClick} size="medium">{buttonText}</Button>
  </ShipVisitItemHeader>

export const ShipVisitItem = ({ visit, onVisitClick, children, ...props }) =>
  <ShipVisitListLi {...props}>
    <ShipVisitHeader
      piloting={findCurrentPiloting(visit)}
      buttonText={computeButtonText(visit)}
      onVisitClick={onVisitClick}
    />
    <SmoothContainer visible={visit.active}>
    <ul>
      <PilotingListHeader>
        <span>ISA</span>
        <span>ETA</span>
        <span>Paikka</span>
        <span>Luotsi</span>
      </PilotingListHeader>
    { visit.pilotings.map((piloting, i) =>
      <PilotingListLi key={piloting.ship + i} state={piloting.state}>
        <span>{piloting.ship}</span>
        <span>{piloting.eta.format('D.M.YYYY H:mm:ss')}</span>
        <span>{piloting.location}</span>
        <span>{piloting.pilot}</span>
      </PilotingListLi>
    )}
    </ul>
    </SmoothContainer>
  </ShipVisitListLi>