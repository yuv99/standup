let viewerInputs = document.getElementsByName("viewer_input");
let participantInputs = document.getElementsByName("participant_input");

let button_viewer = document.getElementsByClassName("viewer_button_send");
let button_participant = document.getElementsByClassName("participant_button_send");

let text;

let flag = false;
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
                flag = true;
                cleanData("viewer");
                thanks();
            }

            else {
                text = document.createElement('p');
                text.textContent = "Заполните недостающие поля";
                text.style.color = "red";
                text.style.marginTop = "20px";
                text.style.textAlign = "center";
                button_viewer.item(0).after(text);
                count = 0;
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
                flag = true;
                cleanData("partic");
                thanks();
            }
            else {
                text = document.createElement('p');
                    text.textContent = "Заполните недостающие поля";
                    text.style.color = "red";
                    text.style.marginTop = "20px";
                    text.style.textAlign = "center";
                    button_participant.item(0).after(text);
                    count = 0;
            }
        }
}

function setBorder() {
        if(isViewerOpened) {
            this.style.borderColor = "#ffffff31";
            if (text!=null) {
                btnViewerParent.removeChild(text);
            }
            
        }
        else if(isParticipantOpened) {
            this.style.borderColor = "#ffffff31";
            if (text!=null) { 
                btnParticipantParent.removeChild(text);
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