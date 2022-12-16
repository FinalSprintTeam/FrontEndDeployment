import React, { useContext, useState } from "react";
import MemberContext from "../../Context/member-context";
import classes from "./MemberDetails.module.css";
import Header from "../../Layout/Header";
import btnCss from "../../../UI/Button.module.css";
import { MdUpdate, MdDelete, MdPeople } from "react-icons/md";
import { FaListAlt } from "react-icons/fa";
import Button from "../../../UI/Button";
import Block from "../../../UI/Block";
import MemberDetailsBody from "./MemberDetailsBody";
import MemberForm from "../MemberForm";
import { useNavigate } from "react-router-dom";
import BackGround from "../../../UI/Background";
import TournamentContext from "../../Context/tournament-context";

const MemberDetails = () => {
  // Member's store
  const memberCtx = useContext(MemberContext);
  const tourCtx = useContext(TournamentContext);
  const navigate = useNavigate();
  const goToMemberList = () => navigate("/members");

  const [showDetails, setShowDetails] = useState(true);
  const [showUpdateMember, setShowUpdateMember] = useState(false);

  // icons
  const iconUpdate = <MdUpdate />;
  const iconDelete = <MdDelete />;

  const onUpdateMember = () => {
    setShowUpdateMember(true);
    setShowDetails(false);
  };

  const displayDetails = () => {
    setShowDetails(true);
    setShowUpdateMember(false);
  };

  const onDeleteMember = () => {
    memberCtx.deleteMember(memberCtx.currentMember.id);
    setTimeout(() => tourCtx.getTournament(), 500);

    // ADD validations - Y/N

    goToMemberList();
  };

  const buttonGroup = (
    <div className={btnCss.btnContainer}>
      <Button
        label="Update Member"
        style={btnCss}
        icon={iconUpdate}
        handleClick={onUpdateMember}
      />
      <Button
        label="Delete Member"
        style={btnCss}
        icon={iconDelete}
        handleClick={onDeleteMember}
      />
    </div>
  );
  return (
    <>
      {memberCtx.currentMember && (
        <div>
          <Header
            title="Member Details"
            button={buttonGroup}
            url="https://source.unsplash.com/WHf1wtNMMLU/1920x1340"
          ></Header>
          <BackGround>
            <MemberDetailsBody
              name={`${memberCtx.currentMember.firstName} ${memberCtx.currentMember.lastName}`}
              email={memberCtx.currentMember.email}
              joinDate={memberCtx.currentMember.joinDate}
              city={memberCtx.currentMember.address.city}
              country={memberCtx.currentMember.address.country}
              postalCode={memberCtx.currentMember.address.postalCode}
              province={memberCtx.currentMember.address.province}
              strAddr={memberCtx.currentMember.address.streetAddress}
              memType={memberCtx.currentMember.membership.name}
            />

            {showUpdateMember && (
              <MemberForm
                displayTable={displayDetails}
                title={null}
                editCheck={true}
                setShowUpdateMember={setShowUpdateMember}
              />
            )}
          </BackGround>
        </div>
      )}
    </>
  );
};

export default MemberDetails;
