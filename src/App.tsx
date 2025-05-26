import { BrowserRouter, Route, Routes } from 'react-router-dom';
import classes from './App.module.css';
import Layout from './Components/Layout/Layout';
import MainView from './Components/MainView/MainView';

function App() {
  return (
    <div className={classes.App}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<MainView />} />
            <Route path='*' element={<h1>Not found page</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
