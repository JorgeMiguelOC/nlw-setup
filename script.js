const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", addHabits)
form.addEventListener("change", saveData)

function addHabits() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, 5)

  if (nlwSetup.dayExists(today)) {
    alert("Dia já adicionado")
    return
  }
  nlwSetup.addDay(today)
}

function saveData() {
  localStorage.setItem("saveDataNLW@habits", JSON.stringify(nlwSetup.data))
}

// const data = {
//   healthyFood: ["01-20", "01-21", "01-22"],
//   read: ["01-20", "01-23", "01-27"],
//   run: ["01-20", "01-24", "01-25"],
//   games: ["01-20", "01-22", "01-23"]
// }

const data = JSON.parse(localStorage.getItem("saveDataNLW@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
