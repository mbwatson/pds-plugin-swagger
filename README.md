# PDS Hello World Plugin

This was built with https://github.com/swagger-api/swagger-node.

## Development

See https://github.com/swagger-api/swagger-node for details.

### Edit via Swagger Interface

```bash
$ swagger project edit
```

### Edit Source

Running the dev server with nodemon with the following command will prevent you from having to restart the server when the source is changed.

These two can be run in parallel.

```bash
$ npm run dev
```

## Testing

Automatically generated tests to ensure endpoints accept and return desired request and response types.

```bash
$ npm run test
```

## Deployment

1. Build the image.

```bash
$ docker build -t pds-stub .
```

2. Run the API service in a Docker container.

```bash
$ docker run -p 10010:10010 pds-stub
```

Additional options are probably nice--try giving the container a name (`--name pds-stub-plugin`), run it detatched (`-d`), and remove the container when it stops (`--rm`).

```bash
$ docker run -d --name pds-stub-plugin --rm -p 10010:10010 pds-stub
```

3. Use the API.

Navigate to `http://localhost:10010/hello?name=Dawn` in your browser.
