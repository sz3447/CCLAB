
const correctCodes = {
    1: "7",
    2: "3",
    3: "5",
    4: "8",
    5: "2"
};

let unlockedCount = 0;

function unlockBox(boxNumber){
    const inputElement = document.getElementById(`input${boxNumber}`);
    const statusElement = document.getElementById(`box${boxNumber}`).querySelector('.status');

    const userCode = inputElement.value.trim();

    if (userCode === correctCodes[boxNumber]){
        statusElement.textContent = "Correct!";
        statusElement.style.color = "green";
        unlockedCount++;
    } else {
        statusElement.textContent = "Incorrect. Try Again";
        statusElement.style.color = "red";
    }

    if (unlockedCount === Object.keys(correctCodes).length){
        setTimeout(function(){
            window.location.href = "unlocked.html";
        }, 1000);
    }
}

