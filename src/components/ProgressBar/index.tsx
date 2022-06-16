import { Bar, Progress } from "./styles";
import { ProgressPropsProps } from "./types";

export default function ProgressBar({
  progressBar,
  color = "primary"
}: ProgressPropsProps) {
  return (
    <>
      {!!progressBar && (
        <Bar>
          <Progress
            progressBar={progressBar}
            color={color}
            role="progressbar"
            aria-label="Progress Bar"
          />
        </Bar>
      )}
    </>
  );
}
