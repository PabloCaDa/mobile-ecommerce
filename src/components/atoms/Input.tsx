import { useState } from "react";

interface InputProps {
  ariaLabel: string;
  initialValue?: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  placeholder?: string;
  type?: string;
}

export const Input = ({
  ariaLabel,
  initialValue = "",
  name,
  onChange,
  onClear,
  placeholder,
  type = "text",
}: InputProps) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleClear = () => {
    setInputValue("");
    onClear();
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChange(event);
  };

  return (
    <div className="border-b border-gray-300 flex items-center justify-between w-full">
      <input
        type={type}
        name={name}
        value={inputValue}
        onChange={handleOnChange}
        placeholder={placeholder}
        className="w-full text-lg font-medium focus:outline-none placeholder:text-gray-500"
        aria-label={ariaLabel}
      />

      {inputValue && (
        <button
          type="button"
          onClick={handleClear}
          className="text-gray-500 hover:text-black text-lg ml-2"
          aria-label="Clear search"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      )}
    </div>
  );
};
