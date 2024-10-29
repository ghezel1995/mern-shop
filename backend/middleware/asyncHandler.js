//This is a HOC that takes a function as its argument and returns another function
//The returned function takes in ' request, result and next ' which is standard middleware signature
//It is going to resolve a promise and if it resolves
//it's going to call next, which calls the next piece of middleware
//The purpose of using this function is that we don’t need try-catch blocks for each function.


const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

export default asyncHandler;