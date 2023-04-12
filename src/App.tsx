import AdditionalBox from "./components/Container/AdditionalBox";
import ContainerBox from "./components/Container/ContainerBox";
import InputBox from "./components/Container/InputBox";
import styled from 'styled-components';

const Todolist = styled.div`
width: 50vw;
height: 100%;
border: solid 5px none;
border-radius: 15px;
margin-top: 17%;
margin-left: auto;
margin-right: auto;
text-align: center;
`;

const App = () => {
  return (
    <Todolist>
      <AdditionalBox />
      <ContainerBox />
      <InputBox />
    </Todolist>
  );
}

export default App;