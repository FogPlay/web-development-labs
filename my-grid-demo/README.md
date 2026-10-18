Структура проекта 
Text

my-grid-demo/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    └── components/
        ├── Layout.jsx
        ├── Header.jsx
        ├── Sidebar.jsx
        ├── MainContent.jsx
        └── Footer.jsx


Как запустить (JS-версия)
Создай проект:
bash
npm create vite@latest my-grid-demo -- --template react
cd my-grid-demo
npm install
Удали содержимое src и создай файлы по структуре выше.
Запусти:
bash
npm run dev

