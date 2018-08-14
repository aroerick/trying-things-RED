import store from './redux/store'
import { incrementCount, decrementCount } from './redux/modules/counter'
import { updateCountName } from './redux/modules/name'

const incrementButton = document.getElementById("increment")
const decrementButton = document.getElementById("decrement")
const count = document.getElementById("count")
const nameInput = document.getElementById("name")
const countedName = document.getElementById("counted-name")

count.textContent = '0'

let unsubscribe = store.subscribe(() => console.log(store.getState()))

incrementButton.addEventListener("click", () => {
    store.dispatch(incrementCount())
    count.innerHTML = store.getState().counter.count
})
decrementButton.addEventListener("click", () => {
    store.dispatch(decrementCount())
    count.innerHTML = store.getState().counter.count
})
nameInput.addEventListener("input", () => {
    store.dispatch(updateCountName(nameInput.value))
    countedName.innerHTML = store.getState().name.userInput
})

unsubscribe()