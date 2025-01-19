interface Task {
  id: number;
  title: string;
  isSelected: boolean;
  isFavorite: boolean;
}

export const taskData: Task[] = [
  {
    id: 1,
    title: "Videollamada con el CEO",
    isSelected: true,
    isFavorite: true,
  },
  {
    id: 2,
    title: "Revisar documentación del proyecto",
    isSelected: false,
    isFavorite: false,
  },
  {
    id: 3,
    title: "Planificación de sprints",
    isSelected: false,
    isFavorite: true,
  },
  {
    id: 4,
    title: "Actualizar la base de datos",
    isSelected: true,
    isFavorite: false,
  },
  {
    id: 5,
    title: "Diseñar el nuevo dashboard",
    isSelected: false,
    isFavorite: true,
  },
  {
    id: 6,
    title: "Preparar la presentación del cliente",
    isSelected: false,
    isFavorite: false,
  },
  {
    id: 7,
    title: "Configurar el servidor",
    isSelected: true,
    isFavorite: false,
  },
  {
    id: 8,
    title: "Escribir casos de prueba",
    isSelected: false,
    isFavorite: true,
  },
  {
    id: 9,
    title: "Depurar errores en el módulo de pagos",
    isSelected: true,
    isFavorite: true,
  },
  {
    id: 10,
    title: "Crear manual de usuario",
    isSelected: false,
    isFavorite: false,
  },
  {
    id: 11,
    title: "Optimizar el rendimiento del sitio web",
    isSelected: false,
    isFavorite: true,
  },
  { id: 12, title: "Revisar contratos", isSelected: true, isFavorite: false },
  {
    id: 13,
    title: "Organizar reunión de equipo",
    isSelected: false,
    isFavorite: false,
  },
  {
    id: 14,
    title: "Actualizar diagramas de arquitectura",
    isSelected: true,
    isFavorite: true,
  },
  {
    id: 15,
    title: "Crear pruebas automatizadas",
    isSelected: false,
    isFavorite: false,
  },
];
