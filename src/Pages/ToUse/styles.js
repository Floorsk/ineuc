import styled from "styled-components";

export const Conteudo = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ConteudoPrincipal = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-around;

`;

export const Conteudoprincipalescrito = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

export const Conteudoprincipalescrito1 = styled.h1`
    font-family: 'Righteous', cursive;
    font-weight: 400;
    font-size: 65px;
    color: #000000;
    padding-left: 25px;
    padding-right: 100px;
`;

export const Conteudoprincipalescrito2 = styled.h2`
    text-align: justify;
    font-family: 'Sarala', sans-serif;
    color: #000000;
    font-weight: 400;
    font-size: 14px;
    padding-left: 25px;
    padding-right: 200px;
`;

export const Imagemprincipal = styled.img`
    width: 600px;
    height: 350px;
    padding-top: 50px;
    padding-right: 50px;

`;

export const Conteudosecundario = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-top: 48px;
`;

export const Conteudosecundarioescrito = styled.h3`
    border-top: 0.3px solid #000000;
    padding-top:48px;
    font-family: 'Righteous', cursive;
    font-weight: 400;
    font-size: 24px;
    color: #000000;
    margin-bottom: 16px;
`;

export const Conteudosecundarioescrito1 = styled.p`
    font-family: 'Sarala', sans-serif;
    color: #000000;
    font-weight: 300;
    font-size: 16px;
    text-align: center;
`;

export const Rodape = styled.footer`
    width: 90vw;
    padding: 5px;
    border-top: 0.3px solid #000000;
`;