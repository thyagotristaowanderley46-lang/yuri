# yuri
PROESP - Sistema de Avaliação Física

O PROESP (Programa de Esportes e Saúde) é um sistema de avaliação física que permite aos alunos realizar testes de antropometria e testes motores para analisar suas capacidades físicas. O sistema é estruturado para coletar dados sobre o aluno e gerar resultados personalizados para cada um.

Funcionalidades

O sistema é composto por várias etapas, cada uma com um conjunto específico de funcionalidades. As principais páginas e seus objetivos são:

1. index.html - Página Inicial

A página inicial apresenta a introdução ao sistema e oferece opções para iniciar uma nova avaliação ou consultar resultados já registrados.

Botões principais:

Iniciar Nova Avaliação: Redireciona para a página de identificação.

Ver Resultados: Exibe os resultados de avaliações anteriores.

2. identificacao.html - Identificação do Aluno

Nesta etapa, o aluno preenche seus dados pessoais, incluindo:

Nome

Idade

Sexo

Turma
Esses dados são armazenados no localStorage para persistência durante a avaliação.

3. antropometria.html - Medições Antropométricas

Nesta etapa, o aluno fornece suas medições corporais, que são usadas para calcular o Índice de Massa Corporal (IMC):

Peso

Altura

Envergadura
O IMC é calculado automaticamente ao preencher o peso e a altura.

4. motores.html - Testes Motores

Após as medições antropométricas, o aluno realiza os testes motores. As áreas testadas incluem:

Força: Medição de abdominais (repetições)

Velocidade: Corrida de 20 metros (tempo em segundos)

Flexibilidade: Teste de flexibilidade (distância alcançada em centímetros)

5. resultados.html - Resultados Finais

Após a conclusão da avaliação, os resultados de todas as etapas são apresentados, incluindo:

Dados pessoais

Medições antropométricas (peso, altura, IMC)

Resultados dos testes motores (abdominais, corrida, flexibilidade)

Estrutura dos Arquivos
1. HTML:

Cada página do sistema (identificação, antropometria, motores e resultados) é gerenciada por um arquivo HTML específico.

2. CSS (style.css):

O estilo visual do sistema é definido no arquivo style.css, que fornece um layout moderno e atraente, com um esquema de cores que combina tons de azul, roxo e cinza. A página se adapta a diferentes tamanhos de tela, oferecendo uma experiência de usuário fluida em dispositivos móveis e desktops.

3. JavaScript (script.js):

O comportamento dinâmico do sistema é controlado pelo script script.js. Ele gerencia a lógica de:

Cálculo do IMC.

Armazenamento e recuperação de dados do localStorage.

Navegação entre as páginas do sistema (por exemplo, avançar de uma etapa para outra).

Como Usar

Iniciar a Avaliação:

Acesse a página inicial (index.html) e clique no botão Iniciar Nova Avaliação.

Preencha os dados pessoais na página de identificação (identificacao.html).

Após a identificação, forneça as medições físicas na página de antropometria (antropomeria.html).

Complete os testes motores na página de testes motores (motores.html).

Visualize os resultados finais na página de resultados (resultados.html).

Visualizar Resultados:

Caso já tenha completado uma avaliação, você pode visualizar os resultados ao clicar no botão Ver Resultados na página inicial.

Funcionalidades Adicionais

Persistência de Dados:

O sistema utiliza o localStorage para salvar temporariamente os dados do aluno entre as etapas da avaliação.

Validação de Campos:

O sistema garante que todos os campos obrigatórios sejam preenchidos antes de avançar para a próxima etapa.

Cálculo Automático do IMC:

O IMC é calculado automaticamente assim que o aluno informa seu peso e altura. O sistema exibe o resultado e classifica o aluno de acordo com as faixas de IMC (Abaixo do peso, Peso normal, Sobrepeso, Obesidade).

Tecnologias Utilizadas

HTML5: Estruturação da página.

CSS3: Estilo e layout responsivo.

JavaScript: Lógica de interação e manipulação de dados.

Personalizações Futuras

Este sistema pode ser expandido com novas funcionalidades, como:

Inclusão de novos tipos de testes (como testes de resistência ou agilidade).

Geração de relatórios em PDF.

Integração com banco de dados para armazenamento permanente dos resultados.

Licença

Este projeto está licenciado sob a Licença MIT
.
