/* eslint-disable no-undef */

import React, { useEffect, useRef } from "react";
import { useSelector, connect } from "react-redux";
import { updateUser } from "../redux/ducks/user";
//import { useAutocomplete } from '../hooks/useAutocomplete'
import Input from "../components/Input";
import Search from "../components/Search";

import useForm from "../hooks/useForm";

const mapDispatchToProps = dispatch => ({
  dispatchUpdateUser: payload => dispatch(updateUser(payload))
});

// const mapStatetoProps = (state, ownProps) => ({
//   user: state.user
// })

const Form = ({ dispatchUpdateUser }) => {
  const wide = { width: "75%" };

  const user = useSelector(state => state.user.user);

  const form = useForm({ form: user });

  const addressInputRef = useRef(null);
  const autocomplete = useRef(null);

  const onChange = event => {
    const {
      target: { name, value }
    } = event;
    dispatchUpdateUser({
      [name]: value
    });
  };

  const onPlaceChange = ac => () => {
    let place = ac.getPlace().address_components;
    const address = {};
    // Address type/name mapping
    const mapping = {
      street_number: 'short_name',
      route: 'long_name',
      locality: 'long_name',
      administrative_area_level_1: 'short_name',
      postal_code: 'short_name',
    };
    // Format address values using mapping and results.
    for (let i = 0; i < place.length; i++) {
      const type = place[i].types[0];
      if (mapping[type]) {
        const value = place[i][mapping[type]];
        address[type] = value;
      }
    };

    console.log(address)
    for( const name in address){
      dispatchUpdateUser({
        [name]: address[name]
      });
    }

  };
  useEffect(() => {
    console.log("Hello!");
    if (addressInputRef.current) {
      onPlaceChange(autocomplete.current);
    }
    autocomplete.current = new google.maps.places.Autocomplete(
      addressInputRef.current,
      { types: ["address"] }
    );
    autocomplete.current.setFields(["address_component"]);
    autocomplete.current.addListener(
      "place_changed",
      onPlaceChange(autocomplete.current)
    );
  }, [addressInputRef]);
  // useEffect(() => {
  //   dispatchIsValid(true or false base on if they filled out the form)
  // }, [user.firstName, user.lastName])

  // Add password
  // Add submit, disable until valid

  return (
    <div>
      <p>First Name:</p>
      <Input
        name="firstName"
        value={user.firstName}
        onChange={onChange}
        form={user}
        validations={form.validations}
        errors={form.errors}
      />
      <p>Last Name:</p>
      <Input
        name="lastName"
        value={user.lastName}
        onChange={onChange}
        form={user}
        validations={form.validations}
        errors={form.errors}
      />
      <p>Email: </p>
      <Input
        name="email"
        value={user.email}
        onChange={onChange}
        form={user}
        validations={form.validations}
        errors={form.errors}
      />
      <p>Address</p>
      <input
        ref={addressInputRef}
        name="route"
        value={user.route}
        onChange={onChange}
        style={wide}
      />
      <p>City</p>
      <input name="locality" value={user.locality} onChange={onChange} />
      <p>State</p>
      <input
        name="administrative_area_level_1"
        value={user.administrative_area_level_1}
        onChange={onChange}
      />
      <p>Zipcode</p>
      <input name="postal_code" value={user.postal_code} onChange={onChange} />
      <p>UserName</p>
      <Input
        name="username"
        value={user.username}
        onChange={onChange}
        form={user}
        validations={form.validations}
        errors={form.errors}
      />

      <p>Password</p>
      <Input
        type="password"
        name="password"
        value={user.password}
        onChange={onChange}
        form={user}
        validations={form.validations}
        errors={form.errors}
      />
      <br />
      <button name="submit" disabled={!form.isValid}>
        Submit
      </button>
    </div>
  );
};

export default connect(
  undefined,
  mapDispatchToProps
)(Form);
