import React, { useEffect, useState } from "react";

const Search = ({ inputRef, name, value, onChange }) => {
  return (
    <div>
      <input ref={inputRef} name={name} value={value} onChange={onChange} />
    </div>
  );
};
export default Search;
