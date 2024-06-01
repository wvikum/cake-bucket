export function getRandomImages(images: string[], count: number) {
  const shuffled = images.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
