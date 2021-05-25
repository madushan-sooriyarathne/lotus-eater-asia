import { InputFieldContainer, Input, Label, InputArea } from "./styles";

interface Props {
  value: string;
  onChange: (event: InputEventType) => void;
  name: string;
  type: "text" | "email" | "tel";
  pattern?: string;
  textArea?: boolean;
  required?: boolean;
}

const InputField: React.FC<Props> = ({
  value,
  onChange,
  name,
  pattern,
  type = "text",
  textArea = false,
  required = true,
}: Props): JSX.Element => {
  return (
    <InputFieldContainer>
      {textArea ? (
        <InputArea
          placeholder={name}
          id={name.toLowerCase().replace(" ", "-")}
          value={value}
          onChange={onChange}
          required={required}
        />
      ) : (
        <Input
          placeholder={name}
          id={name.toLowerCase().replace(" ", "-")}
          value={value}
          type={type}
          onChange={onChange}
          required={required}
          pattern={pattern}
        ></Input>
      )}
      <Label htmlFor={name.toLowerCase().replace(" ", "-")}>{name}</Label>
    </InputFieldContainer>
  );
};

export default InputField;
