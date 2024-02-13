import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon";

export interface LayerBtnProps<T> {
  title: string;
  id: T;
  onToggle: (id: T) => void;
  onDelete: (id: T) => void;
  isVisible?: boolean;
}

export const LayerBtn = <T,>({
  title,
  id,
  isVisible,
  onDelete,
  onToggle,
}: LayerBtnProps<T>) => {
  return (
    <div className="px-4 py-2 flex justify-between items-center">
      <label className="flex items-center gap-2 flex-1 line-clamp-1">
        {title}1231231221312312
      </label>
      <div>
        <Button
          onClick={() => onToggle(id)}
          variant="ghost"
          size="icon"
          className="text-gray-700 mr-2"
        >
          <Icon
            name={isVisible ? "sprite/eye-off" : "sprite/eye"}
            className="h-5 w-5"
          />
        </Button>
        <Button
          onClick={() => onDelete(id)}
          variant="outline"
          size="icon"
          className="text-red-500"
        >
          <Icon name="sprite/trash" className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};
