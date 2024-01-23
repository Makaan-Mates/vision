import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Auth0Provider
    domain="dev-87zmqyi57qb87nxe.us.auth0.com"
    clientId="eNSsTL1hHPsEH3fpigut00sGUTEn0Pps"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
