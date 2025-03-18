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
