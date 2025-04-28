# Web Application Document - Projeto Individual - Módulo 2 - Inteli

**_Os trechos em itálico servem apenas como guia para o preenchimento da seção. Por esse motivo, não devem fazer parte da documentação final._**

## Inflow

#### Alice Devens Carvalho

## Sumário

1. [Introdução](#c1)
2. [Visão Geral da Aplicação Web](#c2)
3. [Projeto Técnico da Aplicação Web](#c3)
4. [Desenvolvimento da Aplicação Web](#c4)
5. [Referências](#c5)

<br>

## <a name="c1"></a>1. Introdução (Semana 01)

O Inflow, é um sistema web, que tem como objetivo ser um gerenciador de tarefas para organização e produtividade, no qual se preocupa não apenas com a organização das tarefas, mas também com o estado mental da pessoa naquele dia. Assim, ao usuário entrar na aplicação, ele terá que responder um mini questionário sobre como se sente naquele dia, e de acordo com isso, as suas atividades do dia serão adaptadas, de modo que, em dias que a pessoa não esteja tão bem, tarefas mais fáceis sejam atribuídas, e em dias que a pessoa se sinta mais disposta, tarefas mais complicadas/demoradas, sejam feitas. Dessa forma, o intuito dessa aplicação é garantir maior produtividade, porém alinhada com o bem estar mental do usuário.
Além disso, no final de cada semana serão fornecidos dados de produtividade e mensagens motivacionais, que possuam relação com o desenvolvimento da pessoa na semana anterior, e que tentem fazer com que ela se sinta mais encorajada de melhorar cada vez mais nas próximas semanas, ou pelo menos para que mantenha o ritmo.
Para que tudo isso funcione de maneira eficaz, no início da semana o usuário terá que colocar as suas tarefas, com os seus respectivos prazos, níveis de dificuldade e tempo de duração. Com isso, quando a pessoa não se sentir disposta, a aplicação web será capaz de escolher tarefas com níveis de dificuldade e tempo de duração menores, e vice versa.
Portanto, esse sistema web busca gerenciar tarefas de maneira eficaz, unindo produtividade e saúde mental.

---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas (Semana 01)

Personas são personagens fictícios criados com o intuito de representar o cliente ideal para o negócio. Diferentemente do público-alvo, a persona apresenta características específicas e detalhadas, que ajudam a direcionar melhor tanto o desenvolivmento do produto, quanto as campanhas de marketing. Pensando nisso e objetivando uma solução acurada, criei a Juliana Fernandes, que seria a cliente ideal para o Inflow. A seguir, uma imagem que detalha o perfil da Juliana:

<img src="assets/PERSONA.jpg">

### 2.2. User Stories (Semana 01)

| Identificação     | US01 - Juliana Fernades                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| User Story        | Como uma estudante de engenharia, quero ter a minha agenda organizada, de acordo com os níveis de dificuldade de cada tarefa, para que em dias que eu não esteja me sentindo bem, eu consiga realizar várias tarefas pequenas/fáceis, aumentando o meu senso de realização, e me motivando para estudar para as matérias que não gosto tanto.                                                                                                                                                                                                                            |
| Critérios Investe | **Independente:** organizar a agenda por nível de dificuldade é uma funcionalidade isolada.<br> **Negociável:** os níveis de dificuldade podem ser ajustados de acordo com a necessidade do cliente.<br>**Valiosa:** cria um equilíbrio entre produtividade e saúde mental.<br>**Estimável:** é possível estimar facilmente o tempo que leva para a criação desses filtros.<br>**Pequena:** organizar os filtros é uma tarefa pequena, que pode ser concluída em uma sprint.<br>**Testável:** testes de usabilidade podem ser feitos para testar se a organização por filtos realmente funciona. |

Identificação | US02 - Renato Lima |
| --- | --- |
User Story | Como um fundador de startup, quero receber relatórios automáticos semanais sobre a minha produtividade, para que eu consiga garantir que os projetos avançem conforme o esperado. |

Identificação | US03 - Rafaela Gomes |
| --- | --- |
User Story | Como uma profissional que lida com ansiedade, quero ter uma maneira simples e intuitiva de organizar as minhas tarefas, para que eu não tenha mais um motivo para ficar ansiosa, e assim, consiga ver claramente o meu progresso semanal, com mensagens motivacionais, caso eu decaia em alguma semana. |

---

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados (Semana 3)

_Posicione aqui os diagramas de modelos relacionais do seu banco de dados, apresentando todos os esquemas de tabelas e suas relações. Utilize texto para complementar suas explicações, se necessário._

_Posicione também o modelo físico com o Schema do BD (arquivo .sql)_

### 3.1.1 BD e Models (Semana 5)

_Descreva aqui os Models implementados no sistema web_

### 3.2. Arquitetura (Semana 5)

_Posicione aqui o diagrama de arquitetura da sua solução de aplicação web. Atualize sempre que necessário._

**Instruções para criação do diagrama de arquitetura**

- **Model**: A camada que lida com a lógica de negócios e interage com o banco de dados.
- **View**: A camada responsável pela interface de usuário.
- **Controller**: A camada que recebe as requisições, processa as ações e atualiza o modelo e a visualização.

_Adicione as setas e explicações sobre como os dados fluem entre o Model, Controller e View._

### 3.3. Wireframes (Semana 03)

_Posicione aqui as imagens do wireframe construído para sua solução e, opcionalmente, o link para acesso (mantenha o link sempre público para visualização)._

### 3.4. Guia de estilos (Semana 05)

_Descreva aqui orientações gerais para o leitor sobre como utilizar os componentes do guia de estilos de sua solução._

### 3.5. Protótipo de alta fidelidade (Semana 05)

_Posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização)._

### 3.6. WebAPI e endpoints (Semana 05)

_Utilize um link para outra página de documentação contendo a descrição completa de cada endpoint. Ou descreva aqui cada endpoint criado para seu sistema._

### 3.7 Interface e Navegação (Semana 07)

_Descreva e ilustre aqui o desenvolvimento do frontend do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar._

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

_VIDEO: Insira o link do vídeo demonstrativo nesta seção_
_Descreva e ilustre aqui o desenvolvimento do sistema web completo, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar._

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

_Indique pontos fortes e pontos a melhorar de maneira geral._
_Relacione também quaisquer outras ideias que você tenha para melhorias futuras._

## <a name="c5"></a>5. Referências

_Incluir as principais referências de seu projeto, para que seu parceiro possa consultar caso ele se interessar em aprofundar. Um exemplo de referência de livro e de site:_<br>

---

---
