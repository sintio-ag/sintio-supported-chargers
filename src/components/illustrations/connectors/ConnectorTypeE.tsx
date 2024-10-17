import type { ConnectorProps } from "../../../types/connector";

function ConnectorTypeE({ className }: ConnectorProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      viewBox="0 0 300 300"
      className={className}
    >
      <path d="M150 0C67.2 0 0 67.2 0 150s67.2 150 150 150 150-67.2 150-150S232.8 0 150 0zM80.4 167.7c-9.8 0-17.7-7.9-17.7-17.7s7.9-17.7 17.7-17.7 17.7 7.9 17.7 17.7-7.9 17.7-17.7 17.7zM150 87.9c-9.8 0-17.7-7.9-17.7-17.7 0-9.8 7.9-17.7 17.7-17.7s17.7 7.9 17.7 17.7c0 9.8-7.9 17.7-17.7 17.7zm69.6 79.8c-9.8 0-17.7-7.9-17.7-17.7s7.9-17.7 17.7-17.7c9.8 0 17.7 7.9 17.7 17.7s-7.9 17.7-17.7 17.7z"></path>
    </svg>
  );
}

export default ConnectorTypeE;
