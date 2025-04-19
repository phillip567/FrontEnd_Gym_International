import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, signOut } = useAuth();

  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link href="/" style={{ marginRight: '1rem' }}>Home</Link>
      {!user ? (
        <>
          <Link href="/signin" style={{ marginRight: '1rem' }}>Sign In</Link>
          <Link href="/register">Register</Link>
        </>
      ) : (
        <>
          <span style={{ marginRight: '1rem' }}>Hello, {user.name}</span>
          <button onClick={signOut}>Sign Out</button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
