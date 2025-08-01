import styles from "./Circle.module.scss";

interface Props {
  color: string;
  active?: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export function Circle({ color, active, onClick }: Props) {
  const colorClass = styles[`circle-${color}`];
  const activeClass = active ? styles[`circle-${color}--active`] : "";

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick(event as unknown as React.MouseEvent<HTMLDivElement>);
    }
  };

  return (
    <div
      tabIndex={0}
      className={`${styles.circle} ${colorClass} ${activeClass}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      aria-pressed={active}
    />
  );
}
