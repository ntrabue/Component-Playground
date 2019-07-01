import React, { useState } from "react";
import { H2 } from "../controls/Headings";
import { usePopoutDispatch } from "../controls/Popout";
import { Button } from "../controls/Button";
import { Row } from "../controls/Layout";
import { Form, Label, Input } from "../controls/Form";

const TestModal = ({ cb }) => {
  const dispatch = usePopoutDispatch();
  const [value, changeValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`you submitted the form with ${value}`);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <H2>A Test Form</H2>
      <Input
        type="textarea"
        value={value}
        onChange={e => changeValue(e.target.value)}
      />
      <Row justify="flex-end" margin="10px 0">
        <Button margin="0 5px" type="submit">
          Submit
        </Button>
        <Button margin="0 5px" type="button" onClick={() => dispatch(false)}>
          Cancel
        </Button>
      </Row>
    </Form>
  );
};

export default TestModal;
