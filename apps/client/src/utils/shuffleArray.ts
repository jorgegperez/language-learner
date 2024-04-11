export const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generamos un índice aleatorio
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Intercambiamos los elementos
  }
  return newArray;
};
