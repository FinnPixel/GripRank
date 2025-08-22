import "./App.css";
import { UiThemeProvider } from "./theme-provider";
import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <UiThemeProvider>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </UiThemeProvider>
  );
}

export default App;
