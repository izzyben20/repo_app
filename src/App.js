import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './components/login/Login';
import ProfilePage from './components/homePage/ProfilePage';
import { auth } from './firebase';
import './App.css';

const App = () => {
  const [user] = useAuthState(auth);

  return (
    // Conditional rendering based on users login status
    <>{user ? <ProfilePage /> : <Login />}</>
  );
};

export default App;
