import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './components/app-container'
import { injectGlobal } from 'styled-components'

injectGlobal`
  body {
    margin: 0;
    height: 100vh;
    box-sizing: border-box;
    background-color: #eee;
  }

  *, :after, :before {
    box-sizing: inherit;
  }
`

ReactDOM.render(<AppContainer />, document.querySelector('#app'))
