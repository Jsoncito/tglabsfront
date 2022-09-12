import User from '../../entity/User/structure/User';

export default interface IAddressRepository {
  create(user: User): Promise<boolean>;
  update(id: string, user: User): Promise<User>;
  list(): Promise<User[]>;
  get(id: string): Promise<User>;
  delete(id: string): Promise<boolean>;
}
