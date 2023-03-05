import classNames from "classnames";
import React from "react";

type CCTextarea = {
  label?: string;
  formClassName?: string;
  labelClasses?: string;
  value: string;
  withAutoFocus?: boolean;
  onSave: (e: string) => void;
  placeholder?: string;
};

export const CCTextarea: React.FC<CCTextarea> = ({
  value = "",
  withAutoFocus = false,
  onSave = (e: string) => {},
  placeholder,
  label = "Search",
  formClassName = "",
  labelClasses,
}) => {
  const areaRef = React.useRef<HTMLTextAreaElement | null>(null);
  const [draft, setDraft] = React.useState(value);

  React.useEffect(() => {
    if (withAutoFocus && areaRef.current) {
      areaRef.current.focus();
    }
  }, [withAutoFocus]);

  React.useEffect(() => {
    setDraft(value);
  }, [value]);

  return (
    <form className={formClassName}>
      <label
        htmlFor="cc-textarea"
        className={classNames(labelClasses, {
          "mb-2 text-sm font-medium sr-only": !labelClasses,
        })}
      >
        {label}
      </label>
      <textarea
        id="cc-textarea"
        ref={areaRef}
        rows={4}
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={() => onSave(draft)}
        className="resize-none block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        placeholder={placeholder || "Tell more about your project"}
      />
    </form>
  );
};
