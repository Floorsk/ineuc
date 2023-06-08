import { styled } from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1976D2;
`;

export const NavContainer = styled.nav`
    width: 70%;

    @media (max-width: 1056px) {
        
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

    }
`;

export const NavContent = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;

    
`;

export const NavButtons = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 2rem;
    color: #FFFFFF;
    text-decoration: none;
    cursor: pointer;

    @media (max-width: 1056px) {
        
        margin: 0 1rem;

    }

    @media (max-width: 640px) {

        margin: 0 2.5px;
        
        :nth-child(1n) {
            font-size: 12px;
        }
        

    }
`;

export const Span = styled.span`
    font-size: 16px;
    font-weight: 700;
    margin: 0 5px;

`;
