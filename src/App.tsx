import { MapContainer, TileLayer } from "react-leaflet";
import "./App.css";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import mahalla from "./assets/maxalla.json";
import mahalla2 from "./assets/maxalla_3.json";
import mahalla4 from "./assets/maxalla_4.json";
import L from "leaflet";

function App() {
  const [map, setMap] = useState<any>(null);

  function removeEmptyRowsFromPopupContent(content: string, feature: any) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = content;
    const rows = tempDiv.querySelectorAll("tr");
    for (const element of rows) {
      const td = element.querySelector("td.visible-with-data");
      const key = td ? td.id : "";
      if (
        td?.classList.contains("visible-with-data") &&
        feature.properties[key] == null
      ) {
        element.parentNode?.removeChild(element);
      }
    }
    return tempDiv.innerHTML;
  }

  function pop_parcels_0(feature: any, layer: any) {
    console.log(feature.properties);

    const popupContent = `<table></table>`;
    layer.bindPopup(popupContent, { maxHeight: 400 });
    const popup = layer.getPopup();
    const content = popup.getContent();
    const updatedContent = removeEmptyRowsFromPopupContent(content, feature);
    popup.setContent(updatedContent);
  }

  console.log(mahalla, map);
  useEffect(() => {
    if (map) {
      const bounds_group = L.featureGroup([]);

      const layer = L.geoJson(mahalla4, {
        attribution: "",
        interactive: true,
        // dataVar: "json_parcels_0",
        layerName: "layer",
        // pane: "pane_parcels_0",
        onEachFeature: pop_parcels_0,
        // style: {
        //   pane: "pane_parcels_0",
        //   opacity: 1,
        //   color: "rgba(35,35,35,1.0)",
        //   dashArray: "",
        //   lineCap: "butt",
        //   lineJoin: "miter",
        //   weight: 1.0,
        //   fill: true,
        //   fillOpacity: 1,
        //   fillColor: "rgba(145,82,45,1.0)",
        //   interactive: true,
        // },
      });
      bounds_group.addLayer(layer);
      map.addLayer(layer);
    }
  }, [map]);

  return (
    <div style={{ width: "50vw", height: "50vh" }}>
      <MapContainer
        center={[39.7343782, 65.9952861]}
        style={{ width: "100%", height: "100%" }}
        zoom={13}
        ref={setMap}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution="G"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default App;
