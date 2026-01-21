import { Outlet } from 'react-router-dom'
import { Header, Footer, Main } from './components/Index'
import ParticlesComponent from './components/ParticlesComponent'

function Layout() {
  return (
    <>
     <ParticlesComponent id="particles" />
     <Header />
     <div>
        <Outlet />
     </div> 
     <Footer />
    </>
  )
}

export default Layout
