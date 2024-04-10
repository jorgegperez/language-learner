import "./App.css";
import { LearningForm, LearningPage, Toolbar } from "./components";

function App() {
  return (
    <div className="wrapper">
      <Toolbar />
      <LearningForm />
      <LearningPage />
    </div>
  );
}

export default App;
