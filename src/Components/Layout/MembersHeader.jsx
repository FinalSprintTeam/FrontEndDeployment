import { Fragment } from 'react';
import { useState } from 'react';
import classes from './Header.module.css';

const MembersHeader = ({ title, button }) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>{title}</h1>
        {button}
      </header>
      <div className={classes['main-image']}>
        <img
          src='https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80/1920x1340'
          alt='picture of a guy swinging club'
        />
      </div>
    </Fragment>
  );
};

export default MembersHeader;
