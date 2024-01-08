# Running the Project

## Prerequisites

-   Please Install [Node.js](https://nodejs.org/en/) latest stable version (LTS).
-   Make sure you are using a Windows machine. (The bat file will not work on other OS)

> Please make sure Node.js is installed on your machine before proceeding further.

After installing node.js, please run the `run.bat` file to install all the dependencies and run the project.

> **Note:** The `run.bat` file will only work on Windows machines. If you are using a different OS, please follow the below steps.

-   Open the terminal and navigate to the project directory.
-   Make sure you have `node.js` and `npm` installed on your machine.
-   Run the following command to install all the dependencies.

```bash
cd backend
npm install
cd ../frontend
npm install
```

-   After installing all the dependencies, run the following command to start the project.

```bash
# Open a new terminal and run the following command
cd backend
npm start

# Open a new terminal and run the following command
cd frontend
npm start
```

> **Note:** Windows might warn you about running the `run.bat` file. Please click on `More Info` and then `Run Anyway` to run the file.

# Service Account Key

The following project files will have a `serviceAccountKey.json` file at this location `/backend/serviceAccountKey.json`. This file is required to connect to the Firebase database. This file is not included in the repository for security reasons.
But, this file is included with the submission. **Please secure this file and do not share it with anyone.**
