const articles = [
  {
    id: 1,
    title: "Что такое React",
    excerpt:
      "React — библиотека для создания пользовательских интерфейсов. Знакомимся с компонентами и основными понятиями.",
    author: "Анна Иванова",
    date: "12 марта 2026",
    dateTime: "2026-03-12",
    tag: "Основы",
    image: "react.svg",
    imageAlt: "React: интерфейс из компонентов",
  },
  {
    id: 2,
    title: "Хуки в React",
    excerpt:
      "useState, useEffect, useContext: разбираемся, как работают хуки и зачем они нужны.",
    author: "Пётр Смирнов",
    date: "18 марта 2026",
    dateTime: "2026-03-18",
    tag: "Хуки",
    image: "hooks.svg",
    imageAlt: "Хуки: useState и useEffect",
  },
  {
    id: 3,
    title: "Vite против Webpack",
    excerpt:
      "Сравниваем инструменты сборки: запуск проекта, конфигурацию и удобство разработки.",
    author: "Мария Кузнецова",
    date: "22 марта 2026",
    dateTime: "2026-03-22",
    tag: "Инструменты",
    image: "vite.svg",
    imageAlt: "Инструменты сборки: Vite",
  },
  {
    id: 4,
    title: "CSS-модули в React",
    excerpt:
      "Как изолировать стили компонентов и избежать конфликтов одинаковых имён классов.",
    author: "Иван Петров",
    date: "25 марта 2026",
    dateTime: "2026-03-25",
    tag: "Стили",
    image: "css.svg",
    imageAlt: "Изолированные стили: CSS-модули",
  },
  {
    id: 5,
    title: "Flexbox за 5 минут",
    excerpt:
      "Основные свойства Flexbox, перенос элементов и приёмы адаптивной вёрстки.",
    author: "Ольга Сидорова",
    date: "30 марта 2026",
    dateTime: "2026-03-30",
    tag: "Вёрстка",
    image: "flex.svg",
    imageAlt: "Адаптивная вёрстка: display flex",
  },
  {
    id: 6,
    title: "Git для фронтендера",
    excerpt:
      "Базовые команды Git, история изменений и публикация учебного проекта на GitHub.",
    author: "Дмитрий Волков",
    date: "2 апреля 2026",
    dateTime: "2026-04-02",
    tag: "Git",
    image: "git.svg",
    imageAlt: "Контроль версий: git commit",
  },
];

export default articles.map((article) => ({
  ...article,
  image: `${import.meta.env.BASE_URL}images/${article.image}`,
}));
