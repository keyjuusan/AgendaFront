const Input = ({
  inputName = "",
  fChange = () => {},
  value,
  placeholder = "",
}) => {
  return (
    <>
      {inputName ? (
        <label>
          {inputName + ": "}
          <input
            className="border rounded-md px-[5px] outline-[1px] outline-gray-300"
            placeholder={placeholder}
            onChange={fChange}
            value={value}
          />
        </label>
      ) : (
        <input
          className="border rounded-md w-[9rem] px-[5px] outline-[1px] outline-gray-300"
          placeholder={placeholder}
          onChange={fChange}
          value={value}
        />
      )}
    </>
  );
};
export default Input;
