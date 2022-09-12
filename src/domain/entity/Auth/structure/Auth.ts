export default interface AuthUser {
  email?: string;
  name?: string;
  rol: string;
}

export interface AuthRequest {
  email: string;
  password: string;
}
