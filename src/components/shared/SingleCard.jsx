import { Button, Card, Stack } from "react-bootstrap";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosPeople } from "react-icons/io";
import { MdPlace } from "react-icons/md";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { FaCartArrowDown } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
const SingleCard = ({ title, description, buttonText, icon }) => {
  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Title>
          <Stack direction="horizontal" gap={2}>
            {icon === "people" && <IoIosPeople />}
            {icon === "place" && <MdPlace />}
            {icon === "product" && <FaCartArrowDown />}
            {icon === "program" && <BsCalendar2CheckFill />}
            {icon === "add" && <IoIosAddCircle />}
            <span> {title}</span>
          </Stack>
        </Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="outline-primary">{buttonText}</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleCard;
