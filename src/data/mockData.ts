import { Employee, Course, Test, KnowledgeBase } from "@/types";

export const mockEmployees: Employee[] = [
  {
    id: 1,
    name: "Иванов А.П.",
    department: "IT",
    position: "Разработчик",
    email: "ivanov@company.com",
    score: 4.2,
    status: "green",
    tests: 12,
    avgScore: 87,
  },
  {
    id: 2,
    name: "Петрова М.В.",
    department: "HR",
    position: "Менеджер",
    email: "petrova@company.com",
    score: 3.8,
    status: "yellow",
    tests: 8,
    avgScore: 76,
  },
  {
    id: 3,
    name: "Сидоров К.И.",
    department: "Продажи",
    position: "Менеджер",
    email: "sidorov@company.com",
    score: 2.1,
    status: "red",
    tests: 5,
    avgScore: 42,
  },
  {
    id: 4,
    name: "Козлова Е.А.",
    department: "Маркетинг",
    position: "Специалист",
    email: "kozlova@company.com",
    score: 4.7,
    status: "green",
    tests: 15,
    avgScore: 94,
  },
];

export const mockCourses: Course[] = [
  {
    id: 1,
    title: "Основы кибербезопасности",
    description: "Изучите основные принципы защиты информации",
    duration: "2 часа",
    progress: 0,
    status: "available",
  },
  {
    id: 2,
    title: "Управление проектами",
    description: "Методологии Agile и Scrum в практике",
    duration: "4 часа",
    progress: 65,
    status: "in_progress",
  },
  {
    id: 3,
    title: "Клиентский сервис",
    description: "Эффективное взаимодействие с клиентами",
    duration: "3 часа",
    progress: 100,
    status: "completed",
  },
  {
    id: 4,
    title: "Цифровые технологии",
    description: "Современные инструменты для работы",
    duration: "5 часов",
    progress: 0,
    status: "available",
  },
];

export const mockTests: Test[] = [
  {
    id: 1,
    title: "Тест 1: Основы работы",
    questions: 15,
    duration: 20,
    lastResult: 85,
  },
  {
    id: 2,
    title: "Тест 2: Безопасность",
    questions: 20,
    duration: 30,
    lastResult: 72,
  },
  {
    id: 3,
    title: "Тест 3: Процедуры",
    questions: 25,
    duration: 40,
    lastResult: 91,
  },
  {
    id: 4,
    title: "Тест 4: Клиентский сервис",
    questions: 30,
    duration: 50,
    lastResult: 68,
  },
  {
    id: 5,
    title: "Тест 5: Продажи",
    questions: 35,
    duration: 60,
    lastResult: 79,
  },
  {
    id: 6,
    title: "Тест 6: Маркетинг",
    questions: 40,
    duration: 70,
    lastResult: 88,
  },
];

export const mockKnowledgeBase: KnowledgeBase[] = [
  { id: 1, topic: "Безопасность", materialsCount: 23 },
  { id: 2, topic: "Процедуры", materialsCount: 45 },
  { id: 3, topic: "Инструкции", materialsCount: 31 },
  { id: 4, topic: "Политики", materialsCount: 18 },
  { id: 5, topic: "Регламенты", materialsCount: 26 },
  { id: 6, topic: "FAQ", materialsCount: 52 },
];
