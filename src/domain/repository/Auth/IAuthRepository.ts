import AuthUser, { AuthRequest } from '../../entity/Auth/structure/Auth';

export default interface IAddressRepository {
  login(user: AuthRequest): Promise<AuthUser>;
}
