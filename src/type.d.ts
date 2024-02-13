import { type GeoJsonObject } from "geojson";

declare global {
  type ILayer = {
    layer: L.Layer;
    isVisible: boolean;
    title: string;
  };

  type AddLayerDTO = {
    layer: GeoJsonObject;
    title: string;
  };
}

export { ILayer as Layer, AddLayerDTO };
