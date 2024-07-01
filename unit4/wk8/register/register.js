const newParticipantBtn = document.querySelector('#add');
let count = 1;

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
    const gradeTitle = document.createElement("p");
    const gradeSelect = document.createElement("select");

    //adding classes and ids
    newParticipant.classList
    //adding content

    //adding it to the HTML
    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(nameInput);
    actDiv.appendChild(actLabel);
    actDiv.appendChild(actInput);
    feeDiv.appendChild(feeLabel);
    feeDiv.appendChild(feeInput);
    dateDiv.appendChild(dateLabel);
    dateDiv.appendChild(dateInput);
    gradeDiv.appendChild(gradeTitle);
    gradeDiv.appendChild(gradeSelect);
    newParticipant.appendChild(newTitle);
    newParticipant.appendChild(nameDiv);
    newParticipant.appendChild(actDiv);
    newParticipant.appendChild(feeDiv);
    newParticipant.appendChild(dateDiv);
    newParticipant.appendChild(gradeDiv);


// const newParagraph = document.createElement("p");
// newParagraph.innerText = "Added with Javascript!";
// document.body.appendChild(newParagraph);

// const newImg = document.createElement("img");
// newImg.setAttribute("src", "https://picsum.photos/200");
// newImg.setAttribute("alt", "Random image.");
// document.body.appendChild(newImg);

// const newDiv = document.createElement("div");
// newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
// document.body.appendChild(newDiv);

// const newSec = document.createElement("section");
// newSec.innerHTML = "<h2>DOM Basics</h2><p>This was added through Javascript</p>";
// document.body.appendChild(newSec);
    // <section class="participant1">
    //         <p>Participant 1</p>
    //         <div class="item">
    //           <label for="fname"> First Name<span>*</span></label>
    //           <input id="fname" type="text" name="fname" value="" required />
    //         </div>
    //         <div class="item activities">
    //           <label for="activity">Activity #<span>*</span></label>
    //           <input id="activity" type="text" name="activity" />
    //         </div>
    //         <div class="item">
    //           <label for="fee">Fee ($)<span>*</span></label>
    //           <input id="fee" type="number" name="fee" />
    //         </div>
    //         <div class="item">
    //           <label for="date">Desired Date <span>*</span></label>
    //           <input id="date" type="date" name="date" />
    //         </div>
    //         <div class="item">
    //           <p>Grade</p>
    //           <select>
    //             <option selected value="" disabled selected></option>
    //             <option value="1">1st</option>
    //             <option value="2">2nd</option>
    //             <option value="3">3rd</option>
    //             <option value="4">4th</option>
    //             <option value="5">5th</option>
    //             <option value="6">6th</option>
    //             <option value="7">7th</option>
    //             <option value="8">8th</option>
    //             <option value="9">9th</option>
    //             <option value="10">10th</option>
    //             <option value="11">11th</option>
    //             <option value="12">12th</option>
    //           </select>
    //         </div>
    //       </section>





};

newParticipantBtn.addEventListener('click',participantTemplate());