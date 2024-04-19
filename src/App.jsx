import "./App.css";
import Aside from "./components/Aside/Aside.jsx";
import Card from "./components/Card/Card.jsx";
import Profile from "./components/Profile/Profile.jsx";

function App() {
  return (
    <div className="flex items-center h-screen bg-black text-white">
      <Aside />
      <Profile />
    </div>
  );
}

export default App;
