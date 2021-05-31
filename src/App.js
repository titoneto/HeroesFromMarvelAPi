import React, {useEffect, useState} from 'react';
import {
  Container,

  HeroesArea,
  HeroArea,
  HeroImage,
  HeroName,

  MoreButtonArea,
  MoreButton,
  MoreButtonText,

} from './App_Styles';

import Api from './Api';

export default () => {
  const [characters, setCharacters] = useState([]);
  const [nMore, setNMores] = useState(1);

  useEffect(() => {
    const getToApi = async () => {
      try {
        const result= await Api.getCharacters(20,0);
        setCharacters(result);
      } catch (error) {
        alert("Ocorreu um erro ao acessar a API");
      }
    }
    getToApi();
   },[]);

   const handleMoreButton = async() => {
    setNMores(nMore + 1);
    const moreCharacters = await Api.getCharacters(20, nMore * 20);
    
    setCharacters(characters.concat(moreCharacters));
   }

  return (
    <Container>
      <HeroesArea>
        {characters.map((item,key) => (
          <HeroArea key = {key}>
            <HeroImage src = {`${item.thumbnail.path}/standard_amazing.${item.thumbnail.extension}`}/>
            <HeroName>{item.name}</HeroName>
          </HeroArea>
        ))}
      </HeroesArea>
      

      <MoreButtonArea>
        <MoreButton onClick = {() => handleMoreButton()}>
          <MoreButtonText> ... </MoreButtonText>
        </MoreButton>
      </MoreButtonArea>
    </Container>
  );
}
