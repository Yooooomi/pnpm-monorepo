import "./App.css";
import { MySuperComponent } from "@test/shared/src/components/mySuperComponent";
import { MySuperPlatformDependantComponent } from "@test/shared/src/components/mySuperPlatformDependantComponent";

function A() {
  return <div>THE A COMPONENT</div>;
}

function App() {
  return (
    <div className="App">
      <div style={{ height: 50, width: 50, backgroundColor: "red" }} />
      <A />
      <MySuperComponent />
      <MySuperPlatformDependantComponent />
    </div>
  );
}

export default App;
