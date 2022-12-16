import Form from "react-bootstrap/Form";
import { useState } from "react";
import InputState from "./InputState";
import classes from "./Select.module.css";
import Button from "./Button";
import { IoIosAddCircle } from "react-icons/io";


function Select({ members, setMembersToAdd, membersToAdd }) {
  const [memberId, setMemberId] = useState("");
  const [score, setScore] = useState(0);

  const handleChange = (id) => {
    setMembersToAdd([...membersToAdd, { id: memberId, score: score }]);
  };

  return (
    <div className={classes.selectContainer}>
      <Form.Select
        aria-label="Member Select"
        onChange={(e) => setMemberId(e.target.value)}
      >
        <option className={classes.option} disabled>
          Open this select menu to add a member
        </option>
        {members.map((m) => {
          return (
            <option id={m.id} value={m.id}>
              {m.firstName} {m.lastName}
            </option>
          );
        })}
      </Form.Select>
      <InputState
        formControl=""
        label={null}
        input={{
          id: "score",
          type: "number",
          min: "-30",
          max: "30",
          placeholder: "score",
          defaultValue: score,
        }}
        onChange={setScore}
      />
      <Button
        label={null}
        style={classes}
        handleClick={handleChange}
        icon={<IoIosAddCircle />}
      />
    </div>
  );
}

export default Select;
