import IUserRepository from '../../domain/repository/User/IUserRepository';
import User from '../../domain/entity/User/structure/User';

export default class CreateUserUseCase {
  private _repository: IUserRepository;

  constructor(repository: IUserRepository) {
    this._repository = repository;
  }

  async createUser(user: User): Promise<boolean> {
    return this._repository.create(user);
  }
}
