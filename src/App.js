// client/src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import Audience from "./components/Audience";
import Campaigns from "./components/Campaigns";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route index element={<Home />} />
          <Route path="audience" element={<Audience />} />
          <Route path="campaigns" element={<Campaigns />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
