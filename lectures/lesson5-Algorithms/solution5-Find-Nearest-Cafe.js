function findNearestCafe(cafes, tourist) {
    let minDistance = Infinity;
    let nearestCafe = null;

    for (let i = 0; i < cafes.length; i++) {
        let cafe = cafes[i];
        let distance = Math.sqrt(
            Math.pow(cafe.x - tourist.x, 2) + Math.pow(cafe.y - tourist.y, 2)
        );

        if (distance < minDistance) {
            minDistance = distance;
            nearestCafe = cafe;
        }
    }

    return nearestCafe;
}

const cafes = [
    { name: "Latte Heaven", x: 3, y: 7 },
    { name: "Pizza Corner", x: 5, y: 2 },
    { name: "Sushi Point", x: 9, y: 6 },
    { name: "Burger Land", x: 2, y: 3 },
    { name: "Coffee Time", x: 6, y: 8 }
];

const tourist = { x: 4, y: 5 }; // Координати туриста

const nearest = findNearestCafe(cafes, tourist);
console.log(`Найближче кафе: ${nearest.name} (${nearest.x}, ${nearest.y})`);

const cafesLviv = [
  { name: "Львівська копальня кави", x: 49.8415, y: 24.0322 },
  { name: "Дзиґа", x: 49.8409, y: 24.0298 },
  { name: "Вірменка", x: 49.8407, y: 24.0335 },
  { name: "Світ кави", x: 49.8412, y: 24.0305 },
  { name: "Кафе 1", x: 49.8418, y: 24.0315 },
  { name: "Золотий дукат", x: 49.8410, y: 24.0328 },
  { name: "Під синьою пляшкою", x: 49.8413, y: 24.0330 },
  { name: "Чорна кішка", x: 49.8405, y: 24.0295 },
  { name: "Білка", x: 49.8416, y: 24.0325 },
  { name: "Альтернативна кава", x: 49.8408, y: 24.0310 }
];

const touristLviv = { x: 49.8411, y: 24.0320 };

const nearestLviv = findNearestCafe(cafesLviv, touristLviv);
console.log(`Найближче кафе у Львові: ${nearestLviv.name} (${nearestLviv.x}, ${nearestLviv.y})`);
