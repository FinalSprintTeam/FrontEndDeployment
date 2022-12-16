import { Fragment } from 'react';
import classes from './MemberDetailsBody.module.css';
import Card from '../../../UI/Card';
import BackGround from '../../../UI/Background';
function MemberDetailsBody({
  city,
  country,
  email,
  joinDate,
  name,
  postalCode,
  province,
  strAddr,
  memType,
}) {
  return (
    <Fragment>
      <h1 className={classes.title}>{name}</h1>

      <div className={classes.grid}>
        <h2>
          {' '}
          <span className={`${classes.badge} ${classes['badge--primary']}`}>
            {email}
          </span>
        </h2>
        <h2>
          {' '}
          <span className={`${classes.badge} ${classes['badge--primary']}`}>
            {strAddr}
          </span>
        </h2>

        <h2>
          {' '}
          <span className={`${classes.badge} ${classes['badge--primary']}`}>
            {`${city} ${province} ${country}`}
          </span>
        </h2>
        <h2>
          {' '}
          <span className={`${classes.badge} ${classes['badge--primary']}`}>
            {postalCode}
          </span>
        </h2>
        <h2>
          {' '}
          <span className={`${classes.badge} ${classes['badge--primary']}`}>
            {joinDate}
          </span>
        </h2>
        <h2>
          {' '}
          <span className={`${classes.badge} ${classes['badge--primary']}`}>
            {memType}
          </span>
        </h2>
      </div>
    </Fragment>
  );
}

export default MemberDetailsBody;
