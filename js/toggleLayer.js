let toggleableLayerIds = ["road-slope"];
for (let i = 0; i < toggleableLayerIds.length; i++) {
  const id = toggleableLayerIds[i];

  const link = document.createElement("a");
  link.href = "#";
  link.className = "active";
  link.textContent = id;

  link.onclick = function (e) {
    const clickedLayer = this.textContent;
    e.preventDefault();
    e.stopPropagation();

    let visibility = map.getLayoutProperty(clickedLayer, "visibility");

    // toggle layer visibility by changing the layout object's visibility property
    if (visibility === "visible") {
      map.setLayoutProperty(clickedLayer, "visibility", "none");
      this.className = "";
    } else {
      this.className = "active";
      map.setLayoutProperty(clickedLayer, "visibility", "visible");
    }
  };

  var layers = document.getElementById("menu");
  layers.appendChild(link);
}
