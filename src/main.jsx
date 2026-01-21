import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import { Home, About } from './pages/Index.js'

const router = createBrowserRouter([{
    path : '/',
    element: <Layout />,
    children:[
        {
            path: '',
            element: <Home />
        },
        {
            path: '/about',
            element: <About />
        }
    ]
}])

createRoot(document.getElementById('root')).render(
    <RouterProvider router = {router} />
)
