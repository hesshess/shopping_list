const items = document.querySelector('.items')
const input = document.querySelector('.footer__input')
const addBtn = document.querySelector('.footer__button')

function onAdd () {
  //1. getting the text that user wrote
  const text = input.value
  if (text === '') {
    input.focus()
    return
  }
  // 2. making a new item (text + delete Btn)
  const item = createItem(text)
  // 3. adding the new item to the items container
  items.appendChild(item)
  //   4. scrolling to the new item
  item.scrollIntoView({ block: 'center' })
  // 5. initialize the input
  input.value = ''
  input.focus()
}

function createItem (text) {
  const itemRow = document.createElement('li')
  itemRow.setAttribute('class', 'item__row')

  const item = document.createElement('div')
  item.setAttribute('class', 'item')

  const name = document.createElement('span')
  name.setAttribute('class', 'item__name')
  name.innerText = text

  const deleteBtn = document.createElement('button')
  deleteBtn.setAttribute('class', 'item__delete')
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'
  deleteBtn.addEventListener('click', () => {
    items.removeChild(itemRow)
  })
  const itemDivider = document.createElement('div')
  itemDivider.setAttribute('class', 'item__divider')

  item.appendChild(name)
  item.appendChild(deleteBtn)

  itemRow.appendChild(item)
  itemRow.appendChild(itemDivider)

  return itemRow
}

addBtn.addEventListener('click', () => {
  onAdd()
})

input.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    onAdd()
  }
  console.log('key')
})
