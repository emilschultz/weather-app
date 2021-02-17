import styled from 'styled-components';

const InputSearch = styled.input`
  width: 90%;
  height: 2.5rem;
  margin: 0 0 5rem 0;
  padding: .50rem;

  appearance: none;
  background: none;
  border: none;

  background-color: rgba(255, 255, 255, .5); 
  border-radius: 0 0 1rem 1rem;
  box-shadow: .1rem .1rem 1rem .6rem rgba(202, 204, 206, .3);

  :hover {
    background-color: rgba(255, 255, 255, .8); 

  }
`;
export default InputSearch;