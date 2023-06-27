const addLastHourToList = (list, text) => {
    const li = document.createElement('li')
    li.textContent = text
    list.appendChild(li)
}

const subscribe = () => {
    const list = document.querySelector('body ul')
    fetch('/timer')
        .then(response => response.text())
        .then(text => addLastHourToList(list, text))
        .catch(error => console.error('Error:', error))
        .finally(() => subscribe())
}

subscribe()
