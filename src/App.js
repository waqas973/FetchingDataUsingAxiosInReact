import { useState } from 'react';
import styled from 'styled-components';
import CharacterData from './Components/CharacterData';
import Search from './Components/Search';

function App() {
  const [Query , setQuery] = useState('');
  const getquery = (q)=>{
        setQuery(q);
  }
  return (
     <Main >
         <h1>Fetching Data using Axios in React</h1>
        <Search getQuery = {getquery}/>
       <CharacterData  query={Query} />
    </Main>
    
  );
}

export default App;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
`;
