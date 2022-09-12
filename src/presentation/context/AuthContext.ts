import { createContext } from 'react';
import AuthUser from '../../domain/entity/Auth/structure/Auth';

type Props = {
  auth: AuthUser | undefined;
  login: (user: AuthUser) => void;
  logout: () => void;
};

const AuthContext = createContext<Props>({
  auth: undefined,
  login: (user) => {},
  logout: () => {},
});

export default AuthContext;
