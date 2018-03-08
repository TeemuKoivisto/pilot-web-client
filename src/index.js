import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import Routes from './routes'
import { shipVisitStore } from './stores/ShipVisitStore'

import './index.css'

ReactDOM.render(
  <Provider shipVisitStore={shipVisitStore}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
