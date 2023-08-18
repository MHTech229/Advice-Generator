let adviceTitle = document.querySelector('.advice-title');
let advice = document.querySelector('.advice span');

advice.textContent = "Loading...";

function getAdvice() {
    const HTTP = new XMLHttpRequest();
    const url = 'https://api.adviceslip.com/advice';
    HTTP.open("GET", url);
    HTTP.send();

    HTTP.onreadystatechange=function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.responseText);
            console.log("Générer un nouveau conseil");
            console.log("response : ");
            console.log(response.slip);
            adviceTitle.textContent = `Advice ${response.slip.id}`;
            advice.textContent = response.slip.advice;
        }
    }
}

(()=>{
    getAdvice();
})();

document.getElementById("generator-btn").addEventListener("click", ()=>{
    getAdvice()
});