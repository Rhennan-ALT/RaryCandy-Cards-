# 🃏 RareCandy Cards - TCG Manager

Este projeto nasceu como uma avaliação acadêmica focada em persistência de dados com NoSQL e desenvolvimento de APIs. Após a entrega, decidi expandi-lo para um estudo de caso Full Stack, implementando uma interface visual e aprimorando a arquitetura do sistema.

## 🛠️ Tecnologias Utilizadas

* **Backend:** FastAPI (Python) - Escolhido pela alta performance e documentação automática (Swagger).
* **Banco de Dados:** MongoDB - Utilizado para armazenamento flexível de documentos (cards).
* **Frontend:** HTML5, Tailwind CSS e JavaScript Vanilla.
* **Infraestrutura:** Docker & Docker Compose para orquestração de containers.

## 🏗️ Arquitetura e Organização
O backend segue padrões de design para garantir manutenibilidade:
* **Routers:** Definição dos endpoints da API.
* **Services:** Lógica de negócio e regras da aplicação.
* **Repositories:** Abstração da camada de dados (Comunicação direta com o MongoDB).
* **Schemas:** Validação de dados e serialização com Pydantic.

## 📈 Evolução do Estudo
Atualmente, o projeto está em fase de implementação da camada de Frontend para permitir uma interação visual completa com a coleção de cartas, integrando as rotas de busca e listagem criadas no backend.

---
*Status: Em constante evolução para fins de estudo.*