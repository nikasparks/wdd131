import { participantTemplate } from "./Templates";

const newParticipantBtn = document.querySelector('#add');
let count = 1;



newParticipantBtn.addEventListener('click', () => {
    count++;
    participantTemplate(count); 
 
});


