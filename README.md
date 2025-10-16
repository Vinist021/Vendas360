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
- **Banco de Dados**: H2 (in-memory)
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
- **Banco H2** com dados iniciais pré-carregados

### 🎨 Frontend
- **Dashboard** com gráficos interativos
- **Cadastro de vendedores** com formulário validado
- **Listagem** de vendedores em tabela
- **Edição** e **exclusão** de vendedores
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
│       │       └── dtos/           # Data Transfer Objects
│       └── src/main/resources/
│           ├── application.properties
│           └── data.sql           # Dados iniciais
└── frontend/
    └── vendas360/                 # Aplicação Angular
        ├── src/app/
        │   ├── pages/
        │   │   ├── home/          # Dashboard principal
        │   │   └── register/     # Cadastro de vendedores
        │   ├── shared/           # Componentes compartilhados
        │   └── services/         # Serviços Angular
        └── package.json
```

## 🚀 Como Executar o Projeto

### Pré-requisitos
- **Java 17** ou superior
- **Node.js 16** ou superior
- **Maven 3.6** ou superior
- **Angular CLI 14** ou superior

### 🔧 Backend (Spring Boot)

1. **Navegue para o diretório do backend:**
   ```bash
   cd backend/vendas-backend
   ```

2. **Execute a aplicação:**
   ```bash
   ./mvnw spring-boot:run
   ```
   
   **Windows:**
   ```bash
   mvnw.cmd spring-boot:run
   ```

   ou clique no botão run em `VendasBackendApplication.java`
   
   <img width="595" height="170" alt="image" src="https://github.com/user-attachments/assets/d83cf60c-2422-41b0-82e2-4e0beaaf237e" />


4. **Acesse a API:**
   - **URL Base**: `http://localhost:8080`
   - **H2 Console**: `http://localhost:8080/h2-console`
   - **JDBC URL**: `jdbc:h2:mem:testdb`
   - **Username**: `sa`
   - **Password**: (vazio)

### 🎨 Frontend (Angular)

1. **Navegue para o diretório do frontend:**
   ```bash
   cd frontend/vendas360
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```
      ```bash
   npm install angular
   ```

3. **Execute a aplicação:**
   ```bash
   npm start
   ```
   
   ou
   
   ```bash
   ng serve
   ```

4. **Acesse a aplicação:**
   - **URL**: `http://localhost:4200`

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
- **H2 Database** - Banco de dados em memória
- **Maven** - Gerenciamento de dependências

### Frontend
- **Angular 14.1.0** - Framework SPA
- **Bootstrap 5.3.8** - Framework CSS
- **Chart.js 4.5.1** - Gráficos interativos
- **ngx-mask 14.3.3** - Máscaras de input
- **Bootstrap Icons** - Ícones
- **TypeScript** - Linguagem de programação

## 🔧 Configurações

### Backend (application.properties)
```properties
spring.application.name=vendas-backend
server.error.include-stacktrace=never
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.defer-datasource-initialization=true
```

### Frontend (package.json)
- **Angular**: 14.1.0
- **Bootstrap**: 5.3.8
- **Chart.js**: 4.5.1
- **ngx-mask**: 14.3.3

## 📈 Dados Iniciais

O sistema vem pré-carregado com dados de exemplo:

```sql
INSERT INTO TBL_SELLER (NAME, SALARY, BONUS, GENDER) VALUES 
('Joao das Couves', 3000.00, 500.00, 1),
('Teste da Silva', 4000.00, 200.00, 1),
('Maria das Dores', 2500.00, 300.00, 0),
('Ana Maria', 3200.00, 400.00, 0),
('Jose Carlos', 4500.00, 0.00, 1);
```

## 🔍 Estrutura de Componentes (Frontend)

### Páginas
- **Home**: Dashboard com gráficos
- **Register**: Cadastro e listagem de vendedores

### Componentes Compartilhados
- **Navbar**: Navegação principal
- **Header**: Cabeçalhos das páginas

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

## 🔧 Desenvolvimento

### Estrutura do Backend
```
controllers/     # Controladores REST
├── exceptions/  # Tratamento de exceções
models/         # Entidades JPA
repositories/   # Repositórios de dados
services/       # Lógica de negócio
├── exceptions/ # Exceções customizadas
dtos/          # Objetos de transferência
```

### Estrutura do Frontend
```
pages/          # Páginas da aplicação
├── home/       # Dashboard
└── register/   # Cadastro
shared/         # Componentes compartilhados
services/       # Serviços Angular
interfaces/     # Interfaces TypeScript
```

## 📝 Licença

Este projeto é um sistema de demonstração desenvolvido para fins educacionais.

---

**Vendas360** - Sistema de Cadastro e Análise de Vendedores
