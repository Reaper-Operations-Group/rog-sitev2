# Overview

## Steam Session Handling

### Server Side

```node
import { getServerSession } from "next-auth";
import { getAuthOptions } from "./api/auth/[...nextauth]/route";

const session = await getServerSession(getAuthOptions());
console.log("Server Session: ", session);
```

### Client Side

```node
import { useSession } from "next-auth/react";
const { data: session, status } = useSession();
```

## Prisma ORM Database Syncing

Run the following to sync the schema with the database

```bash
npx prisma migrate dev
```

## Development Server

First, run the development server:

```bash
npm run dev
```

## Architecture Decisions

- Cannot use the middleware for authentication since currently only the JWT session authentication is supported. Therefore using a database adapter is not supported.
