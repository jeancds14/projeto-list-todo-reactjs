import React, {useState, useEffect} from 'react';

import { Container, Title, ContainerContent, NameList, List, Item, ContainerInput } from './styles';

function Home() {
    const [ text, setText ] = useState("");
    const [ array, setArray ] = useState([]);

    useEffect(() => {
        setArray(JSON.parse(localStorage.getItem("array")) === null ? [] : JSON.parse(localStorage.getItem("array")));
    }, [])

    const handleChangeText = (e) => {
        setText(e.target.value);
    }

    const handleClickSave = () => {
        if(text !== ""){
            var list = array;
            list.push(text);
            localStorage.setItem("array", JSON.stringify(list));
            setArray(JSON.parse(localStorage.getItem("array")));
            setText("");
        }
    }

  return (
    <Container>
        <Title>
            Lista
        </Title>
        <ContainerInput>
            <input type="text" onChange={handleChangeText} value={text}/>
            <button onClick={handleClickSave}>Salvar</button>
        </ContainerInput>
        <ContainerContent>
            <NameList>
             Afazeres
            </NameList>
            <List>
                { array.length === 0 ?
                    <h4>
                        Lista vazia
                    </h4>
                : array.map((item, id) => (
                    <Item key={id}>
                        {item}
                    </Item>
                ))}
            </List>
        </ContainerContent>
    </Container>
  );
}

export default Home;