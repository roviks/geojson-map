import { LayerBtn } from "./ui/layer-btn";
import { DialogAddLayer } from "./ui/dialog-add-layer";

type Props = {
  layers: ILayer[];
  onAddLayer: (data: AddLayerDTO) => void;
  onDeleteLayer: (id: number) => void;
  onToggleLayer: (id: number) => void;
};

export const MapLayers = ({
  layers,
  onAddLayer,
  onDeleteLayer,
  onToggleLayer,
}: Props) => {
  return (
    <aside className="flex flex-col z-10 h-full w-64 border-r bg-white dark:bg-gray-800 text-black">
      <div className="flex items-center justify-between px-4 py-2 border-b">
        <h2 className="text-lg font-semibold text-gray-600">Map Layers</h2>
        <DialogAddLayer onAddLayer={onAddLayer} />
      </div>

      <div className="flex-1 overflow-y-auto">
        {layers.map((layer, i) => (
          <LayerBtn
            key={`layer_${i}`}
            id={i}
            isVisible={layer.isVisible}
            onDelete={onDeleteLayer}
            onToggle={onToggleLayer}
            styles={
              "style" in layer.layer.options ? layer.layer.options.style : {}
            }
            title={layer.title.trim().length ? layer.title : "Unknown layer"}
          />
        ))}
      </div>
    </aside>
  );
};
