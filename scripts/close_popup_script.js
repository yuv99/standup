// получаем ссылки крестика
let closeViewer = document.getElementsByClassName("close_view");
let closeParticipant = document.getElementsByClassName("close_part");
let closeThanks = document.getElementsByClassName("close_thanks_popup");

// общий массив
let close = [ closeViewer.item(0), closeParticipant.item(0), closeThanks.item(0) ];

// получаем объектЫ класса popup_viewer
let popupViewerArr = document.getElementsByClassName("popup_viewer");
// получаем объектЫ класса popup_participant
let popupParticipantArr = document.getElementsByClassName("popup_participant");

let popupViewerBlock = popupViewerArr.item(0);
let popupParticipantBlock = popupParticipantArr.item(0);

function popupClose() {
    switch(this.name) {
        case "close_view":
            popupViewerBlock.style.opacity = 0;
            popupViewerBlock.style.visibility = "hidden";
            isViewerOpened = false;
            for(let i = 0; i < viewerInputs.length; i++) {
                viewerInputs.item(i).style.borderColor = "#ffffff31";
            }
            if (text!=null) {
                btnViewerParent.removeChild(text);
            }
           
            break;
        case "close_part":
            popupParticipantBlock.style.opacity = 0;
            popupParticipantBlock.style.visibility = "hidden";
            isParticipantOpened = false;
            for(let i = 0; i < participantInputs.length; i++) {
                participantInputs.item(i).style.borderColor = "#ffffff31";
            }
            if (text!=null) {
                btnParticipantParent.removeChild(text);
            }
            
            break;
        case "close_thanks_popup":
            popup_thanks.style.opacity = 0;
            popup_thanks.style.visibility = "hidden";
    } 
}


// добавляем к крестику событие "клик"
close[0].addEventListener("click", popupClose);
close[1].addEventListener("click", popupClose);
close[2].addEventListener("click", popupClose);