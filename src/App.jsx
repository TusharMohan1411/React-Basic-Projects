import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Counter from "./pages/counter/Counter";
import './App.css';
import HomePage from './pages/homePage/HomePage';
import RootLayout from './pages/homePage/Root';
import Todo from './pages/To Do List/Todo';
import BasicPage from './pages/basic page/BasicPage';
import Stopwatch from './pages/stopwatch/Stopwatch';
import RandomColorGenerator from './pages/Random Color Generator/RandomColor';

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: '/counter', element: <Counter /> },
        { path: '/todo', element: <Todo /> },
        { path: '/basic-page', element: <BasicPage /> },
        { path: '/stopwatch', element: <Stopwatch /> },
        { path: '/random-color-generator', element: <RandomColorGenerator /> }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}