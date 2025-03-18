import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EmployeeFormPage from './pages/EmployeeFormPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/create-employee' element={<EmployeeFormPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
