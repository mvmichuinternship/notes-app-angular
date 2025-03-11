export interface User {
  id: string;
  firstName: string;
  lastName: string;
  image: string;
  username: string;
  password: string;
}

export interface LoginType {
  username: string;
  password: string;
  token?: string| null;
}
