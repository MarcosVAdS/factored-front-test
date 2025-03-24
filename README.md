## Factored homework test

Project developed as homework test to [Factored](https://www.factored.ai/)

## 💻 Tech stack:

- Front end developed with [Angular](https://v18.angular.dev/)
- Containerization with [Docker](https://www.docker.com/)
- DevContainers from ['Vscode'](https://code.visualstudio.com/docs/devcontainers/containers)
- Styling with [Tailwind](https://tailwindcss.com/)
- Code formatting with [Prettier](https://prettier.io)
- Linting with [ESLint](https://eslint.org)
- Static types with [TypeScript](https://typescriptlang.org)

## 🛠️ Setup & Installation:

- **1. Clone the repo:**

  ```sh
  git clone [git@github.com:MarcosVAdS/factored-front-test.git](https://github.com/MarcosVAdS/factored-front-test.git)
  ```

- **Docker and [DevConainers](https://code.visualstudio.com/docs/devcontainers/containers)** <br>
  To use docker to run the project, open the content folder on vscode, click the bottom left corner and select the option to reopen in container.

- **CLI:** <br>
  To use the CLI or terminal to start the project you must configure your environment and to do this you must:

  - Install node by following the documentation available on the node page. [node](https://nodejs.org/en/download)<br>
  - For this project node version 22.14 was used.
  - Install the Angular CLI:
    ```sh
    npm install -g @angular/cli
    ```

- With your environment ready you can open your terminal on vscode or locally and:
  - install your dependencies:
  ```sh
      npm install
  ```
  - start de development server:
  ```sh
      ng serve
  ```

## 🧪 Running Tests:

To run the tests inside the environment run:

```sh
    ng test
```

## 🛠️ Environment Config:

For custom environment configurations, update:

```
    /src/environments/environment.ts
    /src/environments/environment.prod.ts
```

## 📝 Improvement points:

- Add more unit tests to improve the code quality.
- With Docker file, create an CI/CD on Github Actions to deploy the project.
- Improved documentation using Gitpod for project testing and cloud code.
- Improve the error treatment on Http requests.

## 📽️ Project video:

You can watch the result on [link](https://youtu.be/jkSrB2BnjZQ)
