import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Day12 from "./pages/Day12";

function App() {

  const path = window.location.pathname;

  if (path === "/dashboard") {
    return <Dashboard />;
  }

  if (path === "/day/12") {
    return <Day12 />;
  }

  return <Landing />;
}

export default App;