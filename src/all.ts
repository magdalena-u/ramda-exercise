import * as R from "ramda"

export const all = (condition: number, array: number[]) =>
  R.all(R.equals(condition))(array)

all(3, [3, 3, 3]) //true
all(3, [3, 5, 3]) //false
