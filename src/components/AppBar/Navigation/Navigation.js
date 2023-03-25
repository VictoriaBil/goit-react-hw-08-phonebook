import { useAuth } from 'hooks/useAuth';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      {!isLoggedIn && <Link to="/">Home</Link>}
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </nav>
  );
};
