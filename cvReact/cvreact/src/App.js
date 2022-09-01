import './App.css'
import User from './component/User';
import Skills from './component/Skills';


function App() {
  return (
    <div className="App">
      <div className='grid__container'>
        <div className='sidebar'>
          <User />
          <Skills />
        </div>
        <div className='main'>main</div>
      </div>

      {/* react, material ui, react-html2pdf */}
      {/* compétence - skills */}
      {/* langue - skills */}
      {/* centres d'intérêts - interests */}
      {/* colonne de droite */}
      {/* profil - profil */}
      {/* formations - formations */}
      {/* light/dark mode */}
      {/* generator pdf */}
    </div>
  )
}

export default App;
