import { Route, Routes } from "react-router";
import AppShell from "./AppShell";
import Home from "@/pages/Home";

function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<Home />} />
        <Route path="/tasks/:id" element={<h1>Task id</h1>} />
      </Route>
    </Routes>
  );
}

export default App