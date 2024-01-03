import Title from "@/components/UI/Title";
import Card from "./Card";

const Event = () => {
  return (
    <div>
      <Title name="UPCOMING EVENTS"></Title>

      <div className="grid-card">
        <Card count_element_show={4} filter=""></Card>
      </div>
    </div>
  );
};

export default Event;
