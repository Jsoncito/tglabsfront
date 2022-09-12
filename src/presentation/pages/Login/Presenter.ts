import UserUseCase from '../../../application/Auth/loginUseCase';
import AuthUser from '../../../domain/entity/Auth/structure/Auth';
import AuthRepository from '../../../data/repositories/Auth/AuthRepository';
export default class UsersPresenter {
  private _repository: AuthRepository = new AuthRepository();
  private _useCase: UserUseCase = new UserUseCase(this._repository);

  async login(email: string, password: string): Promise<AuthUser> {
    let response = await this._useCase.login({ email, password });
    return response;
  }
}
