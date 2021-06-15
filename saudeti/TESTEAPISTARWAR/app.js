/* eslint-disable prefer-const */
let button = document.querySelector('#button')
let name = document.querySelector('#name')
let height = document.querySelector('#height')
let mass = document.querySelector('#mass')
let birthYear = document.querySelector('#birth-year')

function getInfo ()
{
  // eslint-disable-next-line prefer-const
  let randomNumber = Math.floor((Math.random() * 88) + 1)
  const apiUrl = 'https://swapi.dev/api/people/' + randomNumber

  axios.get(apiUrl).then(function (response) {
    updateInfo(response.data)
  })
}

function updateInfo (data) {
  name.innerText = data.name
  height.innerText = `Height: ${data.height}`
  mass.innerText = `Mass: ${data.mass}`
  birthYear.innerText = `Birth-Year: ${data.birth_year}`
}
button.addEventListener('click', getInfo)
