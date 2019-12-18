# PDS Hello World Plugin

This was built with https://github.com/swagger-api/swagger-node.

## Development

See https://github.com/swagger-api/swagger-node for development details.

### Edit via Swagger Interface

```bash
$ swagger project edit
```

This will serve the Swagger editor and open it in your browser at `http://127.0.0.1:42199`. Changes made in this interface are reflected in real time.

### Edit Source

Run the development server with the following command.

```bash
$ npm run dev
```

Running the dev server with nodemon with the following command will prevent the need restart the server when the source is changed. You will output like the following in the terminal.


```bash
$ npm run dev

> stub@0.0.1 dev /current/working/directory/for/this/project
> nodemon app.js

[nodemon] 2.0.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`

  Try one of the following routes:

  [Hello, World] ....... curl http://localhost:10010/hello?name=Kimberly
  [Config] ............. curl http://localhost:10010/config
  [Guidance] ........... curl http://localhost:10010/guidance
  [Endpoint Details] ... curl http://localhost:10010/swagger
```

The development server will deploy on port `10010`. Visit `http://localhost:10010/` to test changes to the API.

Note that the Swagger editor and the dev server _can_ be run simultaneously.

## Testing

Tests should be employed to ensure endpoints accept and return desired request and responses.

```bash
$ npm run test
```

This will display output like the following in the terminal.

```bash
$ npm run test

> stub@0.0.1 dev /current/working/directory/for/this/project
> swagger project test

Running tests in: /current/working/directory/for/this/project/test...


  Try one of the following routes:

  [Hello, World] ....... curl http://localhost:10010/hello?name=Kimberly
  [Config] ............. curl http://localhost:10010/config
  [Guidance] ........... curl http://localhost:10010/guidance
  [Endpoint Details] ... curl http://localhost:10010/swagger

  controllers
    config
      GET /config
        ✓ should return json

  controllers
    config
      GET /guidance
        ✓ should accept the following parameters: patient_id, model, model_plugin_id, timestamp
        ✓ should return json

  controllers
    hello_world
      GET /hello
        ✓ should return a default string
        ✓ should accept a name parameter


  5 passing (166ms)

done

```

## Deployment

### Build the Image

To build the Docker image, execute the following command, providing the desired tag.

```bash
$ docker build -t pds-stub .
```

### Run the API

Execute the command to serve the API from within a Docker container.

```bash
$ docker run -p [port]:10010 pds-stub
```

where `[port]` is subsituted with the port you wish to serve the service on the host.

Inside the container, the port `10010` is exposed as in development server. To route traffic, for example, from your machine's port `8888` _to_ the API service, execute the following command.

```bash
$ docker run -p 8888:10010 pds-stub
```

Additional options are probably nice--try giving the container a name (`--name pds-stub-plugin`), run it detatched (`-d`), and remove the container when it stops (`--rm`).

```bash
$ docker run -d --name pds-stub-plugin --rm -p [port]:10010 pds-stub
```

Again, to serve on port `8888` with these additional options, execute the following command.

```bash
$ docker run -d --name pds-stub-plugin --rm -p 8888:10010 pds-stub
```

The above command outputs only the container id to the terminal, as shown here.

```bash
$ docker run -d --name pds-stub-plugin --rm -p 8888:10010 pds-stub
2ac4faa7298c91e2936d465a792025b44147d780b03d573c0f5fda96f6b801c0
```

### Use the API

Navigate to `http://localhost:[port]/swagger` in your browser to view details of the enpoints defined in your API.
