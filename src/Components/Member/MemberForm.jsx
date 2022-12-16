import classes from "./MemberForm.module.css";
import React, { useRef, useState, Fragment, useContext } from "react";
import Input from "../../UI/Input";
import MemberContext from "../Context/member-context";
import InputState from "../../UI/InputState";
import {
  errorToast,
  infoToast,
  successToast,
} from "../../utils/hooks/useToast";

const MemberForm = (props) => {
  const memberCtx = useContext(MemberContext);

  const [firstName, setFirstName] = useState(
    props.editCheck ? memberCtx.currentMember.firstName : ""
  );
  const [lastName, setLastName] = useState(
    props.editCheck ? memberCtx.currentMember.lastName : ""
  );
  const [email, setEmail] = useState(
    props.editCheck ? memberCtx.currentMember.email : ""
  );
  const [joinDate, setJoinDate] = useState(
    props.editCheck ? memberCtx.currentMember.joinDate : ""
  );

  const [address, setAddress] = useState(
    props.editCheck ? memberCtx.currentMember.address.streetAddress : ""
  );
  const [city, setCity] = useState(
    props.editCheck ? memberCtx.currentMember.address.city : ""
  );
  const [province, setProvince] = useState(
    props.editCheck ? memberCtx.currentMember.address.province : ""
  );
  const [postal, setPostal] = useState(
    props.editCheck ? memberCtx.currentMember.address.postalCode : ""
  );
  const [country, setCountry] = useState(
    props.editCheck ? memberCtx.currentMember.address.country : ""
  );

  const [membership, setMembership] = useState(
    props.editCheck ? memberCtx.currentMember.membership.name : ""
  );

  const submitHandler = (event) => {
    event.preventDefault();

    // VALIDATIONS WILL GO HERE - IMPORTANT //
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      joinDate === "" ||
      address === "" ||
      city === "" ||
      province === "" ||
      postal === "" ||
      country === "" ||
      membership === ""
    ) {
      errorToast("No fields can be blank! Try again.");
      return;
    }
    // End of validations

    // Create objects that match model for back-end
    const memberObj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      joinDate: joinDate,
    };

    const addressObj = {
      streetAddress: address,
      city: city,
      province: province,
      postalCode: postal,
      country: country,
    };

    if (props.editCheck) {
      memberCtx.updateMember(memberObj, addressObj, membership);
      infoToast("Member Updated!");
      props.setShowUpdateMember(false);
    } else {
      memberCtx.postMember(memberObj, addressObj, membership);
      successToast("Member account Added!");
    }
    props.displayTable();
  };

  return (
    <Fragment>
      <h1 className={classes.title}>Add Members</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <div>
          <h2>Member Info</h2>
          <div className="form-group row">
            <InputState
              formControl="form-group col-md-8 offset-md-2"
              label="First Name: "
              input={{
                id: "fName",
                type: "text",
                min: "1",
                max: "255",
                placeholder: "First Name",
                defaultValue: `${firstName}`,
              }}
              onChange={setFirstName}
            />
          </div>
          <div className="form-group row">
            <InputState
              formControl="form-group col-md-8 offset-md-2"
              label="Last Name: "
              input={{
                id: "lName",
                type: "text",
                min: "1",
                max: "255",
                placeholder: "Last Name",
                defaultValue: `${lastName}`,
              }}
              onChange={setLastName}
            />
          </div>
          <div className="form-group row">
            <InputState
              formControl="form-group col-md-8 offset-md-2"
              label="Email:"
              input={{
                id: "email",
                type: "text",
                min: "1",
                max: "255",
                placeholder: "Email",
                defaultValue: `${email}`,
              }}
              onChange={setEmail}
            />
          </div>
          <div className="form-group row">
            <InputState
              formControl="form-group col-md-8 offset-md-2"
              label="Join Date"
              input={{
                id: "joinDate",
                type: "date",
                defaultValue: `${joinDate}`,
              }}
              onChange={setJoinDate}
            />
          </div>
        </div>
        <hr />
        <div>
          <h2>Address Info</h2>
          <div className="form-group row">
            <InputState
              formControl="form-group col-md-8 offset-md-2"
              label="Street Address:"
              input={{
                id: "strAddr",
                type: "text",
                min: "1",
                max: "255",
                placeholder: "Street Address",
                defaultValue: `${address}`,
              }}
              onChange={setAddress}
            />
          </div>
          <div className="form-group row">
            <InputState
              formControl="form-group col-md-3  offset-md-2"
              label="City:"
              input={{
                id: "city",
                type: "text",
                min: "1",
                max: "255",
                placeholder: "City",
                defaultValue: `${city}`,
              }}
              onChange={setCity}
            />
            <InputState
              formControl="form-group col-md-2"
              label="Province:"
              input={{
                id: "province",
                type: "text",
                min: "1",
                max: "255",
                placeholder: "Province",
                defaultValue: `${province}`,
              }}
              onChange={setProvince}
            />
            <InputState
              formControl="form-group col-md-3"
              label="Postal:"
              input={{
                id: "pcode",
                type: "text",
                min: "1",
                max: "7",
                placeholder: "Postal",
                defaultValue: `${postal}`,
              }}
              onChange={setPostal}
            />
          </div>
          <div className="form-row">
            <InputState
              formControl="form-group col-md-8 offset-md-2"
              label="Country:"
              input={{
                id: "country",
                type: "text",
                min: "1",
                max: "255",
                placeholder: "Country",
                defaultValue: `${country}`,
              }}
              onChange={setCountry}
            />
          </div>
        </div>

        {/* Maybe dropdown radio*/}

        {/* Membership */}
        <hr />
        <div className={classes.radioControl}>
          <h2>Membership Type:</h2>
          <div>
            <label htmlFor="memType">Normal</label>
            <input
              type="radio"
              name="memType"
              value="Normal"
              defaultChecked={membership === "Normal" && true}
              onChange={(e) => setMembership(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="memType">Premium</label>
            <input
              type="radio"
              name="memType"
              value="Premium"
              defaultChecked={membership === "Premium" && true}
              onChange={(e) => setMembership(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="memType">Trial</label>
            <input
              type="radio"
              name="memType"
              value="Trial"
              defaultChecked={membership === "Trial" && true}
              onChange={(e) => setMembership(e.target.value)}
            />
          </div>
        </div>

        <button>Submit</button>
      </form>
    </Fragment>
  );
};

export default MemberForm;
