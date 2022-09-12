import { useAuth } from '../../hooks/useAuth';
import { Wrapper } from './style';

const Header = () => {
  const { auth } = useAuth();
  return (
    <Wrapper>
      <span>{`Bienvenido ${auth?.name}`}</span>
    </Wrapper>
  );
};

export default Header;
