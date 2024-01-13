let viewerInputs = document.getElementsByName("viewer_input");
let participantInputs = document.getElementsByName("participant_input");

let button_viewer = document.getElementsByClassName("viewer_button_send");
let button_participant = document.getElementsByClassName("participant_button_send");

let text_participant;
let text_viewer;

let count = 0;

let popup_thanks = document.getElementsByClassName("popup_thanks").item(0);

let btnViewerParent = button_viewer.item(0).parentNode;
let btnParticipantParent = button_participant.item(0).parentNode;

function thanks() {
    popupViewerBlock.style.opacity = 0;
    popupViewerBlock.style.visibility = "hidden";
    isViewerOpened = false;
    
    popupParticipantBlock.style.opacity = 0;
    popupParticipantBlock.style.visibility = "hidden";
    isParticipantOpened = false;

    popup_thanks.style.opacity = 1;
    popup_thanks.style.visibility = "visible";
}

function sendData() {
        if (isViewerOpened) {
            for (let i = 0; i < viewerInputs.length; i++) {
                if (viewerInputs.item(i).value == '') {
                    count++;
                    viewerInputs.item(i).style.borderColor = "red";
                }
            }
            if (count == 0) {
                cleanData("viewer");
                thanks();
            }

            else {
                if (!text_viewer) {
                    text_viewer = document.createElement('p');
                    text_viewer.textContent = "Заполните недостающие поля";
                    text_viewer.style.color = "red";
                    text_viewer.style.marginTop = "20px";
                    text_viewer.style.textAlign = "center";
                    button_viewer.item(0).after(text_viewer);
                    count = 0;
                }
               
            }
        }
    
        else if (isParticipantOpened) {
            for (let i = 0; i < participantInputs.length; i++) {
                if (participantInputs.item(i).value == '') {
                    count++;
                    participantInputs.item(i).style.borderColor = "red";
                    
                }
            }
            if (count == 0) {
                cleanData("partic");
                thanks();
            }
            else {
                if (!text_participant) {
                    text_participant = document.createElement('p');
                    text_participant.textContent = "Заполните недостающие поля";
                    text_participant.style.color = "red";
                    text_participant.style.marginTop = "20px";
                    text_participant.style.textAlign = "center";
                    button_participant.item(0).after(text_participant);
                    count = 0;
                }
                
            }
        }
}

function setBorder() {
        if(isViewerOpened) {
            this.style.borderColor = "#ffffff31";
            if (text_viewer) {
                btnViewerParent.removeChild(text_viewer);
                text_viewer = null;
            }
            
        }
        else if(isParticipantOpened) {
            this.style.borderColor = "#ffffff31";
            if (text_participant) { 
                btnParticipantParent.removeChild(text_participant);
                text_participant=null;
            }
           
        }
    }

function cleanData(name) {
    if (name == "viewer") {
        for (let i = 0; i < viewerInputs.length; i++) {
            viewerInputs.item(i).value = '';
        }
    }
    else if (name == "partic") {
        for (let i = 0; i < participantInputs.length; i++) {
            participantInputs.item(i).value = '';
        }
    }
}

button_viewer.item(0).addEventListener("click", sendData);
button_participant.item(0).addEventListener("click", sendData);

for(let i = 0; i < viewerInputs.length; i++) {
    viewerInputs.item(i).addEventListener("click", setBorder);
}

for(let i = 0; i < participantInputs.length; i++) {
    participantInputs.item(i).addEventListener("click", setBorder);
}