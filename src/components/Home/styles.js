import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 70px;
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const ContainerInput = styled.div`
   border: 1px solid #ccc;
   display: flex;
   input {
    border: 0;
    width: 100%;
    padding: 5px;

    &:focus{
     border: 0;
    }
   }

   button {
    background-color: #DC4C41;
    color: #fff;
    outline: 0;
    border: 0;
    padding: 5px;
   }
`;

export const ContainerContent = styled.div`
  margin-top: 20px;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 30px;
`;

export const NameList = styled.span`
  font-weight: bold;
`;

export const List = styled.div`
  padding: 10px 0px;
`;

export const Item = styled.div`
  border: 1.5px solid #ccc;
  border-radius: 5px;
  padding: 5px 10px;
  min-width: 250px;
  margin-bottom: 10px;
`;
