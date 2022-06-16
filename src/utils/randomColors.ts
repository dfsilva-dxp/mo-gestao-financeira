type RandProps = {
  value: number | undefined;
};

const rand: RandProps = {
  value: undefined
};

export default function randomColors(colors: string[]): number {
  const result = Math.floor(Math.random() * colors.length);

  if (result === rand.value) return randomColors(colors);

  rand.value = result;

  return rand.value;
}
