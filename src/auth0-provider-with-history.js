import React from 'react';
import {useHistory} from 'react-router-dom';
import {Auth0Provider} from '@auth0/auth0-react';


const Auth0ProviderWithHistory = ({children}) => {
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
// const audience = process.env.REACT_APP_AUDIENCE;
console.log(domain);
console.log(clientId);


const history = useHistory();

// const onRedirectCallback = (appState) => {
//   history.push(appState?.returnTo || window.location.pathname);
// };
// REACT_APP_AUDIENCE=https://local-covid-backend-api
// onRedirectCallback = {onRedirectCallback}

return(
  <Auth0Provider domain = {domain}
    clientId={clientId}
    redirectUri = {window.location.origin}
    >
    {children}
  </Auth0Provider>
)
}

export default Auth0ProviderWithHistory;
