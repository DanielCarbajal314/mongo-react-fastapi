import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Home } from './Home';
import { Example } from './Example';
import { Header } from '../shared/Header';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="Home" element={<Home />} />
      <Route path="Example" element={<Example />} />
    </Route>
  )
)