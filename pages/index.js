// pages/index.js
import Link from 'next/link';
import LoginPage from './LoginPage';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <p>This is the default landing page.</p>
      <Link href="/LoginPage">Login</Link>
    </div>
  );
};

export default HomePage;
