var date = new Date(Date.now());
const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};


document.querySelector("#currDate").textContent = date.toLocaleDateString('en-UK', options);

document.querySelector("#currentyear").textContent = date.getFullYear();