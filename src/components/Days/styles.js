import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
`;

export const ButtonArea = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    
`;

export const CreateItem = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    color: #FFFFFF;
    background-color: #2181db;
    border: 0px;
    border-radius: 5px;
    cursor: pointer;

    @media (max-width: 700px) {
        
        font-size: 12px;

    }
`;

export const DaysArea = styled.ul`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    margin-right: 10px;
`;

export const Items = styled.li`
    
    @media (max-width: 700px) {
        
        font-size: 12px;

    }
`;