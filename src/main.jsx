import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById('root')
const reactRoot = createRoot(rootElement)

reactRoot.render(
  <Router>
  <StrictMode>
    <App />
  </StrictMode>
  </Router>,
)
