# 📊 Sistema de Cadastro de Vendedores 

**Vendas360** é uma aplicação web full-stack que permite o cadastro, gerenciamento e análise de dados de vendedores. O sistema oferece funcionalidades de CRUD (Create, Read, Update, Delete) para vendedores e apresenta dashboards com gráficos interativos para análise de dados.

## 👀 Visão do projeto
### Home
<img width="1917" height="802" alt="image" src="https://github.com/user-attachments/assets/2967c6a7-8c2a-4658-9a2f-17ed27acc194" />

### Vendedores
<img width="1918" height="917" alt="image" src="https://github.com/user-attachments/assets/b1302a72-1d0d-446e-9d86-d72c47ad8e1f" />

## 🏗️ Arquitetura do Sistema

### Backend (Spring Boot)
- **Framework**: Spring Boot 3.5.6
- **Java**: 17
- **Banco de Dados**: PostgreSQL 42.7.7
- **ORM**: JPA/Hibernate
- **Validação**: Bean Validation
- **API**: RESTful

### Frontend (Angular)
- **Framework**: Angular 14.1.0
- **UI Framework**: Bootstrap 5.3.8
- **Ícones**: Bootstrap Icons
- **Gráficos**: Chart.js 4.5.1
- **Máscaras**: ngx-mask

## 📋 Funcionalidades

### 🔧 Backend
- **API REST** completa para gerenciamento de vendedores
- **CRUD** completo (Create, Read, Update, Delete)
- **Validação** de dados com Bean Validation
- **Tratamento de exceções** centralizado
- **CORS** configurado para comunicação com frontend
- **Banco PostgreSQL** para armazenamento dos dados

### 🎨 Frontend
- **Dashboard** com gráficos interativos
- **Cadastro de vendedores** com formulário validado
- **Listagem** de vendedores em tabela
- **Edição e exclusão** de vendedores
- **Interface responsiva** com Bootstrap
- **Gráficos** de salário por vendedor e distribuição por gênero

## 🗂️ Estrutura do Projeto

```
Cadastro_Vendedores/
├── backend/
│   └── vendas-backend/          # API Spring Boot
│       ├── src/main/java/
│       │   └── com/vendas360/vendas_backend/
│       │       ├── controllers/     # Controladores REST
│       │       ├── models/          # Entidades JPA
│       │       ├── repositories/    # Repositórios JPA
│       │       ├── services/        # Lógica de negócio
│       │       └── dtos/            # Data Transfer Objects
│       └── src/main/resources/
│           └── application.properties # Configurações do banco de dados
├── frontend/
│    └── vendas360/                # Aplicação Angular
│        ├── src/app/
│        │   ├── pages/
│        │   │   ├── home/         # Dashboard principal
│        │   │   └── register/     # Cadastro de vendedores
│        │   ├── shared/           # Componentes compartilhados
│        │   └── services/         # Serviços Angular
│        └── package.json
└── .github
      └── workflows
            └── keepalive.yml      # Previne inatividade do backend
```

## 📊 API Endpoints

### Vendedores
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/sellers` | Lista todos os vendedores |
| `GET` | `/sellers/{id}` | Busca vendedor por ID |
| `POST` | `/sellers` | Cria novo vendedor |
| `PUT` | `/sellers/{id}` | Atualiza vendedor |
| `DELETE` | `/sellers/{id}` | Remove vendedor |

### Exemplo de Payload (POST/PUT)
```json
{
  "name": "João Silva",
  "salary": 3500.00,
  "bonus": 500.00,
  "gender": 1
}
```

## 🗃️ Modelo de Dados

### Entidade Seller
```java
- id: Long (PK, auto-increment)
- name: String (255 chars, obrigatório)
- salary: Double (obrigatório)
- bonus: Double (obrigatório)
- gender: Integer (0=Feminino, 1=Masculino, 2=Outro)
```

## 🎯 Funcionalidades Detalhadas

### Dashboard (Home)
- **Gráfico de Salários**: Visualização dos salários por vendedor
- **Gráfico de Gênero**: Distribuição dos vendedores por gênero
- **Interface responsiva** com cards informativos

### Cadastro de Vendedores
- **Formulário validado** com campos obrigatórios
- **Máscaras** para formatação de dados
- **Listagem em tempo real** dos vendedores cadastrados
- **Operações CRUD** completas (criar, editar, excluir)

## 🛠️ Tecnologias Utilizadas

### Backend
- **Spring Boot 3.5.6** - Framework principal
- **Spring Data JPA** - Persistência de dados
- **Spring Web** - API REST
- **Spring Validation** - Validação de dados
- **PostgreSQL** - Banco de dados
- **Maven** - Gerenciamento de dependências

### Frontend
- **Angular 14.1.0** - Framework SPA
- **Bootstrap 5.3.8** - Biblioteca CSS
- **Chart.js 4.5.1** - Gráficos interativos
- **ngx-mask 14.3.3** - Máscaras de input
- **Bootstrap Icons** - Ícones
- **TypeScript** - Linguagem de programação

## 🔍 Estrutura de Componentes (Frontend)

### Páginas
- **Home**: Dashboard com gráficos
- **Register**: Cadastro e listagem de vendedores

### Componentes Compartilhados
- **Navbar**: Navegação principal

### Componentes Específicos
- **Seller Form**: Formulário de cadastro
- **Sellers List**: Listagem de vendedores
- **Sellers Table**: Tabela de vendedores
- **Sales Chart**: Gráfico de salários
- **Gender Chart**: Gráfico de gênero

## 🎨 Interface do Usuário

- **Design responsivo** com Bootstrap 5
- **Tema moderno** com cards e sombras
- **Gráficos interativos** com Chart.js
- **Ícones** do Bootstrap Icons
- **Formulários validados** com feedback visual

## 📝 Licença

Este projeto é um sistema de demonstração desenvolvido para fins educacionais.



## 🚀 Executar o projeto localmente

Para isso, acesse a branch "local" deste repositório:
[Acesse aqui](https://github.com/Vinist021/Vendas360/tree/local)

---

**Vendas360** - Sistema de Cadastro e Análise de Vendedores
