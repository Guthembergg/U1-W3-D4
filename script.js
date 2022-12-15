const aggiungiClasseSelected = (event) => {
  const elementoCliccato = event.target;

  elementoCliccato.classList.toggle("selected");
};
const deleteTask = (event) => {
  const task = document.getElementById("list");

  const elemCLick = event.target;

  const class0 = Array.from(event.target.classList).join();
  console.log(event.target);
  const figlio = document.getElementsByClassName(class0);
  console.log(figlio);
  const figlio1 = Array.from(figlio);
  for (let i = 0; i < figlio1.length; i++) {
    task.removeChild(figlio1[i]);
    console.log(figlio1[i]);
  }
};
let i = 0;
const AggiungoTask = () => {
  const valoreInputField = document.getElementById("list-item-input").value;
  if (valoreInputField === "") {
    alert("write something");
  } else {
    const newDiv = document.createElement("li");
    const newButton = document.createElement("button");
    newButton.classList.add(`${i}`);
    newDiv.classList.add("list-items");
    newDiv.classList.add(`${i}`);
    newDiv.innerText = valoreInputField;
    newButton.onclick = deleteTask;
    newDiv.onclick = aggiungiClasseSelected;
    newDiv.appendChild(newButton);
    newButton.innerText = "delete";
    document.getElementById("list").appendChild(newDiv);

    document.getElementById("list-item-input").value = "";
    i++;
  }
};
