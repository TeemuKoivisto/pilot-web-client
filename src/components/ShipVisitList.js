import React from 'react'

import { ShipVisitItem } from './ShipVisitItem'

const ShipVisitList = ({ shipVisits, onVisitClick }) =>
  <ul>
    { shipVisits.map((visit, i) =>
      <ShipVisitItem key={visit.shipName + i}
        visit={visit}
        onVisitClick={(e) => onVisitClick(e, visit.shipName)}
      >{visit.shipName}</ShipVisitItem>
    )}
  </ul>

export default ShipVisitList
