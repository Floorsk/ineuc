import Header from '../../components/Header'

import {
    Conteudo,
    ConteudoPrincipal,
    Conteudoprincipalescrito,
    Conteudoprincipalescrito1,
    Conteudoprincipalescrito2,
    Imagemprincipal,
    Conteudosecundario,
    Conteudosecundarioescrito,
    Conteudosecundarioescrito1,
    Rodape
} from './styles'

import img from './pensamento.avif'

const ToUse = () => {
    return (
        <>
            <Header />
            <Conteudo>

                <ConteudoPrincipal>

                    <Conteudoprincipalescrito>
                        <Conteudoprincipalescrito1>
                            Bem-vindo (a) ao INEUC! E lembre-se isso não é um calendário!
                        </Conteudoprincipalescrito1>
                        <Conteudoprincipalescrito2>
                            O objetivo deste projeto é criar um site com o uso do Spring Boot e banco de dados que permita aos usuários registrar suas atividades diárias e gerar um dashboard com informações relevantes. O escopo do site incluirá um sistema de login para os usuários registrarem suas atividades, inserindo o nome da atividade, o tempo gasto nela e uma breve descrição. Além disso, os usuários poderão visualizar um resumo de suas atividades nos últimos 30 dias, com informações como o número total de horas registradas, a média de horas por dia, o tempo ocioso e um gráfico de barras mostrando o tempo gasto em cada atividade.
                            A equipe de desenvolvimento será responsável por criar e implementar o site com o uso do Spring Boot, que permitirá o desenvolvimento mais rápido e fácil da aplicação web. O banco de dados será utilizado para armazenar as informações de atividades dos usuários e gerar o dashboard personalizado. Além disso, recursos como a infraestrutura de hospedagem e bibliotecas de gráficos também estarão disponíveis para o desenvolvimento do site.
                            No entanto, o projeto terá algumas limitações e restrições, como um orçamento limitado e um prazo apertado para a conclusão do projeto. Além disso, será necessário garantir a segurança dos dados do usuário, protegendo suas informações pessoais e atividades registradas no banco de dados.
                        </Conteudoprincipalescrito2>
                        
                    </Conteudoprincipalescrito>

                    <Imagemprincipal src={img} />

                </ConteudoPrincipal>

                <Conteudosecundario>
                        <Conteudosecundarioescrito>
                            Bem-vindo (a) ao INEUC! E lembre-se isso não é um calendário!
                        </Conteudosecundarioescrito>

                        <Conteudosecundarioescrito1>
                            O objetivo deste projeto é criar um site com o uso do Spring Boot e banco de dados que permita aos usuários registrar suas atividades diárias e gerar um dashboard com informações relevantes. O escopo do site incluirá um sistema de login para os usuários registrarem suas atividades, inserindo o nome da atividade, o tempo gasto nela e uma breve descrição. Além disso, os usuários poderão visualizar um resumo de suas atividades nos últimos 30 dias, com informações como o número total de horas registradas, a média de horas por dia, o tempo ocioso e um gráfico de barras mostrando o tempo gasto em cada atividade.

                            A equipe de desenvolvimento será responsável por criar e implementar o site com o uso do Spring Boot, que permitirá o desenvolvimento mais rápido e fácil da aplicação web. O banco de dados será utilizado para armazenar as informações de atividades dos usuários e gerar o dashboard personalizado. Além disso, recursos como a infraestrutura de hospedagem e bibliotecas de gráficos também estarão disponíveis para o desenvolvimento do site.

                            No entanto, o projeto terá algumas limitações e restrições, como um orçamento limitado e um prazo apertado para a conclusão do projeto. Além disso, será necessário garantir a segurança dos dados do usuário, protegendo suas informações pessoais e atividades registradas no banco de dados.
                        </Conteudosecundarioescrito1>

                        <Conteudosecundarioescrito1>
                            1. Na página inicial, você encontrará informações e recursos relevantes. Leia cuidadosamente para se familiarizar com o propósito e o conteúdo do site.
                        </Conteudosecundarioescrito1>

                        <Conteudosecundarioescrito1>
                            2. Observe o menu de navegação, que está localizado no topo da página. Ele contém links para diferentes seções do site.
                        </Conteudosecundarioescrito1>

                        <Conteudosecundarioescrito1>
                            3. Utilize o menu de navegação para acessar as diferentes seções do site. Clique nos links correspondentes para ir para as páginas desejadas.
                        </Conteudosecundarioescrito1>

                        <Conteudosecundarioescrito1>
                            4. Para cadastrar-se, basta clicar no link de Cadastrar-se e preencher os campos com as informações pedidas. Lembre-se de criar uma senha bem segura!
                        </Conteudosecundarioescrito1>

                        <Conteudosecundarioescrito1>
                            5. Depois disso você será direcionado para a página de acesso da plataforma e você irá preencher os campos com o e-mail e a senha cadastrados.
                        </Conteudosecundarioescrito1>

                        <Conteudosecundarioescrito1>
                            6. O INEUC te permite cadastrar os seus hábitos e fazer o check list da realização daquela tarefa naquele dia da semana.
                        </Conteudosecundarioescrito1>

                        <Conteudosecundarioescrito1>
                            7. O INEUC te permite cadastrar os seus hábitos e fazer o check list da realização daquela tarefa naquele dia da semana.
                        </Conteudosecundarioescrito1>

                    </Conteudosecundario>

                <Rodape/>

            </Conteudo>
        </>
    )
}

export default ToUse