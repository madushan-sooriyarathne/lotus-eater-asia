import { FormEvent, useState } from "react";

const useInput = (
  initialText: string = ""
): [string, (event: InputEventType) => void, () => void] => {
  const [value, setValue] = useState<string>(initialText);

  const updateValue = (event: InputEventType): void => {
    setValue((event.target as HTMLInputElement | HTMLTextAreaElement).value);
  };

  const resetValue = (): void => {
    setValue("");
  };

  return [value, updateValue, resetValue];
};

export { useInput };
