FROM ubuntu

# Can be overridden in the docker run command
# docker run -e NAME=hello containerName
ENV NAME=world
ENV PASSWORD=1234

# Immutable command
ENTRYPOINT [ "echo" ]

# Mutable command that we can change in the docker run command
# docker run containerName changed hello world
CMD [ "echo", "hello world" ]