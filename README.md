## About this project

This project is a practice on MongoDB, ExpressJS, and React, inspired by [realestate.eg](https://realestate.eg/) (old design).

## Features

- **React Query** for data fetching, caching, and mutation
- Route handlers and API routes
- Database hosted on **MongoDB Atlas**
- Styled with **Tailwind CSS**
- Images saved in **Cloudinary**.
- Protected routes for secure access

##### Server:

- Implemented rate limiting
- Security HTTP headers
- Data sanitization
- Prevention of parameter pollution
- Authentication using JWT

## Known Issues

The following issues are currently present:

1. Numerous unresolved TypeScript errors.
2. The filtration functionality on the home page and compound page requires optimization in both the frontend and backend to work at full capacity.

## Running Locally

1. First, you need to sign up for **Cloudinary** and get your API key.
2. Second, sign up for **MongoDB Atlas** and get your database API key.

#### Server

1. Install dependencies using npm:

```sh
pnpm install
```

2. Copy .env.example to .env and update the variables.

3. Start the development server:

```sh
pnpm dev
```

#### Client

1. Install dependencies using pnpm:

```sh
pnpm install
```

2. Copy .env.local.example to .env.local and update the variables.

3. Start the development server:

```sh
pnpm dev
```

## License

Licensed under the [MIT license](https://github.com/shadcn/taxonomy/blob/main/LICENSE.md).
