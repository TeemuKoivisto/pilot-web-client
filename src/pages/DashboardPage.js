import React, { Component } from 'react'

import ShipVisitList from '../components/ShipVisitList'

class DashboardPage extends Component {

  constructor() {
    super()
    this.state = {
      shipVisits: [{
        shipName: 'titanic',
        active: false,
        schedule: [
          {
            start: '2018-02-08T06:16:55.581Z',
            end: '2018-02-08T09:28:55.581Z',
            location: 'majakka-1',
            ship: 'tit-4n1c',
            pilot: 'masa'
          },
          {
            start: '2018-02-08T10:11:55.581Z',
            end: '2018-02-08T13:31:55.581Z',
            location: 'satama-1',
            ship: 'tit-4n1c',
            pilot: 'masa'      
          },
          {
            start: '2018-02-08T19:32:55.581Z',
            end: '',
            location: 'satama-2',
            ship: 'tit-4n1c',
            pilot: 'peksi'
          },
          {
            start: '2018-02-09T01:51:55.581Z',
            end: '',
            location: 'jäävuori',
            ship: 'tit-4n1c',
            pilot: 'eki'
          },
        ]
      }, {
        shipName: 'moby dick',
        active: false,
        schedule: [
          {
            start: '2018-02-18T06:01:41.581Z',
            end: '2018-02-18T11:11:12.581Z',
            location: 'majakka-2',
            ship: 'moby-666',
            pilot: 'sepi'
          },
          {
            start: '2018-02-08T10:11:55.581Z',
            end: '',
            location: 'satama-1',
            ship: 'moby-666',
            pilot: 'urkki'
          },
          {
            start: '2018-02-08T19:32:55.581Z',
            end: '',
            location: 'poukama',
            ship: 'moby-666',
            pilot: 'urkki'
          },
          {
            start: '2018-02-09T01:51:55.581Z',
            end: '',
            location: 'meri',
            ship: 'moby-666',
            pilot: 'peksi'
          },
        ]
      }]
    }
  }

  handleShipVisitClick = (e, shipName) => {
    this.setState({
      shipVisits: this.state.shipVisits.map(p => {
        if (p.shipName === shipName) {
          return { ...p, active: !p.active }
        }
        return p
      })
    })
  }

  render() {
    const { shipVisits } = this.state
    return (
      <div>
        <h1>Pilot-web</h1>
        <ShipVisitList shipVisits={shipVisits} onVisitClick={this.handleShipVisitClick}/>
      </div>
    )
  }
}

export default DashboardPage