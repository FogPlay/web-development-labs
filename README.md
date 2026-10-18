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
