import { Flex, Space } from "antd";
import "./App.css";
import reactLogo from "./assets/react.svg";
import DrawerApp from "./components/drawer";
import viteLogo from "/vite.svg";

function App() {
  return (
    <Space direction="vertical">
      <Flex align="start" justify="flex-end">
        <DrawerApp />
      </Flex>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edite o <code>src/App.jsx</code> e salve para testes HMR
        </p>
      </div>
    </Space>
  );
}
export default App;
