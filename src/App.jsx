
import './App.css'
import Header from './components/header_img/header';
import Navbar from './components/navbar/navbar';
import Header_content from './components/header_content/header_content';
import Logo from './components/logo/Logo';


function App() {

  return (
    <>
    <div>
    <Header/>
    {/* <div className='flex'> */}
    <Navbar/>
    <Logo/>
    {/* </div> */}
    <Header_content/>
    
    </div>
    </>
  )
}

export default App;

