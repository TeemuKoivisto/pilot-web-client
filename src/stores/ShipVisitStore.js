import { action, observable } from 'mobx'
import moment from 'moment'

import * as PilotWebApi from '../api/PilotWebApi'

const parseDate = date => date.length > 0 ? moment(new Date(date)) : ''

const parseDatesFromVisits = visits => visits.map(v =>
  ({ ...v, pilotings: v.pilotings.map(s =>
    ({ ...s, start: parseDate(s.start), eta: parseDate(s.eta)}))
  })
)

const computePilotingState = (piloting, pastCurrent) => {
  if (moment().isSameOrAfter(piloting.eta)) return 'extraDarkSmoke'
  else if (pastCurrent) return 'lightYellow'
  return 'lightGreen'
}

const addBgColorToPilotings = pilotings => {
  let currentPassed = false
  return pilotings.map(p => {
    const state = computePilotingState(p, currentPassed)
    if (!currentPassed && moment().isSameOrBefore(p.eta)) currentPassed = true
    return { ...p, bgColor: state }
  })
}

const addProperties = visits => visits.map(v => ({
  ...v,
  active: false,
  pilotings: addBgColorToPilotings(v.pilotings)
}))

class ShipVisitStore {

  @observable shipVisits = []

  @action
  getVisits = async () => {
    try {
      const visits = await PilotWebApi.getVisits()
      this.shipVisits = addProperties(parseDatesFromVisits(visits))
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
