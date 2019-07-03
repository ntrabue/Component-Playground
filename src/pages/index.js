import React from "react";
import { Page, Row } from "../controls/Layout";
import ContextMenu, {
  MenuListItem,
  MenuListLink
} from "../controls/ContextMenu";
import { Button } from "../controls/Button";
import { Avatar } from "../controls/Avatar";
import { Badge } from "../controls/Badge";
import { Title, H2, H3, H4 } from "../controls/Headings";
import Card from "../controls/Cards";
import Tooltip from "../controls/Tooltip";
import Popout from "../controls/Popout";
import TestModal from "./TestModal";
import { Input, Label, Form } from "../controls/Form";
import Accordian from "../controls/Accordian";
import AccordianPopout from "./AccordianPopout";
import ConfirmModal from "./ConfirmModal";

const Dashboard = () => {
  return (
    <Page>
      <H2>Headings</H2>
      <Title>Title</Title>
      <H2>H2</H2>
      <H3>H3</H3>
      <H4>H4</H4>
      <hr />
      <H2>Buttons</H2>
      <H4>Sizes</H4>
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
      <H4>Colors</H4>
      <Button>Default</Button>
      <Button color="positive">Positive</Button>
      <Button color="negative">Negative</Button>
      <Button color="prominent">Prominent</Button>
      <hr />
      <H2>Avatar</H2>
      <H4>No Border:</H4>
      <Avatar
        src="https://lh3.googleusercontent.com/-Ook2hjQj1EA/AAAAAAAAAAI/AAAAAAAARVU/Z5WRNPYq1GI/photo.jpg"
        size="sm"
      />
      <Avatar src="https://lh3.googleusercontent.com/-Ook2hjQj1EA/AAAAAAAAAAI/AAAAAAAARVU/Z5WRNPYq1GI/photo.jpg" />
      <Avatar
        src="https://lh3.googleusercontent.com/-Ook2hjQj1EA/AAAAAAAAAAI/AAAAAAAARVU/Z5WRNPYq1GI/photo.jpg"
        size="md"
      />
      <Avatar
        src="https://lh3.googleusercontent.com/-Ook2hjQj1EA/AAAAAAAAAAI/AAAAAAAARVU/Z5WRNPYq1GI/photo.jpg"
        size="lg"
      />
      <Avatar
        src="https://lh3.googleusercontent.com/-Ook2hjQj1EA/AAAAAAAAAAI/AAAAAAAARVU/Z5WRNPYq1GI/photo.jpg"
        size="xl"
      />

      <H4>Bordered:</H4>
      <Avatar
        src="https://lh3.googleusercontent.com/-Ook2hjQj1EA/AAAAAAAAAAI/AAAAAAAARVU/Z5WRNPYq1GI/photo.jpg"
        size="sm"
        border={true}
      />
      <Avatar
        src="https://lh3.googleusercontent.com/-Ook2hjQj1EA/AAAAAAAAAAI/AAAAAAAARVU/Z5WRNPYq1GI/photo.jpg"
        border={true}
      />
      <Avatar
        src="https://lh3.googleusercontent.com/-Ook2hjQj1EA/AAAAAAAAAAI/AAAAAAAARVU/Z5WRNPYq1GI/photo.jpg"
        size="md"
        border={true}
      />

      <Avatar
        src="https://lh3.googleusercontent.com/-Ook2hjQj1EA/AAAAAAAAAAI/AAAAAAAARVU/Z5WRNPYq1GI/photo.jpg"
        size="lg"
        border={true}
      />
      <Avatar
        src="https://lh3.googleusercontent.com/-Ook2hjQj1EA/AAAAAAAAAAI/AAAAAAAARVU/Z5WRNPYq1GI/photo.jpg"
        size="xl"
        border={true}
      />
      <hr />
      <H2>Badge</H2>

      <H4>Sizes:</H4>
      <Badge size="sm">Small</Badge>
      <Badge>Default</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
      <Badge size="xl">Extra Large</Badge>

      <H4>Colors:</H4>
      <Badge>Default</Badge>
      <Badge type="red">Red</Badge>
      <Badge type="light">Light</Badge>
      <Badge type="orange">Orange</Badge>
      <Badge type="yellow">Yellow</Badge>
      <Badge type="green">Green</Badge>

      <hr />
      <H2>Popout</H2>
      <Row justify="space-between">
        <Popout width="350px" content={<TestModal />}>
          <Button>Click to see a popout</Button>
        </Popout>
        <Popout content={<ConfirmModal />}>
          <Button>Confirmation Popout</Button>
        </Popout>
        <Popout content={<AccordianPopout />}>
          <Button>Click to see an Accordian</Button>
        </Popout>
      </Row>
      <hr />
      <Form>
        <H2>Form Elements</H2>
        <Label>Text</Label>
        <Input type="text" />

        <Label>Textarea</Label>
        <Input type="textarea" />

        <Label>Select</Label>
        <Input type="select">
          <option />
          <option value="1">1</option>
          <option value="2">2</option>
        </Input>

        <Label>Checkbox</Label>
        <Input type="checkbox" />

        <Label>Switch</Label>
        <Input type="switch" />
      </Form>

      <hr />
      <H2>Tooltips</H2>
      <Tooltip tip="You are currently hovered over this badge!">
        <Badge>Hover over me</Badge>
      </Tooltip>

      <Tooltip
        location="bottom"
        tip="You are currently hovered over this button!"
      >
        <Button>Tooltip Below</Button>
      </Tooltip>
      <hr />
      <H2>Context Menu</H2>
      <ContextMenu title={"Click me"}>
        <MenuListItem>
          <MenuListLink to="#">Woah</MenuListLink>
        </MenuListItem>
        <MenuListItem>
          <MenuListLink to="#">Anotha one</MenuListLink>
        </MenuListItem>
      </ContextMenu>
      <hr />
      <H2>Card</H2>
      <Card>
        <H2>Here is a card</H2>
      </Card>
      <hr />

      <Accordian title="Click Me!">
        <p>Oh look, now I'm expanded!</p>
      </Accordian>
      <Accordian title="Lorem Ipsum">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean odio
          nulla, tincidunt vitae convallis dignissim, accumsan vel sapien. Sed
          nec elit rutrum, posuere ligula et, consectetur sapien. In lobortis
          neque quam, nec feugiat urna euismod eu. Vivamus et mi dictum,
          vehicula sem vel, sagittis metus. Suspendisse in dui laoreet,
          vulputate massa in, ornare nisl. Aenean eget pulvinar est. Duis
          condimentum rhoncus lorem vitae tempor. Nulla ultricies tempus arcu,
          vitae congue mi volutpat at. Donec ultricies orci et ex ultricies, vel
          tincidunt libero facilisis. Vestibulum sodales, magna id laoreet
          rutrum, felis nisi imperdiet tellus, et semper odio magna sit amet
          ligula. Duis molestie dolor id sapien viverra, quis laoreet lorem
          condimentum. Donec auctor diam quis ligula fermentum, eget rhoncus ex
          aliquet. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Integer odio odio, vulputate rhoncus
          diam ac, condimentum volutpat quam. Vivamus quam lectus, sollicitudin
          eu nisl eu, porta fermentum neque.
        </p>
      </Accordian>
    </Page>
  );
};

export default Dashboard;
