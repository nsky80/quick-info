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



function App() {
  return (
    <div className='row'>
      <div className="col-1 col-s-1"></div>
      <div className="col-2 col-s-2">
        <div className='container'>
        <Info />
        <About />
        <Interests />
        <Footer /></div>
      </div>
      <div className="col-3 col-s-3"></div>
    </div>
  )
}

export default App;
