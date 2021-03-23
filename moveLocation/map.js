var map = new BMapGL.Map("container"); // 创建Map实例
map.centerAndZoom(new BMapGL.Point(113.557516, 22.205986), 15); // 初始化地图,设置中心点坐标和地图级别
map.enableScrollWheelZoom(false); // 开启鼠标滚轮缩放

// map.setDisplayOptions({
//   poi: true, //是否显示POI信息
// });

// var school = document.getElementById("button");
// school.addEventListener("click", panTo);

// const myform = document.getElementById("form");

// myform.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("form has been submitted");
// });

// function panTo() {
//   window.setTimeout(function () {
//     map.panTo(new BMapGL.Point(113.560949, 22.201223));
//   }, 1000);
//   console.log(school);
// }
