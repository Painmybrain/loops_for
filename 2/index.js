const cities = ['Москва', 'Рим', 'Париж', 'Сеул', 'Иркутск', 'Челябинск'];
const temperature = [];
for (let i = 1; i < cities.length; i++) {
  let cityTemp = prompt(`Введите температуру для города ${cities[i]}`);
  temperature.push(Number(cityTemp));
  const cityList = document.querySelector('.city_list');
  let cityItem = document.createElement('li');
  cityItem.textContent = `Температура в городе ${cities[i]}: ${cityTemp}`;
  cityList.append(cityItem);


}

let maxTemp = Math.max(...temperature);
let minTemp = Math.min(...temperature);
console.log(maxTemp)

let minTempContent = document.querySelector('.min_temp');
minTempContent.textContent = `Минимальная температура: ${minTemp}`;

let maxTempContent = document.querySelector('.max_temp');
maxTempContent.textContent = `Максимальная температура: ${maxTemp}`;