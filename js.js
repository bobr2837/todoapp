let createElement = (tagName,tagClass,tagContent) => {
   let tag =document.createElement(tagName)
   tag.setAttribute('class', tagClass)
   tag.innerHTML = tagContent


   return tag
}

let createButton = (buttonId,buttonClass,buttonContent,buttonHandler) => {
  let button = document.createElement('button')
  button.setAttribute('id',buttonId)
  button.setAttribute('class',buttonClass)
  button.innerHTML = buttonContent
  button.onclick = buttonHandler

  return button
}


mainButton.onclick = () => {
  let text = prompt("Введите что нибудь")

  let deleteButton = createButton(
     buttonId = 'deleteButton',
     buttonClass = 'todoElement__deleteButton',
     buttonContent = 'Удалить',
     buttonHandler = () => dive.style.display = 'none'
  )
  let updateButton = createButton (
    buttonId = 'updateButton',
    buttonClass = 'todoElement__updateButton',
    buttonContent = 'Изменить',
    buttonHandler = () => {
        let buttonText = prompt ('Введите изменненый текст')
        dive.children[3].innerHTML = buttonText
    }
  )

  let doneButton = createButton(
    buttonId = 'doneButton',
    buttonClass = 'todoElement__doneButton',
    buttonContent = 'Готово',
    buttonHandler = () => {
        dive.style.backgroundColor = 'rgba(70, 117, 219, 0.37)'
        doneButton.style.display = 'none'
        updateButton.style.display = 'none'
    }
  )
          
  let paragraph = createElement('p', 'todoElement__text',text)
  
  let dive = document.createElement('div')
  
  dive.setAttribute('class','todoElement' )
  dive.append(deleteButton)
  dive.append(updateButton)
  dive.append(doneButton)
  dive.append(paragraph)
  mainDiv.append(dive)
  }
