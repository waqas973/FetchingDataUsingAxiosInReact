import React, { useState } from 'react'
import styled from 'styled-components';

function Search({getQuery}) {
  const [Input , setInput ] = useState('');
  const handleChange = (e)=>{
        setInput(e.target.value);
        getQuery(e.target.value);       
  }
    return (
        <SearchBox>
             <input  type='text' value={Input} onChange = {handleChange } placeholder='Search character' />
        </SearchBox>
    )
}

export default Search;

const SearchBox = styled.div`
  width: 50vw;
  margin-bottom: 20px;
  > input{
      width: 100%;
      padding: 10px;
      border: none;
      outline: none;
      background-color: whitesmoke;
      border: 2px solid whitesmoke;
      box-shadow: 2px -1px 10px rgba(0,0,0,0.15),-2px 1px 10px rgba(0,0,0,0.15);
  }
`;
