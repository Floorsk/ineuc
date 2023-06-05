import { useEffect, useState, useContext } from 'react';
import { PacmanLoader } from 'react-spinners'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { Howl } from 'howler';

import {
    Screen
} from './styles'

import load from '../../assets/music-loading.mp3'
import troll from '../../assets/troll.mp3'

const LoadingScreen = () => {

    const { userData } = useContext(UserContext)

    const navigate = useNavigate()

    /* LoadingScreen */
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    useEffect(() => {

        /* const sound = new Howl({
            src: troll
        })

        sound.play() */
      
        setTimeout(() => {

            navigate('/home')

        }, 3000)
      
    }, [])
    

    return (
        <>
            <Screen>
                <PacmanLoader
                    color={"#1565C0"}
                    loading={true}
                    cssOverride={override}
                    size={150}
                />
            </Screen>
        </>
    )
}

export default LoadingScreen