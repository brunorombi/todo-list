# Todo List Application

Aplicação web para gerenciamento de tarefas, desenvolvida com JavaScript moderno, com foco em organização de código, manipulação de estado e aplicação de conceitos de programação orientada a objetos.

---

## Live Demo

A aplicação pode ser acessada em:
https://brunorombi.github.io/todo-list/

---

## Funcionalidades

* Criação, edição e remoção de tarefas
* Definição de descrição, prioridade e data de entrega
* Organização de tarefas por projetos
* Criação, edição e exclusão de projetos
* Interface dinâmica com atualização em tempo real
* Persistência de dados utilizando LocalStorage

---

## Implementação

O projeto foi estruturado com separação de responsabilidades:

* **Lógica de negócio**: gerenciamento de projetos e tarefas utilizando abordagem orientada a objetos
* **Manipulação de DOM**: renderização dinâmica e controle de eventos
* **Gerenciamento de estado**: controle de projeto atual e sincronização com a interface
* **Persistência**: armazenamento local dos dados no navegador

Também foram tratados aspectos como:

* Controle de eventos e propagação (event bubbling)
* Manipulação de datas e ajuste de timezone
* Atualização consistente da interface após operações

---

## Tecnologias

* JavaScript (ES6+)
* HTML5
* CSS3
* date-fns

---

## Estrutura

```id="8x8b6m"
src/
├── todo.js
├── dom.js
├── index.js
└── style.css
```

---

## Objetivo

Este projeto foi desenvolvido com o objetivo de consolidar conhecimentos em JavaScript, especialmente na organização de código, manipulação do DOM e aplicação prática de conceitos de orientação a objetos em um cenário real.

---

## Autor

Bruno Rombi
