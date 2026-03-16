---
title: '[DevOps Series] Part 3: Docker and the world of containerization'
description: 'Docker and the world of containerization'
pubDatetime: 2025-08-15
tags:
  - devops
  - devops-series
featured: true
draft: false
---

# 📚 Series Table of Contents

1. 📖 [Chapter 0: Introduction and Stories](/posts/devops-part0)
2. 📚 [Chapter 1: Some concepts and terminologies](/posts/devops-part1)
3. 🚀 [Chapter 2: A noob guy deploy his web app](/posts/devops-part2)
4. 🐳 [Chapter 3: Docker and the world of containerization](/posts/devops-part3) (You are here) 🎯
5. ☸️ [Chapter 4: K8s in a nutshell](/posts/devops-part4) ⚙️
6. 🔧 [Chapter 5: K8s in details](/posts/devops-part5) 🛠️
7. 🏠 [Chapter 6: Before go to the ground](/posts/devops-part6) 🏡
8. 🐧 [Chapter 7: Ubuntu server and the world of Linux](/posts/devops-part7) 🖥️
9. ⚡ [Chapter 8: MicroK8s the simple and powerful K8s](/posts/devops-part8) ⚙️
10. ☁️ [Chapter 9: Harvester HCI the native cloud](/posts/devops-part9) 🌐
11. 🏭 [Chapter 10: More about Harvester HCI](/posts/devops-part10) 🏢
12. 🖥️ [Chapter 11: Promox VE the best VM manager](/posts/devops-part11) 💾
13. 🌐 [Chapter 12: Turn a server into a router with Pfsense](/posts/devops-part12) 🔌
14. 🛠️ [Chapter 13: Some tools, services that you can installed for your devops pipeline](/posts/devops-part13) 🔧
15. 🌍 [Chapter 14: Hello Internet with Cloudflare Zero Trust](/posts/devops-part14) 🔒
16. 🎉 [Chapter 15: Maybe it the end of the series](/posts/devops-part15) 🏁

---
For me, Docker is like a "Hello, World" to the DevOps world. At first glance, it's hard to understand because it introduces many new concepts. In this chapter, I'll simplify Docker for you. Let's start!

## Why we need containerization?

This is the reason

![It works on my machine](/devops-series/5.png)

Yes, but not every time. Apps that work on your machine might not work on mine. Modern applications have many dependencies, libraries, and other components...
![It works on my machine](/devops-series/6.png)

- Think of a container as a bag containing your app, its OS, dependencies, libraries, and everything else it needs. If this bag works on your machine, it will work on every machine. That's how containers work and why we need them. Docker is just one implementation of containerization - we also have Podman, containerd, etc. But Docker is the most popular and user-friendly.
- The technical details of how Docker achieves this are beyond this chapter's scope. You can read more or ask AI :D

## Create your first container using Docker

- Enough talking, let's create your first container!
- First, install Docker on your machine. I recommend Ubuntu to follow most of my blogs. You can use other OS, but I'll use Ubuntu here. Sorry Windows users :)) The installation process differs, but commands and concepts remain the same.

```bash file=bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh ./get-docker.sh
sudo docker run hello-world # Test if Docker is installed correctly
```

By default, the Docker daemon runs as root, so remember to add `sudo` before every Docker command.

- Let's create a simple container for our Node.js backend.
- Make sure you have Node.js installed.

```bash file=bash
mkdir docker-nodejs-backend
cd docker-nodejs-backend
npm init -y
npm install express
```

- Create `index.js` file

```javascript file=index.js
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

- Run `node index.js` to test if it works.
- Every Docker container needs a Dockerfile as the blueprint to build it. This is where you define what goes into your magic bag.
- Create a file named `Dockerfile` in the root of your project with below content. Read my comment in the file to understand what it does.

```dockerfile file=Dockerfile
FROM node:20-alpine # Base image - Alpine Linux with Node.js 20
WORKDIR /app # Working directory (like mkdir -p /app && cd /app)
COPY package.json . # Copy package.json to container
COPY index.js . # Copy index.js to container
RUN npm install # Install dependencies
EXPOSE 3000 # Expose port 3000 (optional but recommended)
CMD ["node", "index.js"] # Command to run your app
```

- Think of a container as a VM running on your machine. Each line in the Dockerfile is a command you'd run in that VM. Building and running your local app is just bringing it into the container. Linux knowledge is very important for understanding Docker.
- Now let's build the container.

```bash
sudo docker build -t docker-nodejs-backend .
```

- The `-t` flag tags the container (think of it as the name). The `.` is the build context - it tells Docker to find the Dockerfile in the current directory.
- Now let's run the container.

```bash
sudo docker run -p 3000:3000 docker-nodejs-backend
```

- Now you can access your app at `http://localhost:3000`
- You can see the container is running and your app is accessible.

That's it! Now you can add "Docker Master" to your CV. :))))

***My confession: I now always ask AI to write Dockerfiles for me. :))))***

## Dive into Docker

- **Docker daemon**: A background service that listens to your commands and runs containers. It's the core of Docker.
- **Docker image**: A read-only template containing instructions for creating a container. It's like a blueprint. The `Dockerfile` creates Docker images.
- **Docker registry**: Like GitHub for code, Docker registries store Docker images. You can push/pull images from public registries (Docker Hub) or private ones on your server.
- **Docker port mapping**: Maps container ports to host ports for external access. `-p 3000:3000` maps host port 3000 to container port 3000.
- **Docker volume**: Persists container data by mounting host directories. Essential for databases - without volumes, data is lost when containers restart.
- **Docker network**: Connects multiple containers. Create networks with `docker network create my-network` and connect containers with `docker network connect my-network my-container`.

## Docker command cheat sheet

## Essential Docker Commands

- `docker run`: Run a container from an image
- `docker build`: Build an image from a Dockerfile
- `docker images`: List all images
- `docker ps`: List running containers (`docker ps -a` for all containers)
- `docker stop/start/restart <container-id>`: Control container lifecycle
- `docker rm <container-id>`: Remove a container
- `docker rmi <image-id>`: Remove an image
- `docker pull/push <image-name>`: Pull/push images from/to registry
- `docker exec <container-id> <command>`: Execute command in running container
- `docker logs <container-id>`: View container logs
- `docker inspect <container-id>`: Inspect container details
- `docker stats <container-id>`: Show container resource usage

## Docker compose for an easier life

- Managing multiple containers with long commands becomes tedious. For example: `sudo docker run -p 3000:3000 -v /path/to/host:/path/to/container docker-nodejs-backend`
- When you have multiple containers that need to run together (Redis, database, backend, frontend) and depend on each other, Docker Compose helps.
- **Docker Compose** defines and runs multi-container applications. You define services, networks, and volumes in a `docker-compose.yml` file:

```yaml file=docker-compose.yaml
version: '3.8'

services:
  redis:
    image: redis:alpine
    ports:
      - "6379:6379"
    networks:
      - app-network

  database:
    image: postgres:15
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: mydb
    volumes:
      - db-data:/var/lib/postgresql/data
    networks:
      - app-network

  backend:
    build: ./backend
    ports:
      - "3000:3000"
    volumes:
      - ./backend:/app
    depends_on:
      - redis
      - database
    environment:
      DATABASE_URL: postgresql://user:password@database:5432/mydb
      REDIS_URL: redis://redis:6379
    networks:
      - app-network

  frontend:
    build: ./frontend
    ports:
      - "8080:80"
    depends_on:
      - backend
    networks:
      - app-network

networks:
  app-network:
    driver: bridge

volumes:
  db-data:
```

- Run all containers: `docker-compose up -d`
- Stop all containers: `docker-compose down`
- View logs: `docker-compose logs -f`
- Check status: `docker-compose ps`
- **Note**: Newer Docker versions use `docker compose` instead of `docker-compose`.

## Advanced Concepts

### Layer Caching

Each Dockerfile instruction creates a cached layer. I copy `package.json` and run `npm install` before copying source code because if only source code changes (not dependencies), Docker won't reinstall packages, saving build time.

### Multi-stage Builds

Optimize image size by using multiple `FROM` instructions. For example, build a React app in one stage, then copy the built files to a smaller nginx image for production.

### Best Practices

- Use `.dockerignore` to exclude unnecessary files
- Keep images small by using Alpine Linux variants
- Don't run containers as root in production
- Use specific image tags instead of `latest`

```dockerfile file=Dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app

# Copy package files first for layer caching
COPY package.json package-lock.json ./
RUN npm ci

# Copy source code and build
COPY . .
RUN npm run build

# Runtime stage
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## Quick Summary

✅ **What we covered:**

- Container basics and why we need them
- Creating your first Docker container
- Docker concepts (daemon, images, registries, volumes, networks)
- Essential Docker commands
- Docker Compose for multi-container apps
- Advanced concepts (layer caching, multi-stage builds)

## Conclusion

This blog covers Docker basics and common features. Docker has many advanced features not covered here - check the [Docker documentation](https://docs.docker.com/) for more. While Docker introduces many new concepts, it's not hard once you understand the fundamentals. The best way to learn is to install Docker and practice, not just read blogs!

---

## 📚 Series Navigation

| Previous Chapter                                |               Series Info                |                                                                   Next Chapter |
| :---------------------------------------------- | :--------------------------------------: | -----------------------------------------------------------------------------: |
| **[← Previous Chapter](/posts/devops-part2)**<br>**🚀 A noob guy deploy his web app** | **DevOps Series**<br>**Chapter 3 of 16** | **[Next Chapter →](/posts/devops-part4)**<br>**☸️ K8s in a nutshell** |
