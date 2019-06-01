function calculate() {
    var firstnum = document.getElementById('firstnum').value;
    var secondnum = document.getElementById('secondnum').value;
    var result = +firstnum + +secondnum;
    document.getElementById('result').value = result;

    var y = document.getElementById('para');
    y.style.display = "block";


}