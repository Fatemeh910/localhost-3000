import Header from './components/header/header';
import './App.css';
import Sidbar from './components/sidbar/sidbar';
import Main from './components/main/main';
import Footer from './components/footer/footer';




function App() {
  return (
    <div className='w-full  bg-slate-300 min-h-screen flex flex-col-justify-center items-center'>
      <div className='bg-white rounded-3xl min-w-90 min-h-90  flex '>
      <Sidbar></Sidbar>
      <Main></Main>
      <Header></Header>
      </div>

      
      
     
    </div>
       );
      }


export default App;
