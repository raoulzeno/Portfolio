import './App.css';
import LandingPage from '../components/LandingPage.tsx'
import ToolBelt from '../components/ToolBelt.tsx';

function App() {
  return (
    <div>
      <div id='home'>
        <LandingPage />
      </div>
      <div id="toolbelt">
        <ToolBelt />
      </div>
    </div>
  );
}

export default App;
