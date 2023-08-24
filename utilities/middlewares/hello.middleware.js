export const greeter = (request, response, next) => {
  console.log("Hello i am a middleware 😁.");

  next();
}
