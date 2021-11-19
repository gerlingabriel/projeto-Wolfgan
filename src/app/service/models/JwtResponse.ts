import { Login } from './../../login/paginaLogin/login';

export interface JwtResponse {
  token: string;
  expirationDate: number;
  user: Login;
}
