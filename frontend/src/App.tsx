import 'src/App.css';
import React, { useState, createContext} from 'react';
import Header from 'src/tsx/Header';
import Main from 'src/tsx/Main';

interface propsContext {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  tailFetchUrl: string;
  setTailFetchUrl: React.Dispatch<React.SetStateAction<string>>;
};

export const propsContext = createContext<propsContext | undefined>(undefined);

function App() {
  const [title, setTitle] = useState<string>('最初のページ');
  const [tailFetchUrl, setTailFetchUrl] = useState<string>('/item/8863.json?print=pretty');
  
  return (
    <propsContext.Provider value={{ title, setTitle, tailFetchUrl, setTailFetchUrl }}>
      <>
      <Header/>
      <Main/>
      </>
    </propsContext.Provider>
  );
};

export default App;