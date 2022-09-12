import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  .searcher {
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #444;
    padding-left: 10px;
    padding-right: 10px;
  }
  button {
    margin-right: 5px;
  }
  .createBtn {
    background-color: green;
    margin-bottom: 20px;
    display: flex;
    align-self: flex-start;
  }
`;
