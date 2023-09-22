import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/Home';
import { CarStore } from '../pages/CarStore';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='home' element={<HomePage />} />
        <Route path='cars' element={<CarStore />} />

        <Route path='/*' element={<HomePage />} />

        
      </Routes>
    </>
  );
};

export default AppRouter;