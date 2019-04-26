function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input = document.querySelector('input')
function retrieveEmployeeInformation() {
  return input.value
}

function addNewElementAsLi() {
  let employeeName = retrieveEmployeeInformation()
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${employeeName}</li>`)
}

function addNewLiOnClick() {
  let submit = document.querySelector('input[type="submit"]')
  submit.addEventListener('click', function (event) {
    addNewElementAsLi()
    resetInput()
  })
}

function clearEmployeeListOnLinkClick() {
  let ul = document.querySelector('ul')
  let button = document.querySelector('a')
  button.addEventListener('click', function (event) {
    ul.innerHTML = ''
  })
}

function resetInput(){
  document.querySelector('input').value = ''
}