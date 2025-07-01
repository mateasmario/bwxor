# Installation

#### Clone (or update) the repository locally:
```
git clone https://github.com/mateasmario/bwxor
```
#### Run `docker build` to create a new image from the `Dockerfile`:
```
sudo docker build -t bwxor .
```
#### Start the container based on the built image:
```
docker run -d -p 80:5173 bwxor
```
or, if using Nginx:
```
docker run -d -p 80:80 bwxor
```

`80` is the machine listening port, getting mapped to the vite server that runs locally on port `5173`.

# Maintenance

Running Docker processes can be viewed by using:
```
docker ps
```
including `-all` also displays the recently stopped processes.

```
docker logs <containerId>
```
will show what went wrong with the startup of your container. `containerId` is to be found in the previous command.
