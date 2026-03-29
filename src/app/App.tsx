import { Route, Routes } from "react-router";
import AppShell from "./AppShell";
import Home from "@/pages/Home";
import TaskDetails from "@/pages/TaskDetails";

function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<Home />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
      </Route>
    </Routes>
  );
}

export default App