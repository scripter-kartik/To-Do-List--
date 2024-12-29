const inputBox = document.querySelector(".inputbox");
const listContainer = document.querySelector(".list");
const addTASK = document.querySelector(".addTask");


function addTask() {

    const list = document.createElement("li")

    if (inputBox.value === '') {
        alert("you must write something")
    }
    else {
        list.innerHTML = `${inputBox.value} <span >❎</span>`
        listContainer.appendChild(list)
    }

    inputBox.value  === ''

    list.addEventListener('click',
        function () {
            this.classList.toggle("lining");
        }
    )

    list.querySelector("span").
        addEventListener('click', function () {
            list.remove()
        })
}



