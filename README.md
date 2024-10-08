<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Blogging Platform API

This is a blogging platform API built using NestJS, TypeORM, PostgreSQL, and AWS S3 for file storage. The API provides CRUD operations for articles, allowing users to create, read, update, and delete articles, along with file uploads.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [AWS S3 Setup](#aws-s3-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **TypeORM**: An ORM for TypeScript and JavaScript that supports various databases, including PostgreSQL.
- **PostgreSQL**: A powerful, open-source relational database.
- **Docker**: A platform for developing, shipping, and running applications in containers.
- **AWS S3**: Amazon Web Services Simple Storage Service for file storage and retrieval.

## Installation

1. Clone the repository**:
   ```bash
   git clone <repository-url>
   cd blogging_platform_api
   ```
2. Install dependencies:

```bash
pnpm install
```

3. Set up the Docker container for PostgreSQL: Make sure you have Docker installed. In the project root, create a docker-compose.yml file with the following content:
```yml
version: '3.8'

services:
  db:
    image: postgres:latest
    restart: always
    environment:
      POSTGRES_USER: your_db_user
      POSTGRES_PASSWORD: your_db_password
      POSTGRES_DB: your_db_name
    ports:
      - '5432:5432'
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```
4. .env

```
DATABASE_URL=postgres://your_db_user:your_db_password@localhost:5432/your_db_name
AWS_S3_BUCKET=your_bucket_name
AWS_ACCESS_KEY_ID=your_access_key_id
AWS_SECRET_ACCESS_KEY=your_secret_access_key
AWS_REGION=your_region
```

Running the Application
Start the Docker container:

```
pnpm run docker:restart
```

```
pnpm run build
```

```
pnpm run start:dev
```
The API should now be running on http://localhost:3300.

AWS S3 Setup
To use AWS S3 for file storage:

Create an AWS account if you don't have one.

Create an S3 Bucket:

Go to the S3 service in your AWS Management Console.
Click on "Create bucket" and follow the prompts.
Make sure to uncheck "Block all public access" if you want your files to be publicly accessible.
Get AWS Credentials:

Go to the IAM service in your AWS Management Console.
Create a new user with programmatic access.
Attach the policy AmazonS3FullAccess to the user.
Note down the AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY.
Update your .env file with the S3 bucket name and your AWS credentials.

Usage
CRUD Operations: Use the API endpoints to create, read, update, and delete articles. The articles support file uploads to S3.

Postman: You can use Postman or any other API client to interact with the API.


Contributions are welcome! Please feel free to submit a pull request or open an issue.

Here’s the README content formatted properly for a README.md file:

```markdown
# Blogging Platform API

This is a blogging platform API built using NestJS, TypeORM, PostgreSQL, and AWS S3 for file storage. The API provides CRUD operations for articles, allowing users to create, read, update, and delete articles, along with file uploads.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [AWS S3 Setup](#aws-s3-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **TypeORM**: An ORM for TypeScript and JavaScript that supports various databases, including PostgreSQL.
- **PostgreSQL**: A powerful, open-source relational database.
- **Docker**: A platform for developing, shipping, and running applications in containers.
- **AWS S3**: Amazon Web Services Simple Storage Service for file storage and retrieval.

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd blogging_platform_api
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Set up the Docker container** for PostgreSQL:
   Make sure you have Docker installed. In the project root, create a `docker-compose.yml` file with the following content:
   ```yaml
   version: '3.8'

   services:
     db:
       image: postgres:latest
       restart: always
       environment:
         POSTGRES_USER: your_db_user
         POSTGRES_PASSWORD: your_db_password
         POSTGRES_DB: your_db_name
       ports:
         - '5432:5432'
       volumes:
         - postgres_data:/var/lib/postgresql/data

   volumes:
     postgres_data:
   ```

## Configuration

1. **Environment Variables**:
   Create a `.env` file in the root of the project and add your configuration:
   ```env
   DATABASE_URL=postgres://your_db_user:your_db_password@localhost:5432/your_db_name
   AWS_S3_BUCKET=your_bucket_name
   AWS_ACCESS_KEY_ID=your_access_key_id
   AWS_SECRET_ACCESS_KEY=your_secret_access_key
   AWS_REGION=your_region
   ```

## Running the Application

1. **Start the Docker container**:
   ```bash
   pnpm run docker:restart
   ```

2. **Build the application**:
   ```bash
   pnpm run build
   ```

3. **Run the application**:
   ```bash
   pnpm run start:dev
   ```

4. The API should now be running on `http://localhost:3300`.

## AWS S3 Setup

To use AWS S3 for file storage:

1. **Create an AWS account** if you don't have one.

2. **Create an S3 Bucket**:
   - Go to the S3 service in your AWS Management Console.
   - Click on "Create bucket" and follow the prompts.
   - Make sure to uncheck "Block all public access" if you want your files to be publicly accessible.

3. **Get AWS Credentials**:
   - Go to the IAM service in your AWS Management Console.
   - Create a new user with programmatic access.
   - Attach the policy `AmazonS3FullAccess` to the user.
   - Note down the `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`.

4. **Update your `.env` file** with the S3 bucket name and your AWS credentials.

## Usage

- **CRUD Operations**: Use the API endpoints to create, read, update, and delete articles. The articles support file uploads to S3.

- **Postman**: You can use Postman or any other API client to interact with the API.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

