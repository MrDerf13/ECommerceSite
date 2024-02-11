export const filterProducts = (nameString, obj) => {
  if (nameString == "best-sellers") {
    return obj.rating.rate > 4.5;
  } else if (nameString == "favourites") {
    return obj.favourited == true;
  } else {
    return obj.category == nameString;
  }
};

export const findMax = (arr) => {
  arr.reduce(
    (largest, current) =>
      current.rating.rate > largest.rating.rate ? current : largest,
    arr[0]
  );
};
