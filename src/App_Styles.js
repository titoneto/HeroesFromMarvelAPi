import styled from  'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: #ffffff;
`

export const HeroesArea = styled.div`
    display: flex;
    flex-wrap: wrap;

    box-sizing: border-box;
    justify-content: space-evenly;
    align-content: space-around;
`

export const HeroArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #181b1c;

    width: 300px;
    max-width: 45%;

    margin: 10px;
    border-top-right-radius: 50px;
`
export const HeroImage = styled.img`
    border-top-right-radius: 50px;
    width: 100%;
`
export const HeroName = styled.div`
    font-size: 20px;
    color: #e6e6e6;
`

export const MoreButtonArea = styled.div`
    display: flex;
    flex:1;
    justify-content: center;
`
export const MoreButton = styled.div`
    padding: 10px 15px;
    background-color: #e9e9e9;
    border-radius: 14px;

    cursor: pointer;
`
export const MoreButtonText = styled.div`
    font-size: 22px;
    font-weight: bold;
    color: #181b1c;
`