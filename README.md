# using-execa-es-module-in-node

> Example scripts using the [execa](https://www.npmjs.com/package/execa) library.


## Article

The code in this repository was written to accompany the article
[Running commands with execa in Node.js](https://blog.logrocket.com/running-commands-with-execa-in-node-js/).


## Requirements

- [Node.js](https://nodejs.org/en/download/) >= v14.13.1

## Usage

```bash
npm install
```

## Examples

### Dynamically importing the `execa` ES module in a CommonJS module

- [Code](examples/commonjs-usage.cjs)
- Run: `node examples/commonjs-usage.cjs`

### Running a command with execa

- [Code](examples/run-1.js)
- Run: `node examples/run-1.js`

### Capturing stderr

- [Code](examples/run-2.js)
- Run: `node examples/run-2.js`

### Error handling

- [Code](examples/run-3.js)
- Run: `node examples/run-3.js`

### Cancelling a child process

- [Code](examples/run-4.js)
- Run: `node examples/run-4.js`

### Piping output from a child process

- [Code](examples/run-5.js)
- Run: `node examples/run-5.js`

### Redirecting output to a file

- [Code](examples/run-6.js)
- Example: `node examples/run-6.js`

## License

[MIT](./LICENSE.md)
