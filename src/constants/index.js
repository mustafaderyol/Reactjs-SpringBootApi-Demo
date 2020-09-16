export const API_BASE_URL = 'http://localhost:8080';
export const ACCESS_TOKEN = 'accessToken';

export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect';
export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const LOCAL_AUTH_URL = API_BASE_URL + '/oauth2/authorize/local?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const ENDUSER_URL = API_BASE_URL + '/api/endusers/';
export const ADMIN_URL = API_BASE_URL + '/api/admin/';
export const M2M_URL = API_BASE_URL + '/api/m2m/';
