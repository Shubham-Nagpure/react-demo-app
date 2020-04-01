import React, { useState } from 'react';

const ButtonComponent = (props) => {
  const {value, color} = props;

  return(
    <ButtonComponent
     color = {color}>{value}
    </ButtonComponent>
  )
};

export default ButtonComponent;
