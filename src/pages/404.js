// pages/404.js
import Link from 'next/link';

const Custom404 = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for might have been removed or is temporarily unavailable .</p>
      <Link href="/">
      Go back to the home page
      </Link>
    </div>
  );
};

export default Custom404;
