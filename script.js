function add() {
    event.preventDefault()
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    console.log(n1);
    console.log(n2);
    console.log(typeof(n1 + n2))
    document.getElementById("answer").value = n1 + n2
    document.getElementById("ans").style.display = "block"
}