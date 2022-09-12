import AuthUser, {
  AuthRequest,
} from '../../../domain/entity/Auth/structure/Auth';
import IAuthRepository from '../../../domain/repository/Auth/IAuthRepository';
import { API_URL } from '../../config/constants';
//import { objectToUser } from '../../mappers/userMapper';
import { Data, HttpClient } from '../../utils/http_client';

export default class AuthRepository implements IAuthRepository {
  async login(user: AuthRequest): Promise<AuthUser> {
    return new Promise(async (resolve) => {
      const url = API_URL + '/login';
      const request: Data = {
        url: url,
        method: 'POST',
        body: user,
      };
      try {
        const response = await HttpClient(request);
        resolve(response.data);
      } catch (error) {
        return;
      }
    });
  }
}
