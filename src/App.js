import classes from './App.module.css';
import ProfilePage from './pages/ProfilePage/ProfilePage';

function App() {
  return (
    <div className={classes.Landing}>
      <ProfilePage />
    </div>
  );
}

export default App;
