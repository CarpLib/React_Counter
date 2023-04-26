import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Header() {
  return (
    <header>
      <FontAwesomeIcon icon="calculator" bounce className="icon" />
      <h1>React Counter</h1>
    </header>
  );
}
