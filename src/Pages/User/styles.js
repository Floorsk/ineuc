import { styled } from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FAFAFA;
`;

export const Content = styled.div`
    width: 900px;
    height: 500px;
    display: flex;
    flex-direction: row;
    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 5px 5px 15px #C9C9C9;
`;

export const LeftSide = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ProfilePicture = styled.img.attrs({
    resizeMode: 'contain'
})`
    width: 50%;
    height: 30%;
`;

export const RightSide = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const UserInfo = styled.div`

`;

export const UserData = styled.p`
    margin: 15px;
`;

export const UserDataSpan = styled.span`
    margin-left: 15px;
`;