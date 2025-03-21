import {routes} from '@/controllers/routes';
import {networkService} from '@/networking';
export const UserController = {
  login: ({userName, password}) => {
    return networkService.request({
      method: 'POST',
      url: routes.authentication.login,
      data: {userName, password},
    });
  },
  logout: () => {
    return networkService.request({
      method: 'DELETE',
      url: routes.authentication.logout,
    });
  },
};
