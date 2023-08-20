const cat = {
  legs: 3,
  name: "Гармония",
  color: "Черепаховый",
};

console.log(cat);
console.log(Object.keys(cat)); // посмотреть все ключи обьекта
cat.age = 18; // добавление в обьект
console.log(cat);
// через точку можно добавлять только в обьектах.в массивах не работает.
// ключи в обьекте могу храниться в рандомном порядке.

const dino = [
  { name: "Тиранозавр", period: "Верномольский" },
  { name: "Ставгозавр", period: "Верноюрский" },
  { name: "Платеозавр", period: "Триасовый" },
];
console.log(dino[1].name);

const anna = { name: "Анна", age: 11, luckyNumbers: [2, 4, 8, 16] };
const dave = { name: "Дэйв", age: 5, luckyNumbers: [3, 9, 40] };
const kate = { name: "Кейт", age: 9, luckyNumbers: [1, 2, 3] };

const friends = [anna, dave, kate];
console.log(friends);

const movies = {
  "В поисках Немо": {
    releaseDate: 2003,
    duration: 100,
    actors: ["Альберт Брукс", "Эллен Дедженерес", "Александр Гоулд"],
    format: "DVD",
  },
  "Звездные войны: Эпизод VI — Возвращение джедая": {
    releaseDate: 1983,
    duration: 134,
    actors: ["Марк Хэмилл", "Харрисон Форд", "Кэрри Фишер"],
    format: "DVD",
  },
  "Гарри Поттер и Кубок огня": {
    releaseDate: 2005,
    duration: 157,
    actors: ["Дэниел Рэдклифф", "Эмма Уотсон", "Руперт Гринт"],
    format: "Blu-ray",
  },
};

console.log(movies["Звездные войны: Эпизод VI — Возвращение джедая"].format);


const myCrazyObject = {
"name": "Нелепый объект",
"some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
"random animal": "Банановая акула"
};

console.log(myCrazyObject["some array"][2].number);