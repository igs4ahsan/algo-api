import { IUserRegister, IAuthUesr, IUserLogin } from './user.dto';
import { formData } from '../utils';

import axios from 'axios';

function root(url: string = '') {
  return `/user/${url}`;
}

const users = {
  register(regiserUser: IUserRegister) {
    return axios.post<IAuthUesr>(root('register'), formData(regiserUser));
  },

  login(loginUser: IUserLogin) {
    return axios.post<IAuthUesr>(root('login'), formData(loginUser));
  },
};

export { users as default };
