5. Проверка в браузере
Запустите дев-сервер:
npm run dev
Откройте http://localhost:5173. На странице должны отображаться:

шапка с навигацией;
сетка из 6 карточек статей, выстроенных через Flexbox;
адаптивная вёрстка (3 → 2 → 1 колонка при сужении экрана).
Production-сборка
npm run build
Vite соберёт оптимизированную версию в папку dist/. Проверить локально:

npm run preview


6. Сохранение проекта в Git
6.1. Инициализация и первый коммит
Если Git ещё не инициализирован (Vite обычно создаёт .gitignore автоматически):
git init
git add .
git commit -m "Лабораторная №1: React + Vite, семантика, CSS-модули, карточки"
6.2. Публикация на GitHub
Создайте репозиторий на github  (без README и .gitignore).
Привяжите и отправьте:
git remote add origin https://github.com/ВАШ_ЛОГИН/my-first-react-app.git
git branch -M main
git push -u origin main
6.3. Файл .gitignore
Vite генерирует его автоматически. Убедитесь, что внутри есть:

gitignore
node_modules
dist
.env
