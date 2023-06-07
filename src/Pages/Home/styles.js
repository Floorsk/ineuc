import { styled } from "styled-components";

export const WelcomeArea = styled.div`
    width: 90%;
    margin: 10px 0;
`;

export const Title = styled.h1`
    margin: 10px 0;
    color: #ff6961;
    font-family: 'Chokokutai';
`;

export const MainContent = styled.section`
    width: 90%;
    min-height: 80vh;
    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 5px 5px 15px #C9C9C9;
`;

export const HabbitContent = styled.ul`
    width: 100%;
    height: ${(props) => props.height || 'none'};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    list-style: none;
`;

export const InvisibleFooter = styled.div`
    width: 100%;
    height: 20px;
`;

/* Modal */

export const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.1);
`;

export const FormBox = styled.div`
    width: 50%;
    height: 60%;
    background-color: #FFFFFF;
    border: 1px solid black;
`;

export const CloseArea = styled.div`
    width: 95%;
    height: 10%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
`;

export const ContentArea = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ModalTitle = styled.h1`
    color: #1565C0;
    margin-bottom: 30px;
`;
