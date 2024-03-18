interface Props {
  difficulty: string;
  className: string;
}

export default function DifficultyTag({ difficulty, className }: Props) {
  const defaultStyle =
    "px-2 rounded-full bg-[#0000000f] text-sm inline-block align-middle";
  if (difficulty === "Easy") {
    return (
      <span
        id="lc-tag"
        className={defaultStyle + " " + className + " text-[#1cb8b8]"}
      >
        {difficulty}
      </span>
    );
  } else if (difficulty === "Medium") {
    return (
      <span
        id="lc-tag"
        className={defaultStyle + " " + className + " text-[#ffb800]"}
      >
        {difficulty}
      </span>
    );
  } else {
    return (
      <span
        id="lc-tag"
        className={defaultStyle + " " + className + " text-[#f63636]"}
      >
        {difficulty}
      </span>
    );
  }
}
