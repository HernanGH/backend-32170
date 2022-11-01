const validErrors = (request, response, next) => {
  if (!request.params.id) {
    response.json({
      error: 'bad request, missing id'
    }).status(400);
  } else {
    next();
  }
}

module.exports = validErrors