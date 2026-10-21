
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Registration";
import UserDetails from "./UserDetails";
import { UserProvider } from "./UserContext";

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/details" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
