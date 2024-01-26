import { Container, Image, Stack } from "react-bootstrap";

const YourCommunity = () => {
  return (
    <div style={{ backgroundColor: "#f7fdff" }}>
      <Container className="py-5">
        <Stack direction="horizontal" gap={3} className="mb-5">
          <h1>
            Your <span className="text-primary">Hobby</span>, your{" "}
            <span className="text-primary">Community</span>
          </h1>
          <div className="ms-auto">
            <a href={"#top"}>Go to top</a>
          </div>
        </Stack>
        <div>
          <Image src="/public/assets/left-2.png" />
          <Image src="/public/assets/right-2.png" />
        </div>
      </Container>
    </div>
  );
};

export default YourCommunity;