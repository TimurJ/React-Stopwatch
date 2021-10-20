import { convertTime } from "../src/utils"

test("the time is converted correctly", () => {
  expect(convertTime(5500)).toBe("00:05.50")
})
