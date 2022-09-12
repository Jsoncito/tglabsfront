import IUserRepository from '../../domain/repository/User/IUserRepository';
import User from '../../domain/entity/User/structure/User';

export default class GetUserUseCase {
  private _repository: IUserRepository;

  constructor(repository: IUserRepository) {
    this._repository = repository;
  }

  async getUserById(id: string): Promise<User> {
    return this._repository.get(id);
  }
}
