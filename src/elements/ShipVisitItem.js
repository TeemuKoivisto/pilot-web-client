import React from 'react'

import { ShipVisitListLi, ShipVisitItemHeader, PilotingListHeader, PilotingListLi } from '../styled-components/ShipVisit'

const computeButtonText = visit => visit.active ? 'Sulje' : 'Avaa'

export const ShipVisitItem = ({ visit, onVisitClick, children, ...props }) =>
  <ShipVisitListLi {...props}>
    <ShipVisitItemHeader>
      { children }
      <button onClick={onVisitClick}>{computeButtonText(visit)}</button>
    </ShipVisitItemHeader>
    <ul className={visit.active ? '' : 'hidden'}>
      <PilotingListHeader>
        <span>ISA</span>
        <span>ETA</span>
        <span>Paikka</span>
        <span>Luotsi</span>
      </PilotingListHeader>
    { visit.pilotings.map((event, i) =>
      <PilotingListLi key={event.ship + i} state={event.state}>
        <span>{event.ship}</span>
        <span>{event.eta.format('D.M.YYYY H:mm:ss')}</span>
        <span>{event.location}</span>
        <span>{event.pilot}</span>
      </PilotingListLi>
    )}
    </ul>
  </ShipVisitListLi>