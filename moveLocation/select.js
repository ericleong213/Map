function myfunction() {
  let places = {
    永援: { x: 113.560949, y: 22.201223 },
    八佰伴: { x: 113.55195, y: 22.194182 },
    游泳池: { x: 113.564338, y: 22.205551 },
    螺絲山公園: { x: 113.564183, y: 22.207227 },
  };

  const locationName = document.getElementById("myForm").elements[0].value;

  console.log("你選中的是" + locationName);

  let message = document.getElementById("message");
  message.innerHTML = "即將移動到" + locationName;

  window.setTimeout(
    function () {
      map.panTo(
        new BMap.Point(places[locationName]["x"], places[locationName]["y"])
      );
      message.innerHTML = "已到" + locationName;
      console.log("timeout after 2 seconds");
    },
    2000
    //     function () {
    //   map.panTo(new BMap.Point(places[locationName]);
    //   message.innerHTML = "已到" + locationName;
    // },
  );
}
function setNewCenter() {
  var Xmin = 113.553727;
  var Xmax = 113.566052;
  var Xresult = Math.random() * (Xmax - Xmin) + Xmin;

  var Ymin = 22.192273;
  var Ymax = 22.21583;
  var Yresult = Math.random() * (Ymax - Ymin) + Ymin;
  console.log(Xresult, Yresult);

  // var lng = 116.514 + Math.floor(Math.random() * 589828) / 1e6;
  // var lat = 39.416 + Math.floor(Math.random() * 514923) / 1e6;
  var point = new BMap.Point(Xresult, Yresult);
  map.setCenter(point); // 设置地图中心点
}

map.setDisplayOptions({
  poi: true, //是否显示POI信息
});
function showText() {
  map.setDisplayOptions({
    poiText: true,
  });
  console.log("showText");
}
function hideText() {
  map.setDisplayOptions({
    poiText: false,
  });
  console.log("hideText");
}
function showIcon() {
  map.setDisplayOptions({
    poiIcon: true,
  });
  console.log("showicon");
}
function hideIcon() {
  map.setDisplayOptions({
    poiIcon: false,
  });
  console.log("hideicon");
}
