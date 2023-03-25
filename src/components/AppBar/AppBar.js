import { useAuth } from '../../hooks/useAuth';
import { Navigation } from './Navigation/Navigation';
import { UserMenu } from './UserMenu/UserMenu';
import { NavAuth } from './Navigation/NavAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <NavAuth />}
    </header>
  );
};
