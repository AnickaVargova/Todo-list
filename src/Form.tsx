import { useState, useContext } from "react";
import { TodosContext } from "./App";
import styled from "styled-components";

const FormElement = styled.form`
  text-align: center;
`;

const InputSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  font-size: 20px;
  margin-left: 20px;
  margin-right: 5px;
  color: blue;
`;

const Input = styled.input`
  margin: 10px;
  &: hover {
    border: 2px solid black;
  }
`;

const Button = styled.button`
  padding: 10px;
  margin: 10px;
  background: lightblue;
  color: blue;
  border: 3px solid blue;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;

  &: hover {
    border-color: black;
  }
`;

const Form = () => {
  const [inputText, setInputText] = useState("");
  const [date, setDate] = useState({ day: "", month: "01", year: "" });
  const handleSubmit = useContext(TodosContext).handleSubmit;
  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!inputText || !date) {
      alert("Please complete all the fields.");
    } else {
      handleSubmit({ name: inputText, date });
      setInputText("");
      setDate({ day: "", month: "01", year: "" });
    }
  };
  return (
    <FormElement onSubmit={submitHandler}>
      <InputSection>
        <div>
          <Label>New todo:</Label>
          <Input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
        <div>
          <div>
            <span>
              <Label htmlFor="day">Day:</Label>
              <input
                type="text"
                name="day"
                pattern="[0-3][0-9]"
                placeholder="dd"
                size={1}
                value={date.day}
                onChange={(e) => {
                  setDate((prevdate) => ({ ...prevdate, day: e.target.value }));
                }}
              />
            </span>
            <span>
              <Label htmlFor="month">Month:</Label>
              <select
                name="month"
                value={date.month}
                onChange={(e) => {
                  setDate((prevdate) => ({
                    ...prevdate,
                    month: e.target.value,
                  }));
                }}
              >
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </span>
            <span>
              <Label htmlFor="year">Year:</Label>
              <input
                type="text"
                name="year"
                pattern="20[0-9][0-9]"
                placeholder="yyyy"
                size={2}
                value={date.year}
                onChange={(e) =>
                  setDate((prevdate) => ({ ...prevdate, year: e.target.value }))
                }
              />
            </span>
          </div>
        </div>
      </InputSection>
      <Button type="submit">Submit</Button>
    </FormElement>
  );
};
export default Form;
