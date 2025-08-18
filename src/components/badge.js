export default function Badge({ status }) {
  let badgeClass = "badge rounded-pill ";

  if (status === "Published") badgeClass += "bg-success"; 
  if (status === "Draft") badgeClass += "bg-warning text-dark"; 

  return <span className={badgeClass}>{status}</span>;
}
