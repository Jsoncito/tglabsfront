import IAuthRepository from '../../domain/repository/Auth/IAuthRepository';
import AuthUser, { AuthRequest } from '../../domain/entity/Auth/structure/Auth';

export default class GetUserUseCase {
  private _repository: IAuthRepository;

  constructor(repository: IAuthRepository) {
    this._repository = repository;
  }

  async login(user: AuthRequest): Promise<AuthUser> {
    return this._repository.login(user);
  }
}
