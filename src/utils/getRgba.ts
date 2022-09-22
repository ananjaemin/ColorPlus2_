export const getRgbaProps = (Red: number, Green: number, Blue: number, Alpha: number) => ({
  red: Red,
  green: Green,
  Blue: Blue,
  alpha: Alpha,
  rgba: `rgba(${Red},${Green},${Blue},${Alpha})`,
});
