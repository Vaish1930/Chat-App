import ChatRoom from "./components/ChatRoom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatRoom />} />
        <Route path="/auth" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
