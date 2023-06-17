# ineuc

https://ineuc-tan.vercel.app - Deploy da aplicação

SUMÁRIO
1.	Introdução	4
1.1.	Objetivo do documento	5
1.2.	Escopo do sistema	5
2.	Descrição do sistema	5
2.1.	Requisitos funcionais	5
2.1.1.	Registro de Usuário:	5
2.1.2.	Autenticação do usuário	5
2.1.3.	Criação de hábitos	5
2.2.	Requisitos não funcionais	6
2.2.1.	Desempenho	6
2.2.2.	Usabilidade	6
3.	Modelagem do sistema	6
3.1.	Diagrama de casos de uso	7
3.2.	Diagrama de classes	8
3.3.	Diagrama de sequência (ou de comunicação)	8
3.4.	Diagrama de objetos	9
4.	Modelagem do sistema	9
Apêndice	10
1.	Glossário de termos	10
2.	Lista de abreviações	11
3.	Exemplos de Interfaces de Usuário	11
4.	Exemplos de Código	13
5.	Referências	14

Introdução
No mundo agitado em que vivemos, é cada vez mais desafiador estabelecer e manter hábitos saudáveis em nosso dia a dia. Seja adotar uma rotina de exercícios físicos, comer de forma equilibrada, meditar regularmente ou simplesmente lembrar-se de realizar tarefas importantes, todos nós enfrentamos dificuldades para desenvolver e sustentar esses hábitos em meio às demandas e distrações constantes.
Nesse contexto, a necessidade de criar um sistema web de criação de hábitos torna-se evidente. Tal software pode se tornar uma ferramenta valiosa para auxiliar as pessoas a estabelecerem rotinas saudáveis e produtivas em suas vidas. Ao fornecer recursos e funcionalidades específicas, ele pode ajudar os usuários a superarem os desafios comuns associados à formação de hábitos e a manterem o foco em suas metas pessoais.
Dentro dessa perspectiva, o aplicativo permite que os usuários acompanhem estatísticas e métricas relacionadas aos seus hábitos, fornecendo insights e análises úteis. Essas informações podem ajudar a identificar padrões, identificar áreas de melhoria e fornecer feedback personalizado, capacitando os usuários a tomar decisões informadas para alcançar seus objetivos.
Um sistema de criação de hábitos deverá conter em suas atualizações futuras recursos como lembretes personalizáveis, acompanhamento do progresso, gamificação, estabelecimento de metas e recompensas. Essas características são projetadas para motivar e incentivar os usuários a persistirem na adoção de novos comportamentos e a tornarem essas práticas parte integrante de seu estilo de vida.
Em resumo, a criação de um aplicativo de hábitos eficaz é uma resposta à necessidade crescente de apoiar as pessoas em seus esforços para adotar hábitos saudáveis e produtivos. Ao oferecer uma plataforma intuitiva e personalizada para acompanhar e desenvolver rotinas benéficas, esse aplicativo pode ser uma ferramenta valiosa para melhorar a qualidade de vida e promover o bem-estar geral das pessoas em sua jornada rumo a uma vida mais equilibrada e satisfatória.

Objetivo do documento
O objetivo deste documento é fornecer uma visão geral do sistema "INEUC Isso Não é Um Calendário" e apresentar a análise e o projeto utilizando a modelagem UML.
Escopo do sistema
O sistema visa permitir que os usuários criem hábitos e façam o check in diárianete das atividades criadas, além disso disponibiliza um resumo de atividdes dos últimos 30 dias, com informações como o número total de horas registradas, a média de hora por dia, o tempo gasto ocioso e um gráfico de barras mostrando o tempo gasto em cada atividade.
Descrição do sistema
A seguir serão abordadas as principais funcionalidades e características do INEUC, Isso Não é um Calendário.
Requisitos funcionais
Registro de Usuário:
O sistema deve permitir que os usuários se cadastrem fornecendo informações pessoais, como nome, e-mail e gerando uma senha.
O sistema deve realizar a validação dos dados fornecidos durante o registro.

Autenticação do usuário
O sistema deve permitir que os usuários façam login usando suas credenciais (e-mail e senha).
O sistema deve autenticar as credenciais fornecidas e permitir o acesso apenas aos usuários registrados.

Criação de Hábito
O sistema deve permitir que os usuários criem a quantidade de hábitos que achar conveniente e possam fazer o check in todos os dias. 
O sistema deve exibir os resultados dos hábitos cumpridos durante a semana em forma de um dashboard. 

Requisitos não funcionais
Desempenho
O sistema deve ter um tempo de resposta de até 1 segundo para pesquisas, exibição de resultados e processamento de reservas.
O sistema deve ser capaz de lidar com até 1000 usuários simultaneamente, sem comprometer o desempenho.
O sistema deve estar disponível 24 horas por dia, minimizando o tempo de inatividade para manutenção ou atualizações.

Usabilidade
A interface do usuário deve ser intuitiva, amigável e de fácil navegação, permitindo que os usuários criem as tarefas de forma rápida e sem complicações, além de poder acessar o sistema de qualquer lugar para realizar o seu check- in diário.
Modelagem do sistema
A modelagem do sistema foi feita com uso da linguagem UML (Unified Modelling Language) na ferramenta Draw.io. Diagramas definidos em UML (Unified Modeling Language) (BOOCH et. Al., 2005; RUMBAUGH et al., 2004) se tornou uma linguagem de modelagem padrão para modelagem orientada a objetos. A UML apoia a criação de muitos e diferentes modelos de sistema.
Diagrama de casos de uso

Modelagem do sistema
Este documento apresentou a análise e o projeto do INEUC, Isso Não é um Calendário, utilizando a modelagem UML. Este sistema representa uma alternativa de criar hábitos simples no nosso dia a dia, tendo como objetivo poder acessar essa plataforma de qualquer lugar, oferecendo aos usuários uma experiência de simples navegação.
Ao longo deste documento, foram identificados e detalhados os requisitos funcionais e não funcionais do sistema, garantindo uma compreensão abrangente das funcionalidades necessárias.
Através da modelagem UML, foram criados diagramas de casos de uso, diagramas de classes, diagramas de sequência e diagramas de objetos, fornecendo uma representação visual das interações e estrutura do sistema. Esses diagramas ajudaram a compreender melhor o fluxo de trabalho, as responsabilidades das classes e as relações entre os componentes do sistema.
Com base na análise e no projeto apresentados neste documento, espera-se que o sistema atenda às expectativas dos usuários e proporcione benefícios significativos para uma melhor qualidade de vida dos usuários.
Apêndice
Este apêndice contém informações complementares relevantes do INEUC. Inclui detalhes técnicos, exemplos de interfaces de usuário e outros recursos úteis relacionados ao sistema.

Glossário de termos
INEUC, Isso Não é Um Calendário: O sistema desenvolvido para estimular a criação de hábitos e a manutenção desses hábitos nas pessoas.
Usuário: Uma pessoa que utiliza o INEUC para a criação de hábitos no seu dia a dia.
Registro de Usuário: O processo pelo qual um usuário fornece informações pessoais e cria uma conta no sistema.
Autenticação: O processo de verificar a identidade de um usuário através de suas credenciais (como e-mail e senha) para permitir o acesso ao sistema.
Criação de Hábitos: Permite que os usuários criem a quantidade de hábitos que achar necessário durante a sua semana.
Check In de Hábitos: As funcionalidades que permitem aos usuários visualizem os hábitos que eles criaram e façam o check-in diariamente daquela atividade realizada.
Interface de Usuário: A camada visual do sistema que permite aos usuários interagirem com as funcionalidades do sistema por meio de elementos como botões, campos de entrada e barra de informações.
Segurança: A proteção dos dados dos usuários, incluindo informações pessoais, como e-mail e senha.
Usabilidade: A facilidade de uso e a experiência do usuário ao interagir com o sistema, levando em consideração a intuição, a clareza e a eficiência das ações realizadas.
Manutenibilidade: A capacidade do sistema de ser facilmente mantido, atualizado e corrigido, levando em conta a modularidade, a documentação e a reutilização de código.

Lista de abreviações
UI - Interface do Usuário (User Interface)
UX - Experiência do Usuário (User Experience)
CRUD - Create, Read, Update, Delete (Criar, Ler, Atualizar, Excluir)
API - Interface de Programação de Aplicativos (Application Programming Interface)
SQL - Structured Query Language (Linguagem de Consulta Estruturada)
HTML - Hypertext Markup Language (Linguagem de Marcação de Hipertexto)
CSS - Cascading Style Sheets (Folhas de Estilo em Cascata)

Referências
MONITORIA DE ENGENHARIA DE SOFTWARE. Modelagem de Sistemas. Monitoria de Engenharia de Software, [S.l.], 10 out. 2015. Disponível em: https://monitoriadeengenhariadesoftware.wordpress.com/2015/10/10/modelagem-de-sistemas/. Acesso em: 10 de Jun de 2023.
JAVA. Sun Microsystems, 1995. Disponível em: https://www.java.com. Acesso em: 20 de Mai de 2023.
