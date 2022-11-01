const logRequestInfo = (request, response, next) => {
  console.log(`METODO: ${request.method} ${request.path}`);
  next();
}

module.exports = logRequestInfo