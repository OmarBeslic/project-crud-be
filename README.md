# Project CRUD API

This is a simple CRUD API for managing projects using **Node.js, Express, Prisma, and MySQL**. It allows you to create, read, update, and delete projects, as well as mark projects as favorites.
#  Note: This API is intended only for frontend testing purposes. It does not include additional field validations, advanced middleware structures, authentication, or other production-ready security measures.

## Features
- Create a new project
- Retrieve all projects
- Get a single project by ID
- Update project details
- Delete a project
- Mark a project as favorite
- Remove a project from favorites

## Technologies Used
- **Node.js** - Backend runtime
- **Express.js** - Web framework
- **Prisma** - ORM for database interaction
- **MySQL** - Database
- **dotenv** - Environment variables management
- **cors** - Middleware for handling CORS

---

## Getting Started

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/OmarBeslic/project-crud-be.git
   cd project-crud
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the server:
   ```sh
   npm start
   ```
   The server will run on `http://localhost:3001`

---

## API Endpoints

### Create a Project
- **Endpoint:** `POST /projects`
- **Request Body:**
  ```json
  {
    "id": "project_3",
    "name": "New Project",
    "description": "This is a test project",
    "startDate": "2025-02-21",
    "endDate": "2025-03-21",
    "manager": "John Doe"
  }
  ```
- **Response:**
  ```json
  {
    "id": "project_3",
    "name": "New Project",
    "description": "This is a test project",
    "startDate": "2025-02-21T00:00:00.000Z",
    "endDate": "2025-03-21T00:00:00.000Z",
    "manager": "John Doe",
    "isFavorite": false
  }
  ```

### Get All Projects
- **Endpoint:** `GET /projects`
- **Response:** List of projects

### Get a Single Project by ID
- **Endpoint:** `GET /projects/:id`

### Update a Project
- **Endpoint:** `PUT /projects/:id`
- **Request Body:**
  ```json
  {
    "id": "project_3",
    "name": "Updated Project Name",
    "description": "Updated Description",
    "startDate": "2025-02-22",
    "endDate": "2025-03-22",
    "manager": "Jane Doe"
  }
  ```

### Delete a Project
- **Endpoint:** `DELETE /projects/:id`

### Mark a Project as Favorite or remove it from Favorite
- **Endpoint:** `PATCH /projects/:id/favorite`

---

## License
This project is licensed under the MIT License.
