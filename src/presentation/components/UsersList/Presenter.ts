import UserUseCase from '../../../application/User/listUsersUseCase';
import User from '../../../domain/entity/User/structure/User';
import UserRepository from '../../../data/repositories/User/UserRepositoryImp';
export default class UsersPresenter {
  private _repository: UserRepository = new UserRepository();
  private _useCase: UserUseCase = new UserUseCase(this._repository);

  async getUsers(): Promise<User[]> {
    let response = await this._useCase.listUsers();
    return response;
  }
}
