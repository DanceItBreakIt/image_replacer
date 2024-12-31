function saveinput() {
    let userInput = document.getElementById("save").value;
    localStorage.setItem("userInput", userInput);
}