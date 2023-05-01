function getnumber(num) {
    let result = document.getElementById("text");

    result.value += num;
}

function Back() {
    var str = document.getElementById("text").value;
    str = str.substr(0, str.length - 1);
    document.getElementById("text").value = str;
}