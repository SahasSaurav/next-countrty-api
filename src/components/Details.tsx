export default function Detail({ title, value }) {
  return (
    <h3>
      <span className="font-medium mr-1">{title}:</span>
      <span>{value}</span>
    </h3>
  );
}
