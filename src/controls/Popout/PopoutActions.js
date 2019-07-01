import React from "react";
import { Button } from "../Button";

const PopoutActions = ({ toggle, action }) => {
  return (
    <React.Fragment>
      <Button type="button" onClick={() => toggle(false)}>
        Cancel
      </Button>
      {action && <Button type="submit">Submit</Button>}
    </React.Fragment>
  );
};

export { PopoutActions };
