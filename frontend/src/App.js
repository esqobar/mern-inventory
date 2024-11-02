import "./App.css";
import Landing from "./components/Landing";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import Layout from "./layout/Layout";
import LoginScreen from "./screens/userScreens/LoginScreen";
import RegisterScreen from "./screens/userScreens/RegisterScreen";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<LoginScreen />} />
          <Route path="/signup" element={<RegisterScreen />} />

          <Route path="/dashboard" exact element={
              <Layout>
                <Dashboard />
              </Layout>
          } />
        </Routes>
      </BrowserRouter>
  )
}

export default App;
