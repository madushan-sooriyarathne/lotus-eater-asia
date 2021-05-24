import { DragEvent, FormEvent, useState } from "react";

const useInput = (initialText: string = "") => {
  const [value, setValue] = useState<string>(initialText);

  const updateValue = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setValue((event.target as HTMLInputElement | HTMLTextAreaElement).value);
  };

  const resetValue = (): void => {
    setValue("");
  };

  return [value, updateValue, resetValue];
};

export { useInput };
