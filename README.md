# To build an docker image run the command:
`docker build -t <image-name> .`

# To list the images built run:
`docker images`

# To run the docker container run the command:
`docker run --name=<container-name> -d -p 8080:80 <image-name>`

# To access the game go to browser and enter:
`http://localhost:8080`

# To list the docker containers run:
`docker ps -a`
