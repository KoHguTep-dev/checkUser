# checkUser
1. Пользователь запускает web-сервер node.exe server.js (npm start)
2. Пользователь открывает web страницу, на которой отображаются
- поле ввода имени пользователя
- кнопка "Проверить"
3. Пользователь вводит имя пользователя и нажимает на "проверить"
4. Если введённый пользователь присутствует в списке пользователей Windows, отображается страница с надписью "Пользователь есть", иначе "Такого пользователя нет"
5. Проверку наличия пользователя в ОС Windows выполнять через разработанный node.js c/c addon с использованием WinAPI
