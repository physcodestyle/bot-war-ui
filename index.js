function addWin(player) {
  const tableWin = document.getElementsByClassName('table__player-wins')[player - 1]
  const currentValue = tableWin.innerText
  tableWin.innerText = Number(currentValue) + 1
}

function createMap(size) {
  const map = document.querySelector('.map')
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const cell = document.createElement('div')
      cell.classList.add('map__cell')
      cell.setAttribute('data-row', `${i + 1}`)
      cell.setAttribute('data-col', `${j + 1}`)
      map.appendChild(cell)
    }
  }
}

function clearMap() {
  const map = document.querySelector('.map')
  const removingClasses = [
    'map__cell--bot',
    'map__cell--bot-1',
    'map__cell--bot-2',
    'map__cell--bot-row-1',
    'map__cell--bot-row-2',
    'map__cell--bot-row-3',
    'map__cell--bot-col-1',
    'map__cell--bot-col-2',
    'map__cell--bot-col-3',
    'map__cell--bot-vertical',
    'map__cell--bot-horizontal',
  ]
  for (const cell of map.childNodes) {
    if (cell.nodeType === 1) {
      for (const removingClass of removingClasses) {
        if (cell.classList.contains(removingClass)) {
          cell.classList.remove(removingClass)
        }
      }
    }
  }
}

function addBot(mapSize, top, left, player = 1, isVertical = true) {
  const map = document.querySelector('.map')
  const topOffset = (top - 1) * mapSize
  for (let i = 0; i < (isVertical ? 3 : 2); i++) {
    const leftOffset = topOffset + left + i * mapSize
    for (let j = 0; j < (isVertical ? 2 : 3); j++) {
      const botCell = map.childNodes.item(leftOffset + j)
      botCell.classList.add('map__cell--bot')
      botCell.classList.add(`map__cell--bot-row-${i + 1}`)
      botCell.classList.add(`map__cell--bot-col-${j + 1}`)
      botCell.classList.add(`map__cell--bot-${player}`)
      botCell.classList.add(`map__cell--bot-${isVertical ? 'vertical' : 'horizontal'}`)
    }
  }
}

function addShot(mapSize, top, left) {
  const map = document.querySelector('.map')
  const topOffset = (top - 1) * mapSize
  const leftOffset = topOffset + left
  console.log(leftOffset)
  const shotCell = map.childNodes.item(leftOffset)
  shotCell.classList.add('map__cell-shot')
}

function init(size) {
  const root = document.querySelector(':root')
  root.style.setProperty('--map-size', String(size))
  createMap(size)
}

init(64)
