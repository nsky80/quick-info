import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Info from './components/Info';
import Interests from './components/Interests';
import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App(){
  return(
    <div className='container'>
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default App;
