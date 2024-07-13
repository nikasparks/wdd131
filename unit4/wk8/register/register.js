import { participantTemplate,newParticipantBtn, successTemplate, form } from "./Templates.js";

let count = 1;

newParticipantBtn.addEventListener('click', () => {
    count++;
    participantTemplate(count); 
 
});



function submitForm(event) {
    event.preventDefault();
    // do the rest of the stuff

    const adultName = document.querySelector('#adult_name').value;

    let participantList = [...document.querySelectorAll('[class^="participant"]')].map(element => element.className).slice(-1);
    console.log(participantList);

    const lastParticipant = participantList[participantList.length - 1];

    let participantTotal = lastParticipant[lastParticipant.length - 1];

    // let participantTotals = participantTotal[participantTotal.length - 1];

    const feeTotal = totalFees();

    const info = {
        adult: `${adultName}`,
        participants : `${participantTotal}`,
        cost: `${feeTotal}`
    };

    //const summary = 
    successTemplate(info);

    }



function totalFees() {
    // the selector below lets us grab any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
    // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
    // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
    // feeElements = [...feeElements];
    const feeAmounts = [...feeElements].map(element => parseFloat(element.value));

    // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
    // Remember that the text that was entered into the input element will be found in the .value of the element.
    let feeSum = feeAmounts.reduce((a, b) => a + b, 0);
    // once you have your total make sure to return it!
    

    return feeSum;
    
    };


    form.addEventListener('submit', submitForm);
    