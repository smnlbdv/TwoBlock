const containerGet = document.querySelector('.container_get--body')
const btnGet = document.querySelector('.getButton')
const slearSet = document.querySelector('.clearButton')
const setBtn = document.querySelector('.setButton')

setBtn.addEventListener('click', setInformation)
btnGet.addEventListener('click', getInformation)
slearSet.addEventListener('click', clearInfo)

function clearInfo () {
    const massInfo = document.querySelectorAll('.info')
    massInfo.forEach(item => {
        containerGet.removeChild(item)
    });
    btnGet.removeAttribute("disabled", "disabled")
}

function getInformation() {
    fetch('https://jsonplaceholder.typicode.com/users?_limit=7')
    .then ( response => {
        return response.json()
    })
    .then (data => {
        console.log(data)
        data.forEach(getItem => {
            containerGet.innerHTML += (`
            <div class="info">
                <p>Имя:${getItem.name}</p>
                <p>Фамилия:${getItem.username}</p>
                <p>Эмайл:${getItem.email}</p>
            </div>
            `)
        });
    })
    btnGet.setAttribute("disabled", "disabled")
}   

function setInformation () {
    const name = document.querySelector('.name-input').value
    const last_name = document.querySelector('.last_name-input').value
    const email = document.querySelector('.email-input').value
    const age = document.querySelector('.age-input').value
    const nameDoge = document.querySelector('.doge-input').value
    valueInput = {
        name: name,
        lastName: last_name,
        email: email,
        age: age,
        nameDoge: nameDoge,
    }
    
    fetch('https://jsonplaceholder.typicode.com/users?_limit=4', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(valueInput)
      });

    let selector = document.querySelector('.container_set').querySelectorAll('input')
    selector.forEach(function (item) {
        item.value = "";
      });
}