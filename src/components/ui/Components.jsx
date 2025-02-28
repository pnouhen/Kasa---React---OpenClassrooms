import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function MyComponent() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulate user login or check authentication status
  useEffect(() => {
    // Here you would check the user's authentication status,
    // for now, we're just setting it to `true` for demonstration purposes.
    const checkLoginStatus = () => {
      setIsLoggedIn(true); // Simulating a login
    };

    // Simulate an automatic login after 2 seconds
    setTimeout(() => {
      checkLoginStatus();
    }, 50);
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  // Redirect to /dashboard if the user is logged in
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/*');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div>
      {/* This could show a loading message or something until the user is logged in */}
      {isLoggedIn ? <p>Redirecting...</p> : <p>Loading...</p>}
    </div>
  );
}

