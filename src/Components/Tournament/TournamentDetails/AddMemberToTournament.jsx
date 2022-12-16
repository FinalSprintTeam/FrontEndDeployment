import React, { useContext, useState } from "react";
import Button from "../../../UI/Button";
import btnCss from "../../../UI/Button.module.css";
import { MdPeople, MdSaveAlt } from "react-icons/md";
import Card from "../../../UI/Card";
import MemberContext from "../../Context/member-context";
import TournamentContext from "../../Context/tournament-context";
import classes from "./AddMemberToTournament.module.css"


const AddMemberToTournament = () => {
  const memCtx = useContext(MemberContext);

  const filterByReference = (arr1, arr2) => {
    let res = [];
    res = arr1.filter((el) => {
      return !arr2.find((element) => {
        return element.member.id === el.id;
      });
    });
    return res;
  };

  const tourCtx = useContext(TournamentContext);
  const members = filterByReference(
    memCtx.members,
    tourCtx.currentTournament.members
  );
  const iconPeople = <MdPeople />;
  const iconSave = <MdSaveAlt/>;

  const [membersToAdd, setMembersToAdd] = useState([]);


  const submitMembers = (e) => {
    e.preventDefault();
  
  };

  return (
   
      <div className={classes["form-container"]}>

        <form  className={classes.form}  onSubmit={submitMembers}>
        </form>
      </div>
  );
};

export default AddMemberToTournament;








