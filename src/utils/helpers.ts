import { Employee } from "@/types";

export const getStatusColor = (status: Employee["status"]): string => {
  switch (status) {
    case "green":
      return "bg-green-500";
    case "yellow":
      return "bg-yellow-500";
    case "red":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

export const getStatusText = (status: Employee["status"]): string => {
  switch (status) {
    case "green":
      return "Высокий уровень";
    case "yellow":
      return "Средний уровень";
    case "red":
      return "Требует внимания";
    default:
      return "Не определен";
  }
};

export const getUserRoleLabel = (role: string): string => {
  switch (role) {
    case "employee":
      return "Сотрудник";
    case "manager":
      return "Руководитель";
    case "hr":
      return "HR";
    case "admin":
      return "Администратор";
    default:
      return "Неизвестно";
  }
};

export const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
};
