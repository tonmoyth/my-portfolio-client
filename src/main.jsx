import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Router/Router.jsx'
import {
  RouterProvider,
} from "react-router";

import 'aos/dist/aos.css'; // You can also use <link> for styles
import Aos from 'aos';
// ..
Aos.init({
   duration: 600,
   once: true,
   mirror: true
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
