/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import { Icon } from "@/shared/ui/icon";
import { Input } from "@/shared/ui/input";

export interface LayerBtnProps<T> {
  title: string;
  id: T;
  onToggle: (id: T) => void;
  onDelete: (id: T) => void;
  isVisible?: boolean;
  styles: any;
}

export const LayerBtn = <T,>({
  title,
  id,
  isVisible,
  onDelete,
  onToggle,
  styles,
}: LayerBtnProps<T>) => {
  return (
    <div className="px-4 py-2 hover:bg-black hover:bg-opacity-5 transition-colors">
      <div className="flex justify-between items-center">
        <label className="flex items-center gap-2 flex-1 line-clamp-1">
          {title}
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
      <div className="flex flex-col gap-y-2">
        {Object.keys(styles).map((style) => {
          if (style.toLowerCase().includes("color")) {
            return (
              <label
                key={style}
                htmlFor={`l${id}_inp_${style}`}
                className="flex items-center gap-x-3"
              >
                <Input
                  type="color"
                  id={`l${id}_inp_${style}`}
                  defaultValue={styles[style]}
                  className="w-10 p-1 h-10"
                />
                <span className="text-sm font-bold">{style}</span>
              </label>
            );
          }
          if (typeof styles[style] === "number") {
            return (
              <label
                htmlFor={`l${id}_inp_${style}`}
                key={style}
                className="flex items-center gap-x-3"
              >
                <span className="text-sm font-bold">{style}:</span>{" "}
                <Input
                  id={`l${id}_inp_${style}`}
                  type="number"
                  defaultValue={styles[style]}
                />
              </label>
            );
          }

          if (typeof styles[style] === "boolean") {
            return (
              <label
                key={style}
                htmlFor={`l${id}_inp_${style}`}
                className="flex items-center gap-x-3"
              >
                <Checkbox
                  id={`l${id}_inp_${style}`}
                  defaultValue={styles[style]}
                />
                <span className="text-sm font-bold">{style}</span>
              </label>
            );
          }

          return (
            <label
              key={style}
              htmlFor={`l${id}_inp_${style}`}
              className="flex flex-col gap-y-0.5"
            >
              <span className="text-sm font-bold">{style}:</span>
              <Input
                id={`l${id}_inp_${style}`}
                type="text"
                defaultValue={styles[style]}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
};
