var flag = true;

function travel_nav() {
  document.getElementById("navigation__nav").style.opacity = '0';
  document.getElementById("navigation__background").style.opacity = '0';
  document.getElementById("navigation__list").style.opacity = "0";
  document.getElementById("navigation__nav").style.zIndex = "-100";
  document.getElementById("navigation__background").style.zIndex = "-100";
  document.getElementById("navigation__list").style.zIndex = "-100"
  document.getElementById("navi-toggle").checked = !document.getElementById("navi-toggle").checked;
  // console.log(document.getElementById("navi-toggle").checked);
  flag = false;
}

function toggle_op() {

  if (!flag) {
    document.getElementById("navigation__nav").style.opacity = "1";
    document.getElementById("navigation__background").style.opacity = "1";
    document.getElementById("navigation__list").style.opacity = "1"
    document.getElementById("navigation__nav").style.zIndex = "100";
    document.getElementById("navigation__background").style.zIndex = "100";
    document.getElementById("navigation__list").style.zIndex = "100"
    flag = false;
  }
}