export { participantTemplate };

// const newParticipantBtn = document.querySelector('#add');

function participantTemplate(count){
    
    //create new elements
    const newParticipant = document.createElement("section");
    const newTitle = document.createElement("p");
    const nameDiv = document.createElement("div");
    const nameLabel = document.createElement("label");
    const nameInput = document.createElement("input");
    const actDiv = document.createElement("div");
    const actLabel = document.createElement("label");
    const actInput = document.createElement("input");
    const feeDiv = document.createElement("div");
    const feeLabel = document.createElement("label");
    const feeInput = document.createElement("input");
    const dateDiv = document.createElement("div");
    const dateLabel = document.createElement("label");
    const dateInput = document.createElement("input");
    const gradeDiv = document.createElement("div");
    const gradeLabel = document.createElement("p");
    const gradeSelect = document.createElement("select");
    const gradeOption0 = document.createElement("option");
    const gradeOption1 = document.createElement("option");
    const gradeOption2 = document.createElement("option");
    const gradeOption3 = document.createElement("option");
    const gradeOption4 = document.createElement("option");
    const gradeOption5 = document.createElement("option");
    const gradeOption6 = document.createElement("option");
    const gradeOption7 = document.createElement("option");
    const gradeOption8 = document.createElement("option");
    const gradeOption9 = document.createElement("option");
    const gradeOption10 = document.createElement("option");
    const gradeOption11 = document.createElement("option");
    const gradeOption12 = document.createElement("option");

    //adding classes and ids
    newParticipant.classList.add(`participant${count}`);
    nameDiv.classList.add("item");
    actDiv.classList.add("item", "activities");
    feeDiv.classList.add("item");
    dateDiv.classList.add("item");
    gradeDiv.classList.add("item");
    nameInput.id = `fname${count}`;
    actInput.id = `activity${count}`;
    feeInput.id = `fee${count}`;
    dateInput.id = `date${count}`;
    gradeDiv.classList.add('item');

    //setting attributes
    nameLabel.setAttribute('for',`fname${count}`);
    nameInput.setAttribute('type','text');
    nameInput.setAttribute('name',`fname${count}`);
    nameInput.setAttribute('value','');
    nameInput.setAttribute('required','true');
    actLabel.setAttribute('for',`activity${count}`);
    actInput.setAttribute('type','text');
    actInput.setAttribute('name',`activity${count}`);
    feeLabel.setAttribute('for',`fee${count}`);
    feeInput.setAttribute('type','number');
    feeInput.setAttribute('name',`fee${count}`);
    dateLabel.setAttribute('for',`date${count}`);
    dateInput.setAttribute('type','date');
    dateInput.setAttribute('name',`date${count}`);
    gradeOption0.setAttribute('selected','true');
    gradeOption0.setAttribute('value','');
    gradeOption0.setAttribute('disabled','true');
    gradeOption1.setAttribute('value','1');
    gradeOption2.setAttribute('value','2');
    gradeOption3.setAttribute('value','3');
    gradeOption4.setAttribute('value','4');
    gradeOption5.setAttribute('value','5');
    gradeOption6.setAttribute('value','6');
    gradeOption7.setAttribute('value','7');
    gradeOption8.setAttribute('value','8');
    gradeOption9.setAttribute('value','9');
    gradeOption10.setAttribute('value','10');
    gradeOption11.setAttribute('value','11');
    gradeOption12.setAttribute('value','12');

    //adding content
    newTitle.innerHTML = `Participant ${count}`;
    nameLabel.innerHTML = "First Name<span>*</span>";
    actLabel.innerHTML = "Activity<span>*</span>";
    feeLabel.innerHTML = "Fee ($)<span>*</span>";
    dateLabel.innerHTML = "Desired Date<span>*</span>";
    gradeLabel.textContent = "Grade";
    gradeOption1.textContent = "1st";
    gradeOption2.textContent = "2nd";
    gradeOption3.textContent = "3rd";
    gradeOption4.textContent = "4th";
    gradeOption5.textContent = "5th";
    gradeOption6.textContent = "6th";
    gradeOption7.textContent = "7th";
    gradeOption8.textContent = "8th";
    gradeOption9.textContent = "9th";
    gradeOption10.textContent = "10th";
    gradeOption11.textContent = "11th";
    gradeOption12.textContent = "12th";

    //adding it to the HTML
    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(nameInput);
    actDiv.appendChild(actLabel);
    actDiv.appendChild(actInput);
    feeDiv.appendChild(feeLabel);
    feeDiv.appendChild(feeInput);
    dateDiv.appendChild(dateLabel);
    dateDiv.appendChild(dateInput);
    gradeDiv.appendChild(gradeLabel);
    
    gradeSelect.appendChild(gradeOption0);
    gradeSelect.appendChild(gradeOption1);
    gradeSelect.appendChild(gradeOption2);
    gradeSelect.appendChild(gradeOption3);
    gradeSelect.appendChild(gradeOption4);
    gradeSelect.appendChild(gradeOption5);
    gradeSelect.appendChild(gradeOption6);
    gradeSelect.appendChild(gradeOption7);
    gradeSelect.appendChild(gradeOption8);
    gradeSelect.appendChild(gradeOption9);
    gradeSelect.appendChild(gradeOption10);
    gradeSelect.appendChild(gradeOption11);
    gradeSelect.appendChild(gradeOption12);
    gradeDiv.appendChild(gradeSelect);

    newParticipant.appendChild(newTitle);
    newParticipant.appendChild(nameDiv);
    newParticipant.appendChild(actDiv);
    newParticipant.appendChild(feeDiv);
    newParticipant.appendChild(dateDiv);
    newParticipant.appendChild(gradeDiv);

    newParticipantBtn.parentNode.insertBefore(newParticipant, newParticipantBtn);

};