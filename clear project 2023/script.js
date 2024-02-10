

// const is keyword its using a declare a body ndrae variable hae declare panae use aguthu.
// document nrathu html code 
// queryselector ( name,id,class)its also slectors tha ("  ulla irukae class names laa")reference to the element.
const body = document.querySelector("body");
const sidebar = document.querySelector(".sidebar");
const submenuItems = document.querySelectorAll(".submenu_item");
const sidebarOpen = document.querySelector("#sidebarOpen");
const sidebarClose = document.querySelector(".collapse_sidebar");
const sidebarExpand = document.querySelector(".expand_sidebar");

// sm or mobille view laa menubar ah click panahh sidebar open agum adhuku use pandrathu tha toggle() method use panirukanage.

sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

// sidebar close pandrathuku addevntlistner use pani click ndrAE ARGUMENT OR ACTION hae ()=> pass pandrom add event use pani close and hver effect thraom

sidebarClose.addEventListener("click", () => {
  sidebar.classList.add("close", "hoverable");
}); 

// fixed or freeze option ku remove event use pandrom remove event close option nae remove pani freeze panidum.

sidebarExpand.addEventListener("click", () => {
  sidebar.classList.remove("close", "hoverable");
});

//  remove event use pani  mouse vacha vudanae hover effect nala side bar open  agum and mouseenter use pani click panhh open and close agum sidebar and fixed stay position.

sidebar.addEventListener("mouseenter", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
  }
});

// mouse leave event use pani mouse cursor hae eduthudahh hover effect close agi side bar close agitum

sidebar.addEventListener("mouseleave", () => {
  if (sidebar.classList.contains ("hoverable")) {
    sidebar.classList.add("close");
  }
});

// idhula submenu click panahh kizhae dropdown agi listout aganum.aduku foreach() idhu kula irukae element array concept show panum, method use pandrom idhu array concept laa list out panum (item.index)idhu common item ( submenu items hae mention) index ( )listout pana use agum addeventlistener use pani click panahhh
//  data pass pani addeventlisterner muliyama click pani data pass pani item lam toggle method () use pani show_submenus item yellam click panaahhh show agum,
// index means 0 its means array 0 to 1 listing items 
submenuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show_submenu");
  });
});

// windows  innerwidth (innerwidth nahh browser view port or web page view port size) size 768 yae vidae adhigama irundha sidebar open laa irukum comiyah iruundha side bar close laa irukum
    // nama mobile or tab laa use panum podhu sidebar open laa irudndha content hide agum so sidear akidum

if (window.innerWidth < 768) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}
