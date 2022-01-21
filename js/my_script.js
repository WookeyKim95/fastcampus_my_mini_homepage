// 메뉴 이동
function set_menu(_menu) {
    // 메뉴 버튼 색깔 변경
    let menuButtons = document.querySelectorAll("aside ul li");
    menuButtons.forEach(function (menuButton) {
      menuButton.classList.remove("on");
    });
    document.querySelector("aside ul li." + _menu).classList.add("on");

    // 메뉴화면 변경
    document.querySelector("main").className = _menu;
  }

function show_pictures() {
    let gallery = document.querySelector("#gallery");

    pictures.forEach(function (picture){
        
        let pictureNode = document.querySelector("article.hidden").cloneNode(true);
        pictureNode.classList.remove("hidden");

        pictureNode.querySelector(".description").innerHTML = picture.description;
        pictureNode.querySelector(".picture").style.backgroundImage = "url('./img/gallery/"+ picture.file_name +"')";

        gallery.append(pictureNode);

    })
}

function update_who_am_I () {
  my_info.introduction = document.querySelector("#ip-intro").value;
  my_info.as = document.querySelector("#who_am_I input[type=radio]:checked").value;
  set_edit_who_am_I(false);
  show_who_am_I();
}

function show_who_am_I () {
  document.querySelector("#myName").innerHTML = my_info.name;
  document.querySelector("#myOld").innerHTML = my_info.old;
  document.querySelector("#myMajor").innerHTML = my_info.major;
  document.querySelector("#sp-intro").innerHTML = my_info.introduction;
  document.querySelector("#ip-intro").value = my_info.introduction;
  document.querySelector("#who_am_I input[type=radio][value=" + my_info.as + "]").checked = true;
}

function set_edit_who_am_I (on) {
  document.querySelector("#who_am_I > div").className = on ? "edit" : "non-edit";
  document.querySelectorAll("#who_am_I input").forEach(function (input) {
    input.disabled = !on;
  })
  // 취소했을 때 원상복구하기 위해
  show_who_am_I();
}

function init() {
      show_pictures();
      show_who_am_I();
  }