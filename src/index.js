import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

import '../node_modules/semantic-ui-css/semantic.min.css'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
