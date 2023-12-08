import Foot from "./components/Foot";

import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import Quotes from "./components/Quotes";

if (process.env.REACT_APP_NODE_ENV === 'production') {
  disableReactDevTools();
}

function App() {
  return (
    <>
    <Quotes/>
    
      <Foot/>
    </>
  );
}

export default App;
