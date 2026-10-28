# Auditoría de Usabilidad y UX/UI - Aplicación de Notas

## 1. Tabla de Evaluación Heurística (Nielsen)

| Heurística | Problema Detectado (Original) | Solución Aplicada (Rediseño) |
| :--- | :--- | :--- |
| **Visibilidad del estado** | Al guardar o borrar una nota no había feedback; no se sabía si la acción tuvo éxito. | Se implementó un contenedor dinámico con `role="status"` que informa acciones ("¡Nota agregada con éxito!", "Nota eliminada"). |
| **Coincidencia con el mundo real** | Uso de términos técnicos y confusos en botones y opciones. | Lenguaje accesible y cercano ("Guardar nota", "Limpiar campos", "Título", "Detalle"). |
| **Control y libertad del usuario** | Al presionar eliminar, la nota se borraba de inmediato sin opción a cancelar. | Se incorporó una confirmación explícita (`confirm()`) previa a la eliminación destructiva. |
| **Prevención de errores** | Se podían enviar notas vacías que rompían el listado o generaban registros en blanco. | Validaciones estrictas con HTML5 (`required`) y bloqueo con `checkValidity()` en JS antes del guardado. |
| **Reconocer antes que recordar** | Los campos dependían de placeholders invisibles al escribir. | Uso de etiquetas `<label>` visibles permanentemente vinculadas mediante atributos `for` e `id`. |

---

## 2. Justificación de Leyes de Usabilidad

* **Ley de Fitts:** El botón principal "Guardar nota" cuenta con una altura mínima de 44px, ocupa la mayor parte del ancho disponible (`flex: 1`) y mantiene un margen adecuado de separación respecto al botón secundario para evitar clics accidentales.
* **Ley de Hick:** Se eliminaron campos innecesarios dejando solo el título y detalle del texto, reduciendo al mínimo la cantidad de opciones e inputs requeridos para tomar la acción.
* **Ley de Miller:** La interfaz se dividió en dos bloques claros y ordenados numeradamente ("1. Crear nueva nota" y "2. Mis Notas Guardadas"), evitando sobrecargar la memoria de trabajo del usuario.

---

## 3. Registro de Accesibilidad y Resultados Lighthouse

* **Contraste WCAG 2.2:** Texto principal `#1f2933` sobre fondo blanco `#ffffff` (ratio de contraste aprox. 14.7:1, superando el mínimo requerido de 4.5:1).
* **Navegación por Teclado:** Estilos explícitos `:focus-visible` con borde amarillo/naranja de 3px sin anular el foco nativo.
* **Resultado Lighthouse:** Puntaje de Accesibilidad obtenido: 100/100.