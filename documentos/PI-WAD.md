# Web Application Document - Projeto Individual - Módulo 2 - Inteli

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

<div align="center">
    <small><strong style="font-size: 12px;">Persona (Figura 1);</strong></small><br>
<img src="assets/PERSONA.jpg">
 <small style="margin-top: 4px; font-size: 10px;">Fonte: Material produzido pela autora (2025)</small>
</div>

### 2.2. User Stories (Semana 01)

| Identificação     | US01 - Juliana Fernades                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| User Story        | Como uma estudante de engenharia, quero ter a minha agenda organizada, de acordo com os níveis de dificuldade de cada tarefa, para que em dias que eu não esteja me sentindo bem, eu consiga realizar várias tarefas pequenas/fáceis, aumentando o meu senso de realização, e me motivando para estudar para as matérias que não gosto tanto.                                                                                                                                                                                                                                                    |
| Critérios Investe | **Independente:** organizar a agenda por nível de dificuldade é uma funcionalidade isolada.<br> **Negociável:** os níveis de dificuldade podem ser ajustados de acordo com a necessidade do cliente.<br>**Valiosa:** cria um equilíbrio entre produtividade e saúde mental.<br>**Estimável:** é possível estimar facilmente o tempo que leva para a criação desses filtros.<br>**Pequena:** organizar os filtros é uma tarefa pequena, que pode ser concluída em uma sprint.<br>**Testável:** testes de usabilidade podem ser feitos para testar se a organização por filtos realmente funciona. |

| Identificação | US02 - Renato Lima                                                                                                                                                                |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User Story    | Como um fundador de startup, quero receber relatórios automáticos semanais sobre a minha produtividade, para que eu consiga garantir que os projetos avançem conforme o esperado. |

| Identificação | US03 - Rafaela Gomes                                                                                                                                                                                                                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User Story    | Como uma profissional que lida com ansiedade, quero ter uma maneira simples e intuitiva de organizar as minhas tarefas, para que eu não tenha mais um motivo para ficar ansiosa, e assim, consiga ver claramente o meu progresso semanal, com mensagens motivacionais, caso eu decaia em alguma semana. |

---

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados (Semana 3)

<div align="center">
    <small><strong style="font-size: 12px;">Diagrama do modelo inicial do banco de dados (Figura 2);</strong></small><br>
<img src="/assets/diagrama_modelo_bancodedados.png">
 <small style="margin-top: 4px; font-size: 10px;">Fonte: Material produzido pela autora (2025)</small>
</div>

O diagrama de modelo relacional do banco de dados é utilizado para ajudar a identificar como a informação flui em seu sistema, através do estabelecimento das relações entre os elementos do banco de dados. Assim, através dele é possível representar visualmente as relações entre as entidades (tabelas), e os seus atributos (colunas).
Assim, para entender melhor o motivo das minhas escolhas do meu banco de dados, segue a estrutura de maneira mais detalhada:

**ENTIDADE: LOGIN**

Objetivo: Armazenar os dados do usuário no sistema

Atributos:

- id: identificador único do usuário, que usa o SERIAL;
- nome: nome do usuário, utiliza o o tipo VARCHAR;
- e-mail: e-mail utilizado para realizar o login;
- senha: senha escolhida pelo usuário para acessar o sistema;

Relações:

- id_usuario na tabela questionario é uma foreign key que referencia o campo id da tabela login. Essa relação 1:N significa que um usuário pode ter acesso a múltiplos questionários (um por dia), mas cada questionário pertence a apenas um usuário.
- id_login na tabela atividades é uma foreign key que referencia o campo id da tabela login. É uma relação 1:N, pois um usuário pode criar diversas atividades, enquanto cada atividade, pertence a um único usuário.

**ENTIDADE: QUESTIONARIO**

Objetivo: armazenar o que o usuário responder em cada questionário.

Atributos:

- id: identificador único do questionário, usa o SERIAL;
- nome: título do questionário, usa o VARCHAR;
- data: data do preenchimento, usa o TIMESTAMP;
- id_usuario: foreign key para o login, usa o INT;
- id_pergunta: foreign key para a entidade das perguntas, usa o INT;

Relações:

- id_usuario na tabela questionario é uma foreign key que referencia o campo id da tabela login. Essa relação N:1 significa que um usuário pode ter acesso a múltiplos questionários (um por dia), mas cada questionário pertence a apenas um usuário.
- id_pergunta na tabela questionario é uma foreign key que referencia o campo id da entidade perguntas. É uma relação 1:N, porque em um questionário aparece mais de uma pergunta, mas cada pergunta está ligada a apenas um questionário (diário).

**ENTIDADE: PERGUNTAS**

Objetivo: armazenar as perguntas usadas no questionário.

Atributos:

- id: identificador único das perguntas, usa o tipo SERIAL;
- texto_perguntas: texto das perguntas, por exemplo: "De 1 a 5, sendo 1 exausto e 5 muito disposto, como você se sente para realizar as suas tarefas hoje?", usa o tipo TEXT.

Relações:

- id_pergunta na tabela resposta é uma foreign key que referencia o campo id da tabela perguntas. É uma relação 1:1, pois cada pergunta tem apenas uma resposta.
- id_pergunta na tabela questionario é uma foreign key que referencia o campo id da entidade perguntas. É uma relação N:1, porque em um questionário aparece mais de uma pergunta, mas cada pergunta está ligada a apenas um questionário (diário).

**ENTIDADE: RESPOSTA**

Objetivo: armazenar a resposta (avaliação) do usuário às perguntas.

Atributos:

- id: identificador único da resposta, usa o SERIAL;
- id_pergunta: foreign key para a entidade perguntas, usa o INT;
- avaliacao: valor da resposta/rate, seria o 1 ao 5, do exemplo citado anteriormente, usa o INT.

Relações:

- id_pergunta na tabela resposta é uma foreign key que referencia o campo id da tabela perguntas. É uma relação 1:1, pois cada pergunta tem apenas uma resposta.

**ENTIDADE: ATIVIDADES**

Objetivo: armazenar as tarefas que o usuário precisa realizar na semana.

Atributos:

- id: identificador único das atividades, usa o SERIAL;
- titulo: título da tarefa, utiliza o VARCHAR;
- descricao: descrição detalhada da tarefa, utiliza o VARCHAR;
- nivel_dificuldade: o quanto a pessoa considera difícil realizar aquela tarefa, usa o INT;
- duracao: tempo estimado para concluir a tarefa, usa o INT;
- prazo: data limite para entregar aquela tarefa, utiliza o DATE;
- id_login: foreign key para a tabela login, usa o INT.
- status: se a atividade está como pendente, em desenvolvimento ou concluída, foi utilizado o BOOLEAN.

Relações:

- id_login na tabela atividades é uma foreign key que referencia o campo id da tabela login. É uma relação N:1, pois um usuário pode criar diversas atividades, enquanto cada atividade, pertence a um único usuário.

**LEGENDA:**

- SERIAL: para auto incremento dos números inteiros;
- INT: números inteiros;
- VARCHAR(): armazena um texto com limite de caracteres, que é definido dentro do parentêses;
- TEXT: armazena um texto, sem limite de caracteres
- TIMESTAMP: armazena a data e a hora;
- DATE: armazena a data.
- BOOLEAN: armazena valores binários.

O arquivo do modelo físico do banco de dados se encontra <a href="/scripts/init.sql"> aqui! </a>

### 3.1.1 BD e Models (Semana 5)

Models são responsáveis por representar o negócio e por manipular os dados da aplicação, sendo assim, são eles que tem acesso direto ao banco de dados.

No caso da minha aplicação web, temos os seguintes models:

1. LOGIN/USERS: representa os usuários cadastrados no sistema. Possui como atributos:

- id: identificador único do usuário
- nome: nome do usuário
- e-mail: endereço de e-mail
- senha: senha de acesso 

2. QUESTIONÁRIO: modela os questionários. Tem como atributos:
- id: identificador do questionário
- nome: título do questionário
- data: data de aplicação
- id_usuario: referência ao usuário que respondeu
- id_pergunta: referência à pergunta associada

3. PERGUNTAS: armazena as perguntas que compõem os questionários aplicados aos usuários, no início de cada dia. Seus atributos são: 
- id: identificador único da pergunta
- texto_perguntas: conteúdo da pergunta

4. RESPOSTA: armazena as respostas fornecidas pelos usuários aos questionários. Seus atributos são:
- id: identificador da resposta
- id_pergunta: referência à pergunta respondida
- avaliacao: rate atribuído na resposta

5. ATIVIDADES: representa atividades que devem ser realizadas pelo usuário. Possui como atributos:
- id: identificador da atividade
- título: título da atividade
- descrição: detalhes da tarefa
- nivel_dificuldade: classificação de dificuldade
- duração: tempo estimado de execução
- prazo: data limite para conclusão
- id_login: referência ao usuário responsável
- status: estado atual da atividade (ex: pendente, concluída)


Para demonstrar a estrutura geral que utilizei para implementar o model no código, trouxe a da tela de login como exemplo. Segue o código:

```js 
const db = require('../config/db');

class Login {
  static async getAllUsers() {
    const result = await db.query('SELECT * FROM login');
    return result.rows;
  }

  static async getUserById(id) {
    const result = await db.query('SELECT * FROM login WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async createUser(data) {
    const result = await db.query(
      'INSERT INTO login (nome, email, senha) VALUES ($1, $2, $3) RETURNING *',
      [data.nome, data.email, data.senha]
    );
    return result.rows[0];
  }

  static async updateUser(id, data) {
    const result = await db.query(
      'UPDATE login SET nome = $1, email = $2, senha = $3 WHERE id = $4 RETURNING *',
      [data.nome, data.email, data.senha, id]
    );
    return result.rows[0];
  }

  static async deleteUser(id) {
    const result = await db.query('DELETE FROM login WHERE id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }
}

module.exports = Login;
```

### 3.2. Arquitetura (Semana 5)

A arquitetura MVC é uma abordagem que organiza a aplicação web em três componentes principais, o "model", o "view" e o "controller". Cada componente tem sua respectiva função, sendo assim, o "model" é o que se conecta diretamente com o banco de dados, através de comandos SQL (no caso do meu projeto). Já o "view" é o frontend da aplicação, o que significa que é o responsável pela interface com o usuário. O "controller" é justamente o que intermedia ambos, recebendo as requisições HTTPS e respondendo de forma adequada com os resultados, ao manipular o banco de dados. Para entender melhor como foi estruturada a arquitetura MVC do meu projeto, eu desenvolvi o seguinte diagrama: 

<div align="center">
    <small><strong style="font-size: 12px;">Diagrama de arquitetura MVC (Figura 10);</strong></small><br>
<img src="/assets/arquitetura_MVC.png">
 <small style="margin-top: 4px; font-size: 10px;">Fonte: Material produzido pela autora (2025)</small>
</div>

Através do diagrama, é possível perceber que foram criados controllers dedicados a login, questionários, perguntas, respostas e atividades. Cada controller gerencia as regras de negócio e interage com os models, que representam as tabelas do banco de dados PostgreSQL. 

As rotas, evidenciadas pelas setas, indicam o fluxo de requisições e respostas entre os componentes,conectando o frontend com o backend, por meio de endpoints REST. 

O backend é desenvolvido em Node.js com suporte a frameworks como Express, garantindo uma integração eficiente com o banco de dados. 

No frontend, as views são renderizadas nos navegadores, permitindo que o usuário visualize e interaja com os dados, como responder questionários, acompanhar atividades e realizar login no sistema. Apesar disso, elas estão como "próximos passos", pois ainda serão desenvolvidas no decorrer do projeto.


### 3.3. Wireframes (Semana 03)

Desenvolvi wireframes de baixa fidelidade, para começar a pensar no design que terá a interface em contato com o usuário. Assim, para garantir coesão com o público-alvo, baseei cada tela em uma user story, citadas anteriormente.

<div align="center">
    <small><strong style="font-size: 12px;"> Wireframe de baixa fidelidade (Figura 3);</strong></small><br>
<img src="/assets/wireframe.png">
 <small style="margin-top: 4px; font-size: 10px;">Fonte: Material produzido pela autora (2025)</small>
</div>

**Primeira tela:**
Tela de login, para o usuário inserir os seus dados.

**Segunda tela:**
Quando a pessoa entra na aplicação web pela primeira vez no dia, a primeira tela que aparece é um questionário que busca entender como a pessoa está se sentindo naquele dia. Essa tela se conecta diretamente com a User Story 1, da Juliana Fernandes, que gostaria que o seu calendário se conectasse com a sua saúde mental, para assim ter uma vida mais equilibrada.

**Terceira tela:**
Após responder o questionário, todas as vezes que o usuário entrar no Inflow, irá direto para a segunda tela, a qual contém as tasks, divididas por níveis de dificuldades, o que torna possível estabelecer quais atividades fazem mais sentido para ele naquele dia, de acordo com o seu estado mental. Essa tela se relaciona com a User Story 3, da Rafaela Gomes, que busca uma interface simples e intuitiva para organizar as suas tarefas.

**Quarta tela:**
No fim da semana, aparece a terceira tela, que é considerada um diferencial pelo Renato Lima, da User Story 2. Ele gostaria de ter acesso aos dados de produtividade dele, mostrando quantas tarefas foram concluídas, quantas estão em progesso e quantas ficaram para a próxima semana. Assim, essas informações aparecem através de um gráfico e detalhes sobre, na lateral.

Segue o link para acesso aos wireframes: https://www.figma.com/design/xQW03eHXf4bps4OHpUcflh/Untitled?node-id=0-1&t=89IGHn78SldBtpyX-1

### 3.4. Guia de estilos (Semana 05)

O guia de estilos é uma coleção de elementos, regras e padrões que orienta a criação e a manutenção de interfaces visuais consistentes no desenvolvimento de produtos digitais. Entendendo sua importância para uma melhor organização e coerência visual do meu protótipo, desenvolvi o seguinte guia de estilos: 

<div align="center">
    <small><strong style="font-size: 12px;"> Mini Guia de Estilos (Figura 4);</strong></small><br>
<img src="/assets/guia_de_estilos.png">
 <small style="margin-top: 4px; font-size: 10px;">Fonte: Material produzido pela autora (2025)</small>
</div>

Este aborda aspectos como tipografia, cores e   botões. Na tipografia, utilizei a fonte Poppins em todo o projeto, variando apenas em tamanhos e espessura, mantendo assim, uma consistência visual. No quesito das cores, a primeira coluna refere-se as cores mais neutras, que utilizei nos fundos e nas letras, já a segunda coluna está relacionada aos tons de azul utilizados, sendo estes responsáveis pela identidade visual do Inflow, além disso, na terceira coluna estão as cores utilizadas nas estrelas dos livros.

Ademais, também adicionei os componentes, que são a logo do Inflow e os livros que representam o nível de dificuldade das atividades, através da cor e da quantidade de estrelas. Em seguida, apresentei os botões de entrar, de voltar e de concluído, além dos que possuem a funcionalidade de abrir as tarefas e o que direciona aos dados de produtividade.

### 3.5. Protótipo de alta fidelidade (Semana 05)


Para garantir que a aplicação web esteja funcional e esteticamente bonita, desenvolvi o protótipo de alta fidelidade, simulando assim, a experiência do usuário antes de fazer a programação. Nele inclui cores, tipografia, componentes e botões, tornando-o mais próximo da realidade. Segue imagens:

<div align="center">
    <small><strong style="font-size: 12px;">Tela de login (Figura 5);</strong></small><br>
<img src="/assets/tela1_prototipo.png">
 <small style="margin-top: 4px; font-size: 10px;">Fonte: Material produzido pela autora (2025)</small>
</div>

A tela de login serve para que o usuário tenha maior segurança ao utilizar essa aplicação. Assim, precisará adentrar os dados: nome, e-mail e senha. Além disso, para passar para a próxima tela, deverá apertar o botão "entrar". <br>


<div align="center">
    <small><strong style="font-size: 12px;">Questionário (Figura 6);</strong></small><br>
<img src="/assets/tela2_prototipo.png">
 <small style="margin-top: 4px; font-size: 10px;">Fonte: Material produzido pela autora (2025)</small>
</div>
O questionário é utilizado para entender, através de três perguntas, o quanto a pessoa consegue se dispor para realizar as suas tarefas naquele dia. Ao finalizar, bastará clicar em "concluído" para seguir para a próxima tela.


<div align="center">
    <small><strong style="font-size: 12px;">Atividades (Figura 7);</strong></small><br>
<img src="/assets/tela3_prototipo.png">
 <small style="margin-top: 4px; font-size: 10px;">Fonte: Material produzido pela autora (2025)</small>
</div>

Essa tela foi alterada em comparação aos wireframes. Para uma organização visual mais clara, optei por utilizar os livros como demonstrativos do nível de dificuldade da tarefa, ao invés de separar isso apenas no "a fazer". Sendo assim, os livros de capa azul clara e apenas uma estrela, representam as tarefas de nível fácil. A dificuldade aumenta conforme a cor da capa se intensifica e o número de estrelas no livro cresce. 

Ainda nas tarefas, adicionei a opção de colocar um título para ela e a duração estimada, para que a pessoa consiga se orientar melhor em qual tarefa escolher, sem necessariamente ter que abri-la para saber do que se trata.

Além disso, também adicionei um botão no canto superior direito, que leva a tela dos dados de produtividade da semana.

<div align="center">
    <small><strong style="font-size: 12px;">Atividade com descrição (Figura 8);</strong></small><br>
<img src="/assets/tela4_prototipo.png">
 <small style="margin-top: 4px; font-size: 10px;">Fonte: Material produzido pela autora (2025)</small>
</div>
Ao apertar em qualquer tarefa na tela anterior, a pessoa será direcionada a essa tela, que se diferencia apenas pela cor e pelo livro, dependendo do nível de dificuldade. Aqui, o usuário poderá editar a tarefa e adicionar uma descrição. Essa tela não existia nos wireframes, e foi feita para que a edição das tasks se tornasse mais fácil.

Além disso, para retornar a tela de atividades, basta apertar o botão "voltar".


<div align="center">
    <small><strong style="font-size: 12px;">Dados de produtividade (Figura 9);</strong></small><br>
<img src="/assets/tela5_prototipo.png">
 <small style="margin-top: 4px; font-size: 10px;">Fonte: Material produzido pela autora (2025)</small>
</div>
Essa é a tela de dados de produtividade, onde o usuário poderá ver qual a porcentagem de tarefas de cada nível de dificuldade, que realizou durante a semana. 

Por motivos de complexidade, resolvi realizar algumas alterações em relação ao wireframe e as user stories. Quanto ao wireframe, optei por manter apenas um gráfico, de maneira a tornar o processo de prgramação mais simples. Já em relação a user story, decidi tirar a frase motivacional, por ser algo que não agrega tanto valor, em comparação com suas outras funcionalidades, e que poderia não sair tão bom como o esperado, em razão do tempo e do momento que estou (ainda aprendendo o básico para fazer uma aplicação web).

Segue o link para acesso ao protótipo: https://www.figma.com/design/xQW03eHXf4bps4OHpUcflh/pond-UX---projeto-individual?node-id=0-1&t=pAB3D8Jcc6K01vmW-1 


### 3.6. WebAPI e endpoints (Semana 05)


Uma WebAPI é uma API, isto é, uma interface que permite que diferentes softwares troquem informações, porém acessada pela internet. Assim, os endpoints são  responsáveis por executar funções específicas da WebAPI, através de URLs, que definem os caminhos específicos a serem utilizados.

Para analisar os endpoints da minha aplicação, organizei por entidades e utilizei o padrão REST:

**LOGIN (usuários):**
1) GET /users →  retorna todos os usuários cadastrados.

2) GET /users/:id → retorna um usuário específico, utilizando como parâmetro o id do usuário.

3) POST /users → cadastra um novo usuário, utilizando um corpo JSON.

4) PUT /users/:id → atualiza os dados de um usuário, utilizando o id do usuário como parâmetro.

5) DELETE /users/:id → deleta um usuário pelo id.


**ATIVIDADES:**
1) GET /atividades → Retorna todas as atividades registradas no sistema.

2) GET /atividades/:id → retorna os dados de uma atividade específica, com base no id.

3) GET /atividades/toDo → retorna apenas as atividades com status "a fazer".

4) GET /atividades/done → retorna apenas as atividades concluídas.

5) POST /atividades → cria uma nova atividade, utilizando um corpo JSON.

6) PUT /atividades/:id → atualiza uma atividade específica, utilizando o id da atividade como parâmetro.

7) DELETE /atividades/:id → deleta uma atividade pelo id.

**QUESTIONÁRIO:**
1) GET /questionario → retorna todos os questionários.

2) GET /questionario/:id → retorna um questionário específico, utilizando o id como parâmetro.

3) POST /questionario → cria um novo questionário, utilizando um corpo JSON.

**PERGUNTAS:**
1) GET /perguntas → retorna todas as perguntas cadastradas.

2) GET /perguntas/:id → retorna uma pergunta específica por id.

3) POST /perguntas → cria uma nova pergunta.

**RESPOSTA:**
1) GET /resposta → retorna todas as respostas.

2) GET /resposta/:id → retorna uma resposta específica por id.

3) POST /resposta → cria uma nova resposta, utilizando um corpo JSON.

4) PUT /resposta/:id → atualiza uma resposta existente, utilizando o id como parâmetro.


### 3.7 Interface e Navegação (Semana 07)


O frontend é a parte do desenvolvimento web responsável pela interface com a qual o usuário interage diretamente. Ele envolve a criação e o design de páginas e aplicações web utilizando tecnologias como HTML (linguagem de marcação), CSS (responsável pela estilização) e JavaScript (linguagem de programação), garantindo que o conteúdo seja apresentado de forma clara, funcional e visualmente atraente. 

Nessa fase do projeto, o frontend foi integrado ao backend para permitir a comunicação entre a interface do usuário e o servidor, possibilitando o envio e recebimento de dados de forma dinâmica e eficiente, melhorando a experiência geral do usuário.

<div align="center">
    <small><strong style="font-size: 12px;">Tela de Login (Figura 10);</strong></small><br>
<img src="/assets/tela1_frontend.png">
 <small style="margin-top: 4px; font-size: 10px;">Fonte: Material produzido pela autora (2025)</small>
</div>

A primeira tela que o usuário terá acesso é a tela de login, alcançada pelo endpoint /users/login. Nela, o usuário consegue adicionar o seu nome, e-mail e senha para acessar a aplicação.Caso estes não estejam cadastrados no banco de dados, o usuário receberá a mensagem de "credenciais inválidas".

Para testar o funcionamento, recomendo utilizar o nome: Alice, o e-mail: teste@email.com e a senha: 1234.

<div align="center">
    <small><strong style="font-size: 12px;">Tela de visualização das atividades (Figura 11);</strong></small><br>
<img src="/assets/tela2_frontend.png">
 <small style="margin-top: 4px; font-size: 10px;">Fonte: Material produzido pela autora (2025)</small>
</div>

Assim que acessar, o usuário entrará na tela de visualização das atividades. Aqui, poderá clicar em cada uma delas, para abrir e ver a descrição da tarefa.

Nessa tela, precisei realizar uma mudança quando comparada ao protótipo. Retirei o "fazendo", para que facilitasse o desenvolvimento do código, podendo assim, utilizar uma variável do tipo booleano, como mostrado no seguinte trecho de código, que implementei no arquivo "atividades.ejs":
```js
        if (tarefa.is_finished == true) {
          sectionFeito.append(card);
        } else {
          sectionAFazer.append(card);
        }
```
Dessa forma, foi possível realizar a separação na tela de quais atividades vão para "a fazer" e quais vão para "feito".

<div align="center">
    <small><strong style="font-size: 12px;">Tela da atividade de nível fácil (Figura 12);</strong></small><br>
<img src="/assets/nivelfacil_frontend.png">
 <small style="margin-top: 4px; font-size: 10px;">Fonte: Material produzido pela autora (2025)</small>
</div>

<div align="center">
    <small><strong style="font-size: 12px;">Tela da atividade de nível médio (Figura 13);</strong></small><br>
<img src="/assets/nivelmedio_frontend.png">
 <small style="margin-top: 4px; font-size: 10px;">Fonte: Material produzido pela autora (2025)</small>
</div>

<div align="center">
    <small><strong style="font-size: 12px;">Tela da atividade de nível difícil (Figura 14);</strong></small><br>
<img src="/assets/niveldificil_frontend.png">
 <small style="margin-top: 4px; font-size: 10px;">Fonte: Material produzido pela autora (2025)</small>
</div>

Para construir as últimas três telas, utilizei uma lógica baseada nas estruturas condicionais if, else if e else, junto com a manipulação direta dos elementos HTML usando o método getElementById.

Ao carregar a página, o código captura o id da tarefa a partir da URL, que está no formato /atividades/{id}. Em seguida, ele faz uma requisição assíncrona ao backend para obter os dados da atividade correspondente.

Com os dados recebidos, o conteúdo da tela é atualizado, preenchendo o título e a descrição da tarefa. Além disso, a partir do valor do campo nivel_dificuldade, o código altera dinamicamente o estilo do cartão (card) e a imagem exibida:

Se o nível for 1 (fácil), aplica uma cor de fundo clara e exibe o ícone de livro fácil.

Se for 2 (médio), usa uma cor intermediária e o ícone correspondente.

Para outros valores (difícil), aplica uma cor escura e o ícone adequado.

Por fim, o botão “Voltar” é configurado para redirecionar o usuário de volta para a página principal de atividades ao ser clicado.

Essa lógica garante que cada tarefa seja exibida com uma aparência visual coerente com sua dificuldade, tornando a experiência mais intuitiva para o usuário.


Além disso, as telas de questionário e de dados de produtividade foram retiradas do escopo atual do projeto. Apesar de ter desenvolvido parcialmente o código HTML e CSS dessas telas, o tempo disponível não foi suficiente para realizar uma integração adequada e garantir a melhor experiência possível. Por isso, essas funcionalidades ficaram definidas como próximos passos para futuras implementações e aprimoramentos.


## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

Para mostrar o resultado final da minha aplicação web, fiz um vídeo demonstrativo, no qual é possível entender melhor o fluxo de telas e como funciona a minha aplicação web. Segue o link: https://youtu.be/BUwJ-DZBt-c 

Como mostrado no vídeo, a aplicação passa pela tela de login, pela tela geral das atividades e pelas telas das atividades com descrição, sendo que essas são separadas por cores, que definem o nível de dificuldade de cada uma.

Para o desenvolvimento do Inflow, foi adotada a arquitetura MVC, o que proporcionou uma melhor organização do código, com a separação entre backend e frontend, facilitando a manutenção e a compreensão da integração entre as partes.


### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

O Inflow apresenta como pontos fortes a facilidade de manuseio e entendimento da aplicação, tornando a utilização desta mais fácil e em concordância às necessidades do usuário.

Para melhorias futuras, gostaria de adicionar as telas de questionário e de dados de prdoutividade na minha integração do backend com o frontend, como já citado anteriormente na seção 3.7.

Além disso, gostaria também de adicionar os botões de "+" na tela de atividades, com o objetivo de conseguir inserir novas atividades através da própria aplicação e não apenas por meio do banco de dados. 

Apesar de ainda ter futuros passos importantíssimos para a melhor qualidade da minha aplicação, ela já se mostra integrada em certo nível e funcional no básico que deveria fazer.

## <a name="c5"></a>5. Referências

Algumas referências utilizadas para estudos ao longo do projeto, foram: 

https://medium.com/@celionormando/arquitetura-mvc-e-princ%C3%ADpios-de-projeto-3d0b278ef910 

https://www.designerd.com.br/tutorial-como-usar-o-figma/


