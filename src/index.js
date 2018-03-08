import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import moment from 'moment'

import Routes from './routes'
import { shipVisitStore } from './stores/ShipVisitStore'

import './index.css'

moment.locale('fi')

ReactDOM.render(
  <Provider shipVisitStore={shipVisitStore}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
