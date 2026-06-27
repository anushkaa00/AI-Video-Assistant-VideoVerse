import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import AppBackground from "./components/common/AppBackground";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
     <AppBackground />
      <Toaster position="top-right" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;