import { useState, useEffect} from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`

  margin-top: 30px; 
  font-family: 'Arial', sans-serif;
  font-size: 32px;
  font-weight: bold;
  color: #FF5733;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

 h1 {
  align-items: center;
  padding-left: 50px;
  border-radius: 2px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);

 }

 h2 {
  padding-left: 50px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);

 } 
  
 button {

  margin-left: 50px;
  background-color: #ffca28;
  color: #ffffff;
  font-size: 16px;
  padding: 18px 50px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease;

  &:hover {
    background-color: #ffc107;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
  }
 }

`

const App = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount((prevState) => prevState + 1)
    //setCount(count + 2)
  }

  return (
    <StyledDiv>
      <h1>Testing hooks!</h1>
      <h2>{count}</h2>
      <button onClick={incrementCount}>INCREMENT</button>
    </StyledDiv>
  );
}

const App2 = () => {
  const [resourceType, setResourceType] = useState("Exemples")

  useEffect(() => {
    console.log("render")
  },[resourceType]);

  const changeResourceType = (resourceType) => {
    setResourceType(resourceType);
  };

  return(
    <StyledDiv>
      <h1>{resourceType}</h1>
      <div>
        <button onClick={() => changeResourceType('Posts')}>Posts</button>
        <button onClick={() => changeResourceType('Comments')}>Comments</button>
        <button onClick={() => changeResourceType('Todos')}>Todos</button>
      </div>
    </StyledDiv>
  )
}

export { App, App2 };

