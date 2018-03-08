import React from 'react'

import { ShipVisitListLi, PilotingListHeader, PilotingListLi } from '../styled-components/ShipVisit'

export const ShipVisitItem = ({ visit, children, ...props }) =>
  <ShipVisitListLi {...props}>
    { children }
    <ul className={visit.active ? '' : 'hidden'}>
      <PilotingListHeader>
        <span>ISA</span>
        <span>ETA</span>
        <span>Paikka</span>
        <span>Luotsi</span>
      </PilotingListHeader>
    { visit.pilotings.map((event, i) =>
      <PilotingListLi key={event.ship + i} bgColor={event.bgColor}>
        <span>{event.ship}</span>
        <span>{event.eta.format('D.M.YYYY H:mm:ss')}</span>
        <span>{event.location}</span>
        <span>{event.pilot}</span>
      </PilotingListLi>
    )}
    </ul>
  </ShipVisitListLi>