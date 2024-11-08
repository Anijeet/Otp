import { useRef, useState, useEffect } from "react";
import { Button } from "./Buttons";

export function Otp({ number }) {
  const ref = useRef(Array(number).fill(0));
  const [otpValues, setOtpValues] = useState(Array(number).fill(""));
  const [disabled, setDisabled] = useState(true);

  // Update the button's disabled state when otpValues change
  useEffect(() => {
    const allFilled = otpValues.every((val) => val !== ""); // Check if all boxes are filled
    setDisabled(!allFilled); // Enable button if all boxes are filled
  }, [otpValues]);

  // Handle value change in an OTP box
  const handleOtpChange = (index, value) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
  };

  return (
    <div className="flex justify-center ">
      {Array(number)
        .fill(1)
        .map((_, index) => (
          <SubOtpbox
            reference={(e) => (ref.current[index] = e)}
            key={index}
            value={otpValues[index]}
            onChange={(value) => handleOtpChange(index, value)}
            onNext={() => ref.current[index + 1]?.focus()}
            onPrevious={() => ref.current[index - 1]?.focus()}
          />
        ))}

      <div>
        <Button disabled={disabled}>Submit</Button>
      </div>
    </div>
  );
}

function SubOtpbox({ reference, value, onChange, onNext, onPrevious }) {
  return (
    <div>
      <input
        value={value}
        ref={reference}
        onKeyUp={(e) => {
          if (e.key === "Backspace") {
            if (value === "") {
              onPrevious();
            } else {
              onChange(""); // Clear the current box on Backspace
            }
          } else if (e.key === "ArrowLeft") {
            onPrevious();
          } else if (e.key === "ArrowRight") {
            onNext();
          }
        }}
        onChange={(e) => {
          const val = e.target.value;
          if (/^[0-9]$/.test(val)) { // Only allow single digit numbers
            onChange(val); // Trigger the onChange prop
            onNext();
          }
        }}
        type="text"
        className="m-1 relative top-52 left-32 w-[40px] h-[50px] rounded-xl bg-blue-500 outline-none px-4 text-white"
      />
    </div>
  );
}
