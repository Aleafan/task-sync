import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Hello world!</h1>} />
      <Route path="/tasks/:id" element={<h1>Task id</h1>} />
    </Routes>
  );
}

export default App