//We have a function that takes in ' request, result and next '
//It is going to resolve a promise and if it resolves
//it's going to call next, which then calls the next piece of middleware

const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

export default asyncHandler;