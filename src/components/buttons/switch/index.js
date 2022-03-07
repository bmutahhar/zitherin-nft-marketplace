import React, { useState } from "react";
import Switch from "react-switch";
import * as Styled from "./styled.components"

const SwitchButton = (props) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (val) => {
    setChecked(val);
  };

  return (
    <Styled.Label htmlFor="material-switch">
      <Switch
        onChange={handleChange}
        checked={checked}
        onColor="#537FEE"
        onHandleColor="#3B2A8B"
        handleDiameter={25}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={12}
        width={40}
        className="react-switch"
        id="material-switch"
      />
      <Styled.Text>{props.label}</Styled.Text>
    </Styled.Label>
  );
};

export default SwitchButton;
