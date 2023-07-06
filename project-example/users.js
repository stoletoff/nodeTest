// Common JS
// const admins = ["Slava", "Petya"];
// const clients = ["Vasya", "Dima"];

// const users = {
//   admins,
//   clients
// };
// module.exports = users;
// Модуль.Экспорт один на весь файл

export const admins = ["Slava", "Petya"];
export const clients = ["Vasya", "Dima"];

const users = {
  admins,
  clients,
};
export default users;
