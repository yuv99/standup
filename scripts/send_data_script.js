let viewerInputs = document.getElementsByName("viewer_input");
let participantInputs = document.getElementsByName("participant_input");

let button_viewer = document.getElementsByClassName("viewer_button_send");
let button_participant = document.getElementsByClassName("participant_button_send");

let text;

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
                viewerInputs.item(i).style.borderColor = "red";
            }
        }
        text = document.createElement('p');
        text.textContent = "Заполните недостающие поля";
        text.style.color = "red";
        text.style.marginTop = "20px";
        text.style.textAlign = "center";
        button_viewer.item(0).after(text);
    }

    else if (isParticipantOpened) {
        for (let i = 0; i < participantInputs.length; i++) {
            if (participantInputs.item(i).value == '') {
                participantInputs.item(i).style.borderColor = "red";
            }
        }
        text = document.createElement('p');
        text.textContent = "Заполните недостающие поля";
        text.style.color = "red";
        text.style.marginTop = "20px";
        text.style.textAlign = "center";
        button_participant.item(0).after(text);
    }
    thanks();
}

function setBorder() {
    if (text!=null) {
        if(isViewerOpened) {
            this.style.borderColor = "#ffffff31";
            btnViewerParent.removeChild(text);
        }
        else if(isParticipantOpened) {
            this.style.borderColor = "#ffffff31";
            btnParticipantParent.removeChild(text);
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