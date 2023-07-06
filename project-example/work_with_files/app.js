// import fs from "fs";  - старая версия которая работает с колбэками
// Читаем файл и вызываем коллбєк
// fs.readFile("./files/file.txt", (error, data) => {
//     console.log(error), console.log(data);
//   });

// import fs from "fs/promises";
// Новая версия поддержка промисов

// fs.readFile("./files/file.txt")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
// чтение данных из файла

// const func = async () => {
//   const filePath = "./files/file.txt";
//   const data = await fs.readFile(filePath);
//   console.log(data);
// };
// func();
// Вместо текста мы получим Буфер - 16 значный код
// что бы прочитать этот буфер воспользуемся методом toString() используя UTF8

// const func = async () => {
//   const filePath = "./files/file.txt";
//   const buffer = await fs.readFile(filePath);
//   const text = buffer.toString();
//   console.log(text);
// };
// func();

// Упрощенный вариант считывания файла readFile
// import fs from "fs/promises";
// const func = async () => {
//   const filePath = "./files/file.txt";
//   const text = await fs.readFile(filePath, "utf-8");
//   console.log(text);
// };
// func();

// Дописать в файл appendFile
// import fs from "fs/promises";
// const func = async () => {
//   const filePath = "./files/file.txt";
//   const result = await fs.appendFile(filePath, "\nJavaScript forever");
//   console.log(result);
// };
// func();
// при этом записывается новая строчка в файл, но в консоле будет указано undefind

//Заменить данные полностью fs.writeFile аналог innerHTML
// import fs from "fs/promises";
// const func = async () => {
//   const filePath = "./files/file.txt";
//   const result = await fs.writeFile(filePath, "PHP never die!");
//   console.log(result);
// };
// func();

// если попробовать записать файл которого не существет, то NodeJs его сперва создаст и потом перезапишет


// Удалить файл - fs.unlink
import fs from "fs/promises";
const func = async () => {
  const filePath = "./files/file.txt";
  const result = await fs.unlink(filePath);
  console.log(result);
};
func();
