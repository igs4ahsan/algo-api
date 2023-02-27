export interface IUserRegister {
  name: string;
  email: string;
  password: string;
}
export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAuthUesr {
  user: IUser;
  accessToken: string;
}
