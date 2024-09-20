
const titles = [
    "شبكة ملوك سبأ نت",
    "Sabaa Net",
    "Sabaa Network",
    "شبكة سبأ نت",
    "Network Sabaa",
    "Сетевой Сабаа",
    "Netwerk Sabaa",
];

let titleIndex = 0;

function changeTitle() {
    document.getElementById('dynamic-title').innerText = titles[titleIndex];
    titleIndex = (titleIndex + 1) % titles.length;
}

setInterval(changeTitle, 5000);
