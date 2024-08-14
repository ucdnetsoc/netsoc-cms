# Netsoc Blog and Events CMS

This repo contains the configuration for the Strapi CMS we use to manage
details of blog posts and upcoming events for the Netsoc website. It is used
as the base for building the Docker image(s) running on the server.

Follow the instructions below to get a local development instance running.

NOTE: Yes, the `.env` has been committed to the repository. This is because it
doesn't contain any sensitive information, only configuration for the
development environment. The actual Strapi instance running on our server uses
a different .env that is stored much more securely.

## Installation instructions

1. Follow the [instructions](https://docs.docker.com/engine/install/) on the
official Docker site to set up Docker engine for your platform.

2. Clone this repository to your machine. You will need it to build the
image for the Strapi dev server.

3. Run the following command to build the image:

```
docker build -t netsoc-dev-cms:latest -f Dockerfile .
```

4. Run `docker compose up -d` to start your newly built containers. If all goes
well, you'll know it because there aren't a bunch of errors on your screen :)

5. Open the Strapi admin panel at `localhost:1337/admin` in your browser to 
create an admin userfor yourself.

6. Once you're logged in, go to the Content-Manager to add new entries. You can
also edit the Content-Types in the Content-Type Builder. Note that any changes
you make here will NOT reflect on the production instance running on the Netsoc
server.
