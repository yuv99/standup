// получаем ссылки крестика
let closeViewer = document.getElementsByClassName("close_view");
let closeParticipant = document.getElementsByClassName("close_part");

// общий массив
let close = [ closeViewer.item(0), closeParticipant.item(0) ];

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
            break;
        case "close_part":
            popupParticipantBlock.style.opacity = 0;
            popupParticipantBlock.style.visibility = "hidden";
            break;
    }
}

// добавляем к крестику событие "клик"
close[0].addEventListener("click", popupClose);
close[1].addEventListener("click", popupClose);