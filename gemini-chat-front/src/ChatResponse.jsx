import { Button, Card } from "react-bootstrap";

const ChatResponse = ({ response }) => {
  if (!response) {
    return null;
  }
  const { candidates, usageMetadata } = response;
  return (
    <div className="container my-4">
      {candidates.map((candidate, index) => (
        <Card.Body className="border p-4 bg-white">
        <Card.Title className="mb-2 text-primary fw-bold fs-4">Response :</Card.Title>
        <Card.Text >
        {candidate.content.parts[0].text}
        </Card.Text>
      </Card.Body>
      ))}
    </div>
  );
};
export default ChatResponse;
