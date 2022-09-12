import User from '../../../domain/entity/User/structure/User';
import IUserRepository from '../../../domain/repository/User/IUserRepository';
import { API_URL } from '../../config/constants';
import { objectToUser } from '../../mappers/userMapper';
import { Data, HttpClient } from '../../utils/http_client';

export default class UserRepository implements IUserRepository {
  async get(id: string): Promise<User> {
    return new Promise(async (resolve) => {
      const url = API_URL + '/users/' + id;
      const request: Data = {
        url: url,
        method: 'GET',
      };
      try {
        const response = await HttpClient(request);
        const mappedResponse = response.data.map((item: any) =>
          objectToUser(item)
        );
        resolve(mappedResponse);
      } catch (error) {
        return;
      }
    });
  }

  async list(): Promise<User[] | any> {
    return new Promise(async (resolve) => {
      const url = API_URL + '/users';
      const request: Data = {
        url: url,
        method: 'GET',
      };
      await HttpClient(request)
        .then(async (response) => {
          const mappedResponse = response.data.map((item: any) =>
            objectToUser(item)
          );
          resolve(mappedResponse);
        })
        .catch((e) => {
          console.log({ e });
          return;
        });
    });
  }

  async create(user: User): Promise<boolean | any> {
    return new Promise(async (resolve) => {
      const url = API_URL + '/users';

      const request: Data = {
        url: url,
        method: 'POST',
        body: user,
      };
      try {
        const response = await HttpClient(request);
        resolve(response.data);
      } catch (error) {
        console.log(error);
        return;
      }
    });
  }

  async update(id: string, user: User): Promise<User> {
    return new Promise(async (resolve) => {
      const url = API_URL + '/users/' + id;

      const request: Data = {
        url: url,
        method: 'PUT',
        body: user,
      };
      try {
        const response = await HttpClient(request);
        resolve(response.data);
      } catch (error) {
        console.log(error);
        return;
      }
    });
  }

  async delete(id: string): Promise<boolean> {
    return new Promise(async (resolve) => {
      const url = API_URL + '/users/' + id;

      const request: Data = {
        url: url,
        method: 'DELETE',
      };
      try {
        const response = await HttpClient(request);
        resolve(response.data);
      } catch (error) {
        console.log(error);
        return;
      }
    });
  }
}
