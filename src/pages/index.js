import React from "react";
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

const Dashboard = () => {
  function handleSubmit(values) {
    alert(values);
  }

  return (
    <React.Fragment>
      <H2>Headings</H2>
      <Title>Title</Title>
      <H2>H2</H2>
      <H3>H3</H3>
      <H4>H4</H4>
      <hr />
      <H2>Buttons</H2>
      <Button>Default</Button>
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
      <Badge type="transparent">Transparent</Badge>
      <Badge type="orange">Orange</Badge>
      <Badge type="yellow">Yellow</Badge>
      <Badge type="green">Green</Badge>

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
      <Popout content={<TestModal />}>
        <Button>Neat</Button>
      </Popout>
    </React.Fragment>
  );
};

export default Dashboard;
