import {
    Container,
    ButtonArea,
    CreateItem,
    DaysArea,
    Items
} from './styles'

import { HiPlus } from 'react-icons/hi' 

const Days = ({ press }) => {
    return (
        <Container>

            <ButtonArea onClick={press}>
                <CreateItem>Adicione um item<HiPlus size={18} style={{ marginLeft: '2.5px'}} color='#FFFFFFFF'/></CreateItem>
            </ButtonArea>


            <DaysArea>

                <Items>Segunda</Items>
                <Items>Terça</Items>
                <Items>Quarta</Items>
                <Items>Quinta</Items>
                <Items>Sexta</Items>

            </DaysArea>

        </Container>
    )
}

export default Days