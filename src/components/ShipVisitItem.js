import React from 'react'

import Button from '../elements/Button'
import { Input } from '../elements/Input'

import { SmoothContainer, FlexRow } from '../styled-components/Container'
import { ShipVisitListLi, ShipVisitItemHeader,
  PilotingListUl, PilotingListHeader, PilotingListLi } from '../styled-components/ShipVisit'

const computeButtonText = visit => visit.active ? 'Sulje' : 'Avaa'
const findCurrentPiloting = visit => {
  const current = visit.pilotings.find(p => p.state === 'current')
  if (current) return current
  const upcoming = visit.pilotings.find(p => p.state === 'upcoming')
  if (upcoming) return upcoming
  return visit.pilotings[visit.pilotings.length -1 ]
}

const ShipVisitHeader = ({ piloting, buttonText, onVisitClick }) =>
  <FlexRow>
    <ShipVisitItemHeader state={piloting.state}>
      <span>{piloting.ship}</span>
      <span>{piloting.eta.format('D.M.YYYY H:mm:ss')}</span>
      <span>{piloting.location}</span>
      <span>{piloting.pilot}</span>
    </ShipVisitItemHeader>
    <Button onClick={onVisitClick} size="medium">{buttonText}</Button>
  </FlexRow>

export const ShipVisitItem = ({ visit, onVisitClick, children, ...props }) =>
  <ShipVisitListLi {...props}>
    <ShipVisitHeader
      piloting={findCurrentPiloting(visit)}
      buttonText={computeButtonText(visit)}
      onVisitClick={onVisitClick}
    />
    <SmoothContainer visible={visit.active}>
    <PilotingListUl>
      <PilotingListHeader>
        <span>ISA</span>
        <span>ETA</span>
        <span>Paikka</span>
        <span>Luotsi</span>
      </PilotingListHeader>
    { visit.pilotings.map((piloting, i) =>
      <PilotingListLi key={piloting.ship + i} state={piloting.state}>
        <span>{piloting.ship}</span>
        <span>
          { piloting.state === 'current' ?
          <Input value={piloting.eta.format('D.M.YYYY H:mm:ss')} disabled="true"/>
          : piloting.eta.format('D.M.YYYY H:mm:ss')
          }
        </span>
        <span>{piloting.location}</span>
        <span>{piloting.pilot}</span>
      </PilotingListLi>
    )}
    </PilotingListUl>
    </SmoothContainer>
  </ShipVisitListLi>