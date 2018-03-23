
/*
Preliminarily data models

const VISIT = {
  pilotings: []
}

const PILOTING = {
  id: 1,
  previousId: null,
  nextId: 2,
  start: '2018-02-08T06:16:55.581Z',
  eta: '2018-02-08T10:11:55.581Z',
}

const SHIP = {
  isa: 'FIF-412',
  name: 'Finnfoam'
}

const ROUTE = {
  id: 1,
  startLocation: 'kotka-1',
  endLocation: 'hamina-1',
  maxDraft: 10,
  maxWidth: 5,
  pilotingLocationId: 1,
}

const PILOTING_LOCATION = {
  name: 'majakka-1',
}

const PILOT = {
  id: 1,
  name: 'Pekka Koski',
  nickname: 'Peksi'
}

*/

import faker from 'faker'

const generateFakeData = () => {
  const shipCount = Math.floor(Math.random() * 20 + 2)
  const ships = []
  for (let i = 0; i <= shipCount; i++) {
    const shipName = `M/S ${faker.name.firstName()}`
    // const shipCode = faker.hacker.adjective() // TODO
    let pilotName = `${faker.name.lastName()} ${faker.name.firstName()}`
    let dateStart = Date.now() - Math.floor(Math.random() * 120 + 10) * 60 * 1000
    let dateEnd
    const pilotingsCount = Math.floor(Math.random() * 10 + 2)
    const pilotings = []
    for (let j = 0; j <= pilotingsCount; j++) {
      pilotName = Math.random() > 0.7 ? `${faker.name.lastName()} ${faker.name.firstName()}` : pilotName
      let start = new Date(dateStart).toISOString()
      dateEnd = dateStart + (Math.random() * 30 + 10) * 60 * 1000
      pilotings.push({
        start,
        eta: new Date(dateEnd).toISOString(),
        location: `${faker.random.word()}-point`,
        ship: shipName,
        pilot: pilotName
      })
      dateStart = dateEnd
    }
    ships.push({
      shipName,
      pilotings,
    })
  }
  return ships
}
/*
const fakeResponse = [{
  shipName: 'titanic',
  pilotings: [
    {
      start: '2018-02-08T06:16:55.581Z',
      eta: '2018-02-08T10:11:55.581Z',
      location: 'majakka-1',
      ship: 'tit-4n1c',
      pilot: 'masa'
    },
    {
      start: '2018-02-08T10:11:55.581Z',
      eta: '2018-02-08T19:32:55.581Z',
      location: 'satama-1',
      ship: 'tit-4n1c',
      pilot: 'masa'      
    },
    {
      start: '2018-02-08T19:32:55.581Z',
      eta: '2019-02-09T01:51:55.581Z',
      location: 'satama-2',
      ship: 'tit-4n1c',
      pilot: 'peksi'
    },
    {
      start: '2018-02-09T01:51:55.581Z',
      eta: '2019-02-09T04:51:55.581Z',
      location: 'jäävuori',
      ship: 'tit-4n1c',
      pilot: 'eki'
    },
  ]
}, {
  shipName: 'moby dick',
  pilotings: [
    {
      start: '2018-02-18T06:01:41.581Z',
      eta: '2018-02-08T10:11:55.581Z',
      location: 'majakka-2',
      ship: 'moby-666',
      pilot: 'sepi'
    },
    {
      start: '2018-02-08T10:11:55.581Z',
      eta: '2018-12-08T19:32:55.581Z',
      location: 'satama-1',
      ship: 'moby-666',
      pilot: 'urkki'
    },
    {
      start: '2018-02-08T19:32:55.581Z',
      eta: '2018-12-09T01:51:55.581Z',
      location: 'poukama',
      ship: 'moby-666',
      pilot: 'urkki'
    },
    {
      start: '2018-02-09T01:51:55.581Z',
      eta: '2018-12-09T09:51:55.581Z',
      location: 'meri',
      ship: 'moby-666',
      pilot: 'peksi'
    },
  ]
}]
*/
export const getVisits = () => {
  const ships = generateFakeData()
  return Promise.resolve(ships)
}