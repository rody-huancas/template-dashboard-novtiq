interface CheckboxGroupProps {
  label         : string;
  options       : { label: string; value: string }[];
  selectedValues: string[];
  onChange      : (values: string[]) => void;
}

const CheckboxGroup = (props: CheckboxGroupProps) => {
  const { label, options, selectedValues, onChange } = props;

  const handleChange = (value: string) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter((v) => v !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-900">
        {label}
      </label>
      <div className="space-y-1">
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              type="checkbox"
              value={option.value}
              checked={selectedValues.includes(option.value)}
              onChange={() => handleChange(option.value)}
              className="mr-2"
            />
            <label className="text-sm text-slate-700">{option.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckboxGroup;
