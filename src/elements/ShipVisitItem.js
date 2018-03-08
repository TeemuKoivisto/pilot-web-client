import React from 'react'

import { ShipVisitListLi, PilotingListLi } from '../styled-components/ShipVisit'

export const ShipVisitItem = ({ visit, children, ...props }) =>
  <ShipVisitListLi {...props}>
    { children }
    <ul className={visit.active ? '' : 'hidden'}>
    { visit.schedule.map((event, i) =>
      <PilotingListLi key={event.end + i} >
        <span>{event.ship}</span>
        <span>ETA</span>
        <span>{event.location}</span>
        <span>{event.pilot}</span>
      </PilotingListLi>
    )}
    </ul>
  </ShipVisitListLi>