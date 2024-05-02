export interface User {
  id?: string;
  username: string;
  email: string;
  password: string;
  isverified?: number;
  userCode?: string;
  RefContrat: string;
  verificationToken?: string;
  roles?: Role[];
}

export interface Role {
  id?: string;
  name: string;
}