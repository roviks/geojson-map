import { type GeoJsonObject } from "geojson";

declare global {
  type Layer = {
    layer: L.Layer;
    isVisible: boolean;
    title: string;
  };

  type AddLayerDTO = {
    layer: GeoJsonObject;
    title: string;
  };
}

export { Layer, AddLayerDTO };
