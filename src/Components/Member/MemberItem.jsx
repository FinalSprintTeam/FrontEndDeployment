import React from 'react';
import classes from './MemberItem.module.css';

const MemberItem = ({ id, name, onSelection }) => {
  return (
    <div
      onClick={() => onSelection(id)}
      key={id}
      className={classes['member-item']}
    >
      <h2>{name}</h2>
    </div>
  );
};

export default MemberItem;
