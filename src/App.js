import { useState } from "react";
import Layout from "./layout/Layout";

function App() {
  const [mode,setMode] = useState("dark")
  return (
    <div className={mode}>
      <Layout setMode={setMode} mode={mode}/>
    </div>
  );
}

export default App;