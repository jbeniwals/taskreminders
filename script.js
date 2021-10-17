const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const input = document.getElementById("input");
const err = document.getElementById("err");
const response = document.getElementById("response");
const Yname = document.getElementById("ynamme");





const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const Recognition = new SpeechRecognition;


const chatbot = (msg) => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Task is Added";
    speech.pitch = 1;
    speech.rate = .8;
    speech.volume = 0.3;
    speech.lang = "en-GB"
    window.speechSynthesis.speak(speech);
}

btn2.addEventListener("click", () => {
    const inputval = input.value;
    if (inputval == "") {
        err.innerHTML = "Please Enter Value"
    }
    else {
        input.value = "";
        err.innerHTML = "";
        var localstorage = localStorage.getItem("tasks");
        if (localstorage == null) {
            tasks = [];

        } else {
            tasks = JSON.parse(localstorage);
        }
        chatbot();
        tasks.push(inputval);

        localStorage.setItem("tasks", JSON.stringify(tasks));
        showitem();
    }
})
const showitem = () => {
    var localstorage = localStorage.getItem("tasks");
    if (localstorage == null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localstorage);
    }
    let html = "";
    tasks.forEach((val, i) => {
        html += `<p  id="response" onclick={deletesi(${i})} >${val}</p>
        <p style="padding:12px;" ><p>`;
    })
    response.innerHTML = html;
}
showitem();

deletesi = (i) => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Deleted";
    speech.pitch = 1;
    speech.rate = 1;
    speech.volume = 0.3;
    speech.lang = "en-GB"
    window.speechSynthesis.speak(speech);
    var localstorage = localStorage.getItem("tasks");
    let tasks = JSON.parse(localstorage);
    tasks.splice(i, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showitem();

}

