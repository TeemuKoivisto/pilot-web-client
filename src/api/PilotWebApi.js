
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

export const getVisits = () => Promise.resolve(fakeResponse)