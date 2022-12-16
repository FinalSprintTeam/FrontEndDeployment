import { useContext, useState } from "react";
import Table from "../../../UI/Table";
import TournamentContext from "../../Context/tournament-context";
import Card from "../../../UI/Card";
import MemberContext from "../../Context/member-context";
import Form from "react-bootstrap/Form";
import InputState from "../../../UI/InputState";
import { MdOutlineDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";

const TournamentMemberDetails = ({ styles }) => {
  const tourCtx = useContext(TournamentContext);
  const memCtx = useContext(MemberContext);
  const members = tourCtx.currentTournament.members;
  const [showAddMembers, setShowAddMembers] = useState(false);
  const [score, setScore] = useState(0);
  const [memberId, setMemberId] = useState("");

  const onDelete = (id) => {
    tourCtx.removeMemberFromTournament(id, tourCtx.currentTournament.id);
  };

  const filterByReference = (arr1, arr2) => {
    let res = [];
    res = arr1.filter((el) => {
      return !arr2.find((element) => {
        return element.member.id === el.id;
      });
    });
    return res;
  };

  const membersFiltered = filterByReference(
    memCtx.members,
    tourCtx.currentTournament.members
  );

  const onAddMemberClick = () => {
    setShowAddMembers(true);
  };

  const handleSubmit = () => {
    setShowAddMembers(false);
    if (memberId != "" && score != "")
      tourCtx.addMemberToTournament(
        memberId,
        tourCtx.currentTournament.id,
        score
      );
  };

  const scoreCheck = (score) => {
    return score ? score : "N/A";
  };

  const memberRow = (
    <tbody>
      {members.map((m, i) => {
        var foundMember = memCtx.members.filter((el) => el.id === m.member.id);

        return (
          foundMember && (
            <tr key={foundMember[0].id}>
              <td>{`${foundMember[0].firstName} ${foundMember[0].lastName}`}</td>
              <td>{scoreCheck(m.score)}</td>
              <td>
                <span
                  onClick={() => onDelete(foundMember[0].id)}
                  className={styles["icon-delete"]}
                >
                  X
                </span>
              </td>
            </tr>
          )
        );
      })}
      {showAddMembers && (
        <tr>
          <td>
            <Form.Select
              aria-label="Member Select"
              onChange={(e) => setMemberId(e.target.value)}
            >
              <option disabled selected>
                Open this select menu to add a member
              </option>
              {membersFiltered.map((m) => {
                return (
                  <option id={m.id} value={m.id}>
                    {m.firstName} {m.lastName}
                  </option>
                );
              })}
            </Form.Select>
          </td>
          <td>
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
          </td>
          <td>
            <button onClick={handleSubmit}>
              <IoIosAddCircle />
            </button>{" "}
          </td>
        </tr>
      )}
      <tr>
        <td>Click to Add another Member</td>{" "}
        <td>
          <button onClick={onAddMemberClick} disabled={showAddMembers}>
            +
          </button>
        </td>{" "}
        <td></td>
      </tr>
    </tbody>
  );

  return (
    <Card>
      <div className={styles.table}>
        <h3>Participating Members </h3>
        <Table
          scoreHeader="Score"
          nameHeader="Name"
          blankHeader=""
          row={memberRow}
        />
      </div>
    </Card>
  );
};

export default TournamentMemberDetails;
