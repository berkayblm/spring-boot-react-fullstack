export const oktaConfig = {

  clientId: '0oaa1lqzrto1NexZL5d7',
  issuer: 'https://dev-76287502.okta.com/oauth2/default',
  redirectUri: 'http://localhost:3000/login/callback',
  scopes: ['openid','profile','email'],
  pkce: true,
  disableHttpsCheck: true,

}