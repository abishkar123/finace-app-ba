# Finance-App-backend
Welcome to the Finance-app. This Project provides to user to apply finance application. The project Provides a fundational setup for building robutst APIs using Express.


## Geeting Started
## Prerequisties 
Make sure you have nodejs and npm installed on your machine.

## Installation 
1. Clone the repository:

   ```bash
   git clone https://github.com/abishkar123/finace-app-ba.git
   cd api 
   ```
  

2. Clone the repository:
   ```bash
   npm i 
   ```
   
3. Clone the repository:
   Create a .env file in the root directory and add your environment variables. Refer to .env.example for the required variables.

## Runing Application
```bash
 npm run dev 
 ```



## Project Strcuture 

- src/: Contain the soruce code of the application 
  - v1/: Version 1 of source 
   - server/:Contain all basic server and express and other package setup for PORT on 8000
   - dbconfig/: Contain mongodb atlas setup 
   - routes/: Express routes
   - models/: Mongoose models
   - Schemas/: Schema for Validations
   - utlis/: Utility functions bcrypt-password 

 ## Features 
 - Login and register user 
 - single page applicaton 
 - state manaagement 
 - user can create, update, and delete there details
 - pagination applciaion detials 

 ## package and dependencies
-   **dotenv**: Load environment variables from a .env file.
-   **express**: Web framework for Node.js.
-   **fs-extra**: Provides additional file system methods that aren't included in the native fs module.
-   **http-status**: Utility to interact with HTTP status codes.
-   **mongoose**: MongoDB object modeling tool.

 ## Dev Dependencies
- nodemon: Tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---