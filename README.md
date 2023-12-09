## Introduction:

- This workflow streamlines the process of switching between development and production environments.

- With this workflow, you can avoid the hassle of installing dependencies locally, including Node.js. Instead, you can develop the app entirely through the containers.

## When in development, run this:

```docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build```


to deport, run this:

```docker-compose -f docker-compose.yml -f docker-compose.dev.yml down```

if you want to also delete the volumes:

```docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v```


## When in production, run this:

```docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build```

to deport, run this:

```docker-compose -f docker-compose.yml -f docker-compose.prod.yml down```

if you want to also delete the volumes:

```docker-compose -f docker-compose.yml -f docker-compose.prod.yml down -v```
