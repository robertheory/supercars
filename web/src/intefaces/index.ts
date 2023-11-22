export * from './Car';

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
}
