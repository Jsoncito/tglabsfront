import IUserRepository from '../../domain/repository/User/IUserRepository';
import User from '../../domain/entity/User/structure/User';

export default class ListUserUseCase {
  private _repository: IUserRepository;

  constructor(repository: IUserRepository) {
    this._repository = repository;
  }

  async listUsers(): Promise<User[]> {
    return this._repository.list();
  }
}
