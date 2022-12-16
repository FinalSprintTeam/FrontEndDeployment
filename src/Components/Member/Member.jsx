import { Fragment } from 'react';
import Header from '../Layout/Header';
import Block from '../../UI/Block';
import Button from '../../UI/Button';
import classes from '../../UI/Button.module.css';
import { IoIosAddCircle } from 'react-icons/io';
import { MdViewList } from 'react-icons/md';
import { useState } from 'react';
import styles from './MemberItem.module.css';
import Card from '../../UI/Card';
import MemberItem from './MemberItem';
import MemberForm from './MemberForm';
import { useContext } from 'react';
import MemberContext from '../Context/member-context';
import BackGround from '../../UI/Background';
import { useNavigate } from 'react-router-dom';

const Member = ({}) => {
  const [showTable, setShowTable] = useState(true);
  const [showForum, setShowForum] = useState(false);
  const memberCtx = useContext(MemberContext);
  const memberData = memberCtx.members;
  const iconAdd = <IoIosAddCircle />;
  const iconView = <MdViewList />;

  const onViewMemberClick = () => {
    setShowTable(true);
    setShowForum(false);
  };

  const onAddMemberClick = () => {
    setShowForum(true);
    setShowTable(false);
  };

  const navigate = useNavigate();
  const goToMemberDetail = (id) => navigate(`/members/${id}/detail`);

  const onSelection = (id) => {
    memberCtx.setCurrentId(id);
    goToMemberDetail(id);
  };

  const memberItems = (
    <div className={styles['member-items']}>
      {memberData.map((member) => (
        <MemberItem
          id={member.id}
          name={`${member.firstName} ${member.lastName}`}
          onSelection={onSelection}
        />
      ))}
    </div>
  );

  const buttonGroup = (
    <div className={classes.btnContainer}>
      <Button
        label='Add Member'
        style={classes}
        icon={iconAdd}
        handleClick={onAddMemberClick}
      />
      <Button
        label='View Members'
        style={classes}
        icon={iconView}
        handleClick={onViewMemberClick}
      />
    </div>
  );

  return (
    <Fragment>
      <Header title='Members' button={buttonGroup} />

      <BackGround>
        {showTable && memberItems}

        {showForum && (
          <MemberForm
            displayTable={onViewMemberClick}
            title='Add Member'
            editCheck={false}
          />
        )}
      </BackGround>
    </Fragment>
  );
};

export default Member;
