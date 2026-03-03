const display = document.getElementById("display");
let history = []

function deleteLast() {
    display.value = display.value.slice(0, -1);
}


function appendToDisplay(input){
    display.value += input;
}

function calculatePercentage() {
    if (display.value !== "") {
        display.value = display.value / 100;
    }
}

function clearDisplay(){
    display.value = ""
}

function calculate() {
    try {
        let islem = display.value;
        let sonuc = eval(islem);

        if (islem !== "" && islem !== sonuc.toString()) {
            history.push(islem + " = " + sonuc); 
        }

        display.value = sonuc;
    }
    catch(error) {
        display.value = "Error"
    }
}

function showHistory() {
    const listEkrani = document.getElementById("historyList");
    const modal = document.getElementById("historyModal");

    listEkrani.innerHTML = "";

    if (history.length === 0) {
        let li = document.createElement("li");
        li.textContent = "no calculations yet";
        li.style.color = "#888";
        li.style.textAlign = "center";
        listEkrani.appendChild(li);
    } 
    else {
        history.forEach(item => {
            let li = document.createElement("li");
            li.textContent = item;
            listEkrani.appendChild(li);
        });
    }

    modal.style.display = "flex";
}

function closeHistory() {
    document.getElementById("historyModal").style.display = "none";
}