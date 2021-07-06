import React, { useEffect, useState } from "react";
import { Menu, MenuItem, Typeahead } from "react-bootstrap-typeahead";
import useGet from "../../hooks/useGet";

const AutoComplete = ({ getUserDetails }) => {
  let { data: userData } = useGet("users");
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    return () => {
      setSelected([]);
    };
  }, []);

  const getDetails = (valu) => {
    getUserDetails(valu);
  };

  const renderMenu = (results, menuProps) => {
    return (
      <Menu {...menuProps}>
        {results.map((result, idx) => (
          <MenuItem
            key={result.id}
            onClick={() => getDetails(result)}
            option={result}
            position={idx}
          >
            {result.name}
          </MenuItem>
        ))}
      </Menu>
    );
  };

  return (
    <Typeahead
      clearButton
      {...selected}
      id="custom-menu"
      onChange={(selected) => setSelected({ selected })}
      options={userData}
      labelKey="name"
      placeholder="Find Post By User.."
      renderMenu={renderMenu}
    />
  );
};

export default AutoComplete;
