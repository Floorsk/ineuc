import { useContext, useEffect, useState } from 'react'
import { firestore } from '../../../firebase'
import { Checkbox } from '@mui/material'
import { UserContext } from '../../Context/UserContext'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

import {
    Content,
    DeleteArea,
    TitleArea,
    Title,
    Ghost,
    CheckArea,
    CheckButton,

} from './styles'

import { MdDone, MdDelete } from 'react-icons/md'


const Habbit = ({ title, deleteHabbit, dayCheck, id }) => {

    const { userData } = useContext(UserContext)

    const [check, setCheck] = useState(0)
    /* Tamanho da tela do usuário */
    const { width, height } = useWindowSize()

    const status = (day, n) => {

        let newN = n

        if (day) {
            setCheck(n + 1)
        } else {
            setCheck(n - 1)
        }

        /* debbug */
        /* console.log(check) */

    }

    const checkday = async (day) => {

        const docRef = await firestore.collection('users').doc(userData.userId).collection('data').doc(id).get()
        const data = docRef.data()
        const days = data.checking

        /* debbug */
        /* console.log(days) */
        setCheck(0)
        let n = 0

        if (days.seg) {
            n += 1
        }

        if (days.ter) {
            n += 1
        }

        if (days.qua) {
            n += 1
        }

        if (days.qui) {
            n += 1
        }

        if (days.sex) {
            n += 1
        }

        /* debbug */
        /* console.log(n) */

        switch (day) {
            case 'seg':
                days.seg = !days.seg
                status(days.seg, n)
                break;
            case 'ter':
                days.ter = !days.ter
                status(days.ter, n)
                break;
            case 'qua':
                days.qua = !days.qua
                status(days.qua, n)
                break;
            case 'qui':
                days.qui = !days.qui
                status(days.qui, n)
                break;
            case 'sex':
                days.sex = !days.sex
                status(days.sex, n)
                break;
            default:
                break;
        }

        await firestore.collection('users').doc(userData.userId).collection('data').doc(id).update({
            checking: days
        })

    }

    const RenderConfetti = () => {

        setTimeout(() => {

            setCheck(0)

        }, [4700])

        return (
            <Confetti
                width={width}
                height={height}
                gravity={0.2}
            />
        )

    }

    return (
        <Content>

            <DeleteArea>
                <MdDelete size={22} style={{ cursor: 'pointer' }} onClick={deleteHabbit} />
            </DeleteArea>

            <TitleArea>

                <Title>{title}</Title>

            </TitleArea>

            <Ghost />
            <CheckArea>

                <CheckButton onClick={() => { checkday('seg') }}>
                    <Checkbox checked={dayCheck.seg} />
                </CheckButton>

                <CheckButton onClick={() => { checkday('ter') }}>
                    <Checkbox checked={dayCheck.ter} />
                </CheckButton>

                <CheckButton onClick={() => { checkday('qua') }}>
                    <Checkbox checked={dayCheck.qua} />
                </CheckButton>

                <CheckButton onClick={() => { checkday('qui') }}>
                    <Checkbox checked={dayCheck.qui} />
                </CheckButton>

                <CheckButton onClick={() => { checkday('sex') }}>
                    <Checkbox checked={dayCheck.sex} />
                </CheckButton>

            </CheckArea>

            {
                check == 5 ? <RenderConfetti /> : ''
            }

        </Content>
    )
}

export default Habbit