import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,

} from 'react-router-dom';

import './css/cssReset.css';
import Landing from './routes/Landing.jsx';
import Artists from './routes/Artists.jsx';
import SingleArtist from './routes/SingleArtist.jsx';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />
    },
    {
      path: '/artists',
      element: <Artists />
    },
    {
      path: "artists/:artistId",
      element: <SingleArtist />,
    },
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
