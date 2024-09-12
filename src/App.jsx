import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import EditUser from './components/EditUser';
import Navbar from './components/Navbar';
import New from './components/Siguiente'

function App() {
  return (
    <Router>
      <div className='home'>
        <Navbar />
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/edit/:userId" element={<EditUser />} />
          <Route path="/Siguiente" element={<New/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

