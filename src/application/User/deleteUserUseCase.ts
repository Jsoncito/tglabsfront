import IUserRepository from '../../domain/repository/User/IUserRepository';

export default class DeleteUserUseCase {
  private _repository: IUserRepository;

  constructor(repository: IUserRepository) {
    this._repository = repository;
  }

  async deleteUser(id: string): Promise<boolean> {
    return this._repository.delete(id);
  }
}
