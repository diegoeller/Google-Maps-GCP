# Google Maps Demo

Este projeto demonstra como integrar o Google Maps em uma página web utilizando a API do Google Maps e TypeScript.

---

## **Pré-requisitos**

Antes de rodar o projeto, certifique-se de que você possui os seguintes itens instalados:

1. **Node.js**: [Download Node.js](https://nodejs.org/)
   - Verifique a instalação:
     ```bash
     node -v
     npm -v
     ```

2. **TypeScript**:
   - Instale o TypeScript globalmente:
     ```bash
     npm install -g typescript
     ```

3. **Servidor Local**:
   - Para evitar problemas de CORS, você precisará de um servidor local. Você pode usar:
     - **http-server** (via Node.js)
     - **Live Server** (extensão do Visual Studio Code)

---

## **Como Rodar o Projeto**

### 1. Clone o Repositório
Se o projeto estiver em um repositório, clone-o:
```bash
git clone <URL_DO_REPOSITORIO>
cd <PASTA_DO_PROJETO>

### 2. Compile o TypeScript
Compile o arquivo `index.ts` para gerar o arquivo `index.js`:
```bash
tsc index.ts
```

Isso criará um arquivo `index.js` no mesmo diretório.

### 3. Inicie um Servidor Local
#### Opção 1: Usando `http-server`
- Instale o `http-server` globalmente (se ainda não estiver instalado):
  ```bash
  npm install -g http-server
  ```
- Inicie o servidor no diretório do projeto:
  ```bash
  http-server
  ```
- Acesse o projeto no navegador em: `http://127.0.0.1:8080`.

#### Opção 2: Usando Live Server no VS Code
- Instale a extensão **Live Server** no Visual Studio Code.
- Clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"**.

---

## **Estrutura do Projeto**

```
Projetos Pessoais/
├── index.html       # Arquivo principal da página
├── index.ts         # Código TypeScript
├── index.js         # Código JavaScript gerado (após compilação)
├── style.css        # Estilos para o mapa
```

---

## **Configuração da API do Google Maps**

1. Substitua a chave de API no arquivo `index.html` pela sua chave válida:
   ```html
   <script>
     ({ key: "SUA_CHAVE_DE_API", v: "weekly" });
   </script>
   ```
   - Obtenha uma chave de API no [Google Cloud Console](https://console.cloud.google.com/).

2. Certifique-se de que a chave de API tem permissões para usar a API do Google Maps.

---

## **Problemas Comuns**

1. **Erro de CORS**:
   - Certifique-se de estar usando um servidor local para abrir o projeto.

2. **Erro "Cannot find namespace 'google'"**:
   - Instale os tipos do Google Maps:
     ```bash
     npm install --save-dev @types/google.maps
     ```

3. **Erro "tsc não é reconhecido"**:
   - Certifique-se de que o TypeScript está instalado globalmente:
     ```bash
     npm install -g typescript
     ```
