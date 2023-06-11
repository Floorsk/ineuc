import { useState, useContext, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { FaSpinner } from 'react-icons/fa';

import {
    LoginContainer,
    DisplayContent,
    DisplayImg,
    LoginContent,
    LoginTitle,
    Span,
    InputArea,
    Question
} from './styles'

import { TextField, Button } from '@mui/material'

import calendar from '../../assets/calendar.svg'

const Login = () => {

    const { userAuth } = useContext(UserContext)
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const auth = async () => {

        setLoading(true);

        const result = await userAuth(email, password)

        result ? navigate('/loading') : console.log('Fail')

        setLoading(false);
    }

    return (
        <>
            <LoginContainer>

                <DisplayContent>
                    <DisplayImg src={calendar} />
                </DisplayContent>

                <LoginContent>

                    <LoginTitle>Faça seu <Span>Login</Span></LoginTitle>

                    <InputArea>
                        <TextField
                            sx={{ width: '30rem' }}
                            placeholder='E-mail'
                            type='email'
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <TextField
                            sx={{ width: '30rem' }}
                            placeholder='Senha'
                            type='password'
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </InputArea>


                    <Button
                        sx={{ width: '30rem', height: '3rem', marginTop: '20px' }}
                        variant='contained'
                        onClick={() => { auth() }}
                        loading={loading}
                        disabled={loading}
                    >
                        {loading ? (
                            <FaSpinner color="#FFF" size={16} />
                        ) : (
                            <a>ENTRAR</a>
                        )}
                    </Button>


                    <Link to='/signup' style={{ textDecoration: 'none' }}>
                        <Question>Não possui uma conta?</Question>
                    </Link>

                </LoginContent>

            </LoginContainer>
        </>
    )
}

export default Login