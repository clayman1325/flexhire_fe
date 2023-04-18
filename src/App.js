import classes from './App.module.css';
import Aside from './components/Aside.js'
import ProfilePage from './pages/ProfilePage/ProfilePage.js';

function App() {
  return (
      <div className={classes.landing}>
        <Aside className={classes.aside}/>
        <ProfilePage className={classes.body}/>
      </div>
  );
}

export default App;
