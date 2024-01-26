import { Button, Container, Image, Stack } from "react-bootstrap";
import { IoIosArrowDropup } from "react-icons/io";

const YourCommunity = () => {
  return (
    <div style={{ backgroundColor: "#f7fdff" }}>
      <Container className="py-5">
        <Stack direction="horizontal" gap={3} className="mb-5">
          <div>
            <h1>
              Your <span className="text-primary">Hobby</span>, your{" "}
              <span className="text-primary">Community</span>
            </h1>
            <Button variant="primary">Get Started</Button>
          </div>
          <div className="ms-auto">
            <a href={"#top"}>
              <Stack direction="vertical" gap={2}>
                <IoIosArrowDropup className="w-25 h-25" />
                <span className="text-sm-start">Go to top (Ctrl+Home)</span>
              </Stack>
            </a>
          </div>
        </Stack>
        <div>
          <Image src="https://i.ibb.co/pXHjXX4/left-2.png" />
          <Image src="https://i.ibb.co/QHSnYXR/right-2.png" />
        </div>
      </Container>
    </div>
  );
};

export default YourCommunity;
