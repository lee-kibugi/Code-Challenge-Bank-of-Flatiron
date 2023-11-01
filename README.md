# Financial Transaction Management App

This is a financial transaction management application developed by **LINDA KIBUGI**.

## Introduction

This project provides a web-based financial transaction management app. It consists of two main components:

- **AddTransaction**: Allows users to add new financial transactions, specifying the description, category, amount, and date.

- **DisplayTransactions**: Displays a list of transactions with search functionality to find specific transactions based on descriptions, categories, amounts, or dates.

## Getting Started

To run this application, you'll need to have the following prerequisites:

- Node.js: Ensure you have Node.js installed on your system.

### Installation

1. ## Clone this repository to your local machine:

   ```bash
   git clone <repository_urlhttps://github.com/lee-kibugi/Code-Challenge-Bank-of-Flatiron>


2. ## Navigate to the project directory:

bash/terminal
Copy code
cd financial-transaction-app


3. ## Install the required dependencies:

bash/terminal
Copy code
npm install
Usage

4. ## To start the application, run the following command:

bash/terminal
Copy code
npm start
This will start the development server, and you can access the application in your web browser.

## Components
AddTransaction Component
The AddTransaction component allows you to add new financial transactions. Key features include:

Input data validation to ensure that all required information is provided.
Conversion of the amount to a numerical value.
Submission of transaction data to a server using a POST request to http://localhost:4000/transactions.
User feedback on the success or failure of the transaction submission.
DisplayTransactions Component
The DisplayTransactions component is responsible for displaying a list of transactions. Users can search for specific transactions using a search input field. Notable features of this component include:

Retrieval of transaction data from a server at http://localhost:4000/transactions.
Search functionality that enables users to find transactions by descriptions, categories, amounts, or dates.
Transaction list display in a tabular format.
License
This code is created by LINDA KIBUGI and is available under an open-source license. Please check the license information for further details.

## Author
LINDA KIBUGI
Feel free to customize and expand upon these components to fit your specific project requirements. For more detailed usage instructions or specific component documentation, please refer to individual component files.


