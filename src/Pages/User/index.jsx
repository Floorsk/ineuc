import { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'

import {
    Container,
    Content,
    LeftSide,
    ProfilePicture,
    RightSide,
    UserInfo,
    UserData,
    UserDataSpan
} from './styles'

import Header from '../../components/Header'

import user from '../../assets/user.png'

const User = () => {

    const {userData} = useContext(UserContext)
    console.log(userData)

    return (
        <>
            <Header />
            <Container>

                <Content>



                    <LeftSide>

                        <ProfilePicture src={user} />

                    </LeftSide>

                    <RightSide>

                        <UserInfo>
                            <UserData>Username: <UserDataSpan>{userData.username}</UserDataSpan></UserData>
                            <UserData>Email: <UserDataSpan>{userData.email}</UserDataSpan></UserData>
                        </UserInfo>

                    </RightSide>



                </Content>

            </Container>
        </>
    )
}

export default User