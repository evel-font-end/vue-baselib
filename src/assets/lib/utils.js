export function sum(arr) {
  return arr.reduce(function (prev, curr, idx, arr) {
    return prev + curr;
  });
}

export function isFunction(fn) {
  return Object.prototype.toString.call(fn) === '[object Function]';
}
