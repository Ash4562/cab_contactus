// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
// import App from './App'
// import './index.css'
// import { Provider } from 'react-redux'
// import { store } from './redux/store'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <Provider store={store}>
//       <App />  {/* Now useLocation() will work */}
//       </Provider>
//     </BrowserRouter>
//   </React.StrictMode>
// )
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom' // ✅ Use HashRouter instead
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>  {/* ✅ Changed from BrowserRouter to HashRouter */}
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
)
