import User from '../../domain/entity/User/structure/User';

export function objectToUser(object: any): User {
  const user: User = {} as User;

  user.id = object.id;
  user.email = object.email;
  user.password = object.password;
  user.name = object.name;
  user.lastName = object.last_name;
  user.lastLogin = object.last_login;
  user.createdAt = object.created_at;

  return user;
}
