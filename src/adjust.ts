import * as R from "ramda"

export const adjust = (array: string[]) => R.adjust(1, R.toUpper, array)

adjust(["zero", "jeden", "dwa"]) // zeroJEDENdwa
