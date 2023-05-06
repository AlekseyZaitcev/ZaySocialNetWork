import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Message from "./pages/Message";
import Friends from "./pages/Friends";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/message" element={<Message />} />
      <Route path="/friends" element={<Friends />} />
    </Routes>
  );
}

export default App;
