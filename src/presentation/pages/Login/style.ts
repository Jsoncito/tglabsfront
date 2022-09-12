import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  h1 {
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid gray;
    border-radius: 10px;
  }
  input {
    margin-bottom: 10px;
  }
  button {
    margin-top: 10px;
  }
`;
