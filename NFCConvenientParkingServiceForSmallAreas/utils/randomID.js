let str =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
let min = 0;
let max = str.length - 1;

export const randomID = () => {
  let result = '';
  for (let i = 0; i < 10; i++) {
    result += str[Math.floor(Math.random() * (max - min) + min)];
  }
  return result;
};
