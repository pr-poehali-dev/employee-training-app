export interface Employee {
  id: number;
  name: string;
  department: string;
  position: string;
  email: string;
  score: number;
  status: "red" | "yellow" | "green";
  tests: number;
  avgScore: number;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  progress: number;
  status: "available" | "in_progress" | "completed";
}

export interface Test {
  id: number;
  title: string;
  questions: number;
  duration: number;
  lastResult: number;
}

export interface KnowledgeBase {
  id: number;
  topic: string;
  materialsCount: number;
}

export type UserRole = "employee" | "manager" | "hr" | "admin";

export type ViewState = "landing" | "dashboard";
