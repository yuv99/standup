// получаем ссылку(и) зрителя
let viewerRegLink = document.getElementsByClassName("viewer_reg_link");
// получаем ссылку(и) участника
let participantRegLink = document.getElementsByClassName("participant_reg_link");
// общий массив для наших ссылок
let links = [ viewerRegLink.item(0), participantRegLink.item(0) ];

function popupOpen() {
    switch(this.name) {
        case "viewer_reg_link":
            popupViewerBlock.style.opacity = 1;
            popupViewerBlock.style.visibility = "visible";
            break;
        case "participant_reg_link":
            popupParticipantBlock.style.opacity = 1;
            popupParticipantBlock.style.visibility = "visible";
            break;
    }
}

// добавляем к ссылке событие "клик"
links[0].addEventListener("click", popupOpen);
links[1].addEventListener("click", popupOpen);



