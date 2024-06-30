const newParticipant = document.querySelector('#add');
let count = 1;

function participantTemplate(count){

    const newParticipantSec = document.createElement("section");
    const newTitle = document.createElement("p");
    const nameDiv = document.createElement("div");
    const nameLabel = document.createElement("label");
    const nameinput = document.createElement("input");
    const actDiv = document.createElement("div");
    const actLabel = document.createElement("label");
    const actinput = document.createElement("input");
    const feeDiv = document.createElement("div");
    const feeLabel = document.createElement("label");
    const feeinput = document.createElement("input");
    const dateDiv = document.createElement("div");
    const dateLabel = document.createElement("label");
    const dateinput = document.createElement("input");
    const gradeDiv = document.createElement("div");
    const gradeTitle = document.createElement("p");
    const gradeSelect = document.createElement("select");

    <section class="participant1">
            <p>Participant 1</p>
            <div class="item">
              <label for="fname"> First Name<span>*</span></label>
              <input id="fname" type="text" name="fname" value="" required />
            </div>
            <div class="item activities">
              <label for="activity">Activity #<span>*</span></label>
              <input id="activity" type="text" name="activity" />
            </div>
            <div class="item">
              <label for="fee">Fee ($)<span>*</span></label>
              <input id="fee" type="number" name="fee" />
            </div>
            <div class="item">
              <label for="date">Desired Date <span>*</span></label>
              <input id="date" type="date" name="date" />
            </div>
            <div class="item">
              <p>Grade</p>
              <select>
                <option selected value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
          </section>





};

newParticipant.addEventListener('click',participantTemplate());
