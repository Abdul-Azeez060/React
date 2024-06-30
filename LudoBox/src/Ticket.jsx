import TicketNum from "./TicketNum";
import "./Ticket.css";

export default function Ticket({ ticket }) {
  return (
    <div className="ticket">
      <h2>Lottery</h2> 
      {ticket.map((num, index) => {
        return <TicketNum key={index} num={num} />;
      })}
    </div>
  );
}
