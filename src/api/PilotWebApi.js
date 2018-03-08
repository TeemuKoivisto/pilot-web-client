
const fakeResponse = [{
  shipName: 'titanic',
  active: false,
  schedule: [
    {
      start: '2018-02-08T06:16:55.581Z',
      end: '2018-02-08T09:28:55.581Z',
      eta: '',
      location: 'majakka-1',
      ship: 'tit-4n1c',
      pilot: 'masa'
    },
    {
      start: '2018-02-08T10:11:55.581Z',
      end: '2018-02-08T13:31:55.581Z',
      eta: '',
      location: 'satama-1',
      ship: 'tit-4n1c',
      pilot: 'masa'      
    },
    {
      start: '2018-02-08T19:32:55.581Z',
      end: '',
      eta: '03:11:00',
      location: 'satama-2',
      ship: 'tit-4n1c',
      pilot: 'peksi'
    },
    {
      start: '2018-02-09T01:51:55.581Z',
      end: '',
      eta: '06:53:00',
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
      eta: '',
      location: 'majakka-2',
      ship: 'moby-666',
      pilot: 'sepi'
    },
    {
      start: '2018-02-08T10:11:55.581Z',
      end: '',
      eta: '00:51:00',
      location: 'satama-1',
      ship: 'moby-666',
      pilot: 'urkki'
    },
    {
      start: '2018-02-08T19:32:55.581Z',
      end: '',
      eta: '01:41:00',
      location: 'poukama',
      ship: 'moby-666',
      pilot: 'urkki'
    },
    {
      start: '2018-02-09T01:51:55.581Z',
      end: '',
      eta: '08:59:00',
      location: 'meri',
      ship: 'moby-666',
      pilot: 'peksi'
    },
  ]
}]

export const getVisits = () => Promise.resolve(fakeResponse)