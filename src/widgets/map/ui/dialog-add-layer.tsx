import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { type GeoJsonObject } from "geojson";

import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon";
import {
  Dialog,
  DialogTrigger,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogFooter,
} from "@/shared/ui/dialog";
import { Input } from "@/shared/ui/input";

type Props = {
  onAddLayer: (data: AddLayerDTO) => void;
};

export const DialogAddLayer = ({ onAddLayer }: Props) => {
  const [open, setOpen] = useState(false);

  const titleInputRef = useRef<HTMLInputElement>(null);
  const inputFile = useRef<HTMLInputElement>(null);
  const layerRef = useRef<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if (!target.files || !target.files.length) return;
    const fileReader = new FileReader();

    fileReader.onload = function (e: ProgressEvent<FileReader>) {
      if (!e.target?.result) return;

      layerRef.current = e.target.result.toString();
    };

    const fileUploaded = target.files[0];
    fileReader.readAsText(fileUploaded);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (layerRef.current) {
      onAddLayer({
        title: titleInputRef.current?.value ?? "Unknown",
        layer: JSON.parse(layerRef.current) as GeoJsonObject,
      });
      if (inputFile.current) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        inputFile.current.value = null;
      }
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Icon name="sprite/plus-circle" className="h-6 w-6" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white text-black">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add New Layer</DialogTitle>
            <div className="mb-3">
              Please upload a GeoJSON file to add a new layer to the map.
            </div>
            <DialogDescription>
              <input
                ref={inputFile}
                onChange={handleChange}
                accept=".geojson,.json"
                className="p-2 border rounded"
                type="file"
                id="uploadFile"
              />
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4">
            <Input ref={titleInputRef} type="text" placeholder="Title" />
          </div>

          <DialogFooter className="mt-2">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Cancel
              </Button>
            </DialogClose>

            <Button type="submit">Add Layer</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
