import { action, observable } from 'mobx'

import * as PilotWebApi from '../api/PilotWebApi'

class ShipVisitStore {

  @observable shipVisits = []

  @action
  getVisits = async () => {
    try {
      const visits = await PilotWebApi.getVisits()
      this.shipVisits = visits
    } catch (e) {
      console.error(e)
    }
  }

  @action
  setActive(shipName) {
    this.shipVisits = this.shipVisits.map(v => {
      if (v.shipName === shipName) {
        return { ...v, active: !v.active }
      }
      return v
    })
  }
}

export const shipVisitStore = new ShipVisitStore()
