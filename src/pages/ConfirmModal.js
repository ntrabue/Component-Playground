import React from "react";
import { H2 } from "../controls/Headings";
import { usePopoutDispatch } from "../controls/Popout";
import { Button } from "../controls/Button";
import { Row } from "../controls/Layout";
import { Form } from "../controls/Form";

const ConfirmModal = () => {
  const dispatch = usePopoutDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    alert(`you confirmed!`);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row justify="center">
        <H2>Are you sure about that?</H2>
      </Row>
      <Row justify="center" align="center" margin="10px 0">
        <Button color="positive" margin="0 5px" type="submit">
          Submit
        </Button>
        <Button margin="0 5px" type="button" onClick={() => dispatch(false)}>
          Cancel
        </Button>
      </Row>
    </Form>
  );
};

export default ConfirmModal;
