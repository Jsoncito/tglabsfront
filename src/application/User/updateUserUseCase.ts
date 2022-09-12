import IUserRepository from '../../domain/repository/User/IUserRepository';
import User from '../../domain/entity/User/structure/User';

export default class UpdateUserUseCase {
  private _repository: IUserRepository;

  constructor(repository: IUserRepository) {
    this._repository = repository;
  }

  async createUser(id: string, user: User): Promise<User> {
    return this._repository.update(id, user);
  }
}
