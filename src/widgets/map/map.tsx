/* eslint-disable @typescript-eslint/no-explicit-any */
import L, { Map } from "leaflet";
import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { type Feature, type Geometry } from "geojson";

import "leaflet/dist/leaflet.css";
import { MapLayers } from "./map-layers";

function removeEmptyRowsFromPopupContent(feature: Feature<Geometry, any>) {
  const properties = Object.keys(feature.properties);
  let tempDiv = "";
  for (const prop of properties) {
    tempDiv += `<div>${prop}: ${feature.properties[prop]}</div>`;
  }
  return tempDiv;
}

function renderPopups(feature: Feature<Geometry, any>, layer: L.Layer) {
  layer.bindPopup(`<div></div>`, { maxHeight: 400 });
  const popup = layer.getPopup();
  if (!popup) return;
  const content = popup.getContent();
  if (!content) return;

  const updatedContent = removeEmptyRowsFromPopupContent(feature);
  popup.setContent(updatedContent);
}

export const MapView = () => {
  const [layers, setLayers] = useState<Layer[]>([]);
  const [map, setMap] = useState<Map | null>(null);

  const addLayer = (layer: L.Layer) => {
    if (map) {
      map.addLayer(layer);
    }
  };

  const fitBounds = (bounds: L.LatLngBounds) => {
    if (map) {
      map.fitBounds(bounds, { animate: true });
    }
  };

  const removeLayer = (layer: L.Layer) => {
    if (map) {
      map.removeLayer(layer);
    }
  };

  const handleOnAddGeoJsonLayer = (layerDTO: AddLayerDTO) => {
    const layer = L.geoJson(layerDTO.layer, {
      attribution: "",
      interactive: true,
      onEachFeature: renderPopups,
      style: {
        fill: true,
        fillOpacity: 0.3,
        fillColor: "#FF0000",
        color: "#FF0000",
        lineCap: "butt",
      },
    });

    addGeoJSONLayer(layer);
    setLayers((prev) => [
      ...prev,
      { layer, isVisible: true, title: layerDTO.title },
    ]);
  };

  const addGeoJSONLayer = (layer: L.GeoJSON<any, Geometry>) => {
    let bounds: L.LatLngBounds | null = layer.getBounds();
    const southWest = bounds.getSouthWest();
    const northEast = bounds.getNorthEast();
    bounds =
      southWest && northEast
        ? new L.LatLngBounds(
            southWest ?? new L.LatLng(0, 0),
            northEast ?? new L.LatLng(0, 0)
          )
        : null;

    addLayer(layer);
    if (bounds != null) {
      fitBounds(bounds);
    }
  };

  const handleDeleteLayer = (index: number) => {
    setLayers((prevLayers) => {
      const newLayers = [...prevLayers];
      newLayers.splice(index, 1);
      return newLayers;
    });
    removeLayer(layers[index].layer);
  };
  const handleToggleLayer = (index: number) => {
    const newLayers = [...layers];

    if (newLayers[index].isVisible) {
      removeLayer(layers[index].layer);
    } else {
      addLayer(layers[index].layer);
    }
    newLayers[index].isVisible = !newLayers[index].isVisible;

    setLayers(newLayers);
  };

  return (
    <div className="flex h-screen bg-gray-200 dark:bg-gray-900">
      <MapLayers
        layers={layers}
        onDeleteLayer={handleDeleteLayer}
        onToggleLayer={handleToggleLayer}
        onAddLayer={handleOnAddGeoJsonLayer}
      />
      <main className="flex-1 z-0">
        <MapContainer
          center={[39.7343782, 65.9952861]}
          style={{ width: "100%", height: "100%" }}
          zoom={6}
          ref={setMap}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution="G"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </main>
    </div>
  );
};
