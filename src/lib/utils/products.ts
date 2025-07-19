export const getSizesByCategory = (category: string) => {
  if (category === "shoes") {
    return ["6", "6.5", "7", "7.5", "8", "9", "10"];
  }

  return ["XS", "S", "M", "L", "XL"];
};
