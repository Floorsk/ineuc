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
`;

export const Span = styled.span`
    font-size: 16px;
    font-weight: 700;
    margin: 0 5px;
`;
