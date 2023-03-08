import {
  Route,
  Routes,
  Link,
} from "react-router-dom";

import { appComponents } from "constants/components";

import 'style/app.css';


function App() {
  return (
    <div className="App">
      <Routes>
        {
          appComponents.map( (obj) => (<Route key={obj.path} path={obj.path} element={obj.element} />))
        }
      </Routes>
    </div>
  );
}

export default App; 
