# **Calculator Microservice - Extended Version**

## Overview

### This microservice expands upon the functionality introduced in sit323-2025-prac4p. It now supports additional arithmetic operations and improved error handling, making it more robust and user-friendly.

## Features

- Basic Arithmetic Operations: Addition, Subtraction, Multiplication, Division

- Advanced Operations: Exponentiation, Square Root, Modulo

- Enhanced Error Handling: Improved responses for invalid inputs, division by zero, and missing parameters

## Technologies Used

- Node.js (JavaScript runtime)

- Express.js (Web framework for handling API requests)

- Postman (API testing tool)

- GitHub (Version control and repository management)

## Setup Instructions

1. Clone the Repository

- git clone https://github.com/username/sit323-2025-prac4c.git
- cd sit323-2025-prac4c

2. Install Dependencies

- npm install

3. Start the Server

- node server.js

### By default, the server will run on http://localhost:3000/.

## API Endpoints

| Endpoint | Description | Example |
|----------|------------|---------|
| `/add` | Adds two numbers | `/add?num1=5&num2=3` |
| `/subtract` | Subtracts two numbers | `/subtract?num1=10&num2=4` |
| `/multiply` | Multiplies two numbers | `/multiply?num1=6&num2=7` |
| `/divide` | Divides two numbers | `/divide?num1=20&num2=5` |
| `/power` | Computes exponentiation | `/power?num1=2&num2=3` |
| `/sqrt` | Computes square root | `/sqrt?num1=2&num2=2` |
| `/modulo` | Computes modulo operation | `/modulo?num1=2&num2=2` |

## Error Handling
| Scenario | Example Request | Response |
|----------|------------|---------|
| Invalid Input| `/add?num1=abc&num2=5` | `{ error: "Invalid input. Please provide valid numbers." }`| 
| Division by Zero | `/divide?num1=10&num2=0` | `{ error: "Division by zero is not allowed." }` |
| Missing Parameter | `/add?num1=5` | `{ error: "Missing parameter. Provide both num1 and num2." }` |

## Testing with Postman

- Open Postman.

- Choose GET method.

- Enter the API URL (e.g., http://localhost:3000/add?num1=5&num2=3).

- Click Send.

- View the response in the Body section.

## Deployment

### To deploy the microservice on a cloud platform like Heroku or AWS:

- Set up a repository on GitHub.

- Push the code to GitHub.

## Contribution

- Fork the repository.
  
- Create a feature branch.

- Commit changes and push to GitHub.

- Submit a pull request.

## Author: **Saksham**

### GitHub: https://github.com/JSKSHM-DRK
