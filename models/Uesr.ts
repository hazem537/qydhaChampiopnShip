export interface User {
  adminUser: UserI;
  jwtToken: string;
  refreshTokenExpirationDate: string;
  refreshToken: string;
}
export interface UserI {
  id: string;
  username: string;
  name: string | null;
  phone: string;
  email: string | null;
  birthDate: string | null;
  createdOn: string;
  lastLogin: string;
  avatarUrl: string | null;
  expireDate: string | null;
  roles: string[];
}
