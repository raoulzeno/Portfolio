import './App.css';
import LandingPage from '../components/LandingPage.tsx'
import ToolBelt from '../components/ToolBelt.tsx';
import NavigationBar from "../components/NavigationBar.tsx";

function App() {
  return (
    <div>
      <NavigationBar />
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
