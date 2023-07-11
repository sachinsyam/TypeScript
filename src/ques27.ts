const my_height: number | string = 0;

try {
  if (isNaN(Number(my_height))) {
    throw new Error("notANumberError");
  }

  if (typeof my_height === "number") {
    if (my_height > 100) {
      throw new Error("hugeHeightError");
    }

    if (my_height < 1) {
      throw new Error("tinyHeightError");
    }
  }

  console.log(my_height);
} catch (error:any) {
  console.log(error.message);
}
