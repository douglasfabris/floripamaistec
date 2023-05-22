import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => (
    <div>
      <Header />
      <main className="container mt-4">
        <Outlet/>
      </main>
    </div>
);

export default App