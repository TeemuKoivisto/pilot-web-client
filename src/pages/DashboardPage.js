import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import ShipVisitList from '../components/ShipVisitList'

@inject('shipVisitStore')
@observer
class DashboardPage extends Component {

  componentDidMount() {
    this.props.shipVisitStore.getVisits()
  }

  handleShipVisitClick = (e, shipName) => {
    this.props.shipVisitStore.setActive(shipName)
  }

  render() {
    const { shipVisits } = this.props.shipVisitStore
    return (
      <div>
        <h1>Pilot-web</h1>
        <ShipVisitList shipVisits={shipVisits} onVisitClick={this.handleShipVisitClick}/>
      </div>
    )
  }
}

export default DashboardPage