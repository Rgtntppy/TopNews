import 'src/app.scss';
import React, { useState, createContext} from 'react';
import Header from 'src/Component/Header/Header';
import Main from 'src/Component/Main';

interface propsContext {
  tailFetchUrl: string;
  setTailFetchUrl: React.Dispatch<React.SetStateAction<string>>;
};

export const propsContext = createContext<propsContext | undefined>(undefined);

function App() {
  const [tailFetchUrl, setTailFetchUrl] = useState<string>('/topstories.json?print=pretty');
  
  return (
    <propsContext.Provider value={{ tailFetchUrl, setTailFetchUrl }}>
      <>
      <Header/>
      <Main/>
      </>
    </propsContext.Provider>
  );
};

export default App;