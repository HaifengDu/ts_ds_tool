import { bubbleSort } from "../bubbleSort";

test("test bubbleSort func", () => {
    expect(bubbleSort([])).toEqual([]);
    const numArr = [7, 1, 2, 7, 2, 5, 3, 10, 15, 9];
    bubbleSort(numArr);
    expect(numArr).toEqual([1, 2, 2, 3, 5, 7, 7, 9, 10, 15]);
    const objArr = [{lgid: 2, name: "2"}, {lgid: 5, name: "5"},
        {lgid: 1, name: "1"}, {lgid: 8, name: "8"}, {lgid: 3, name: "3"}];
    bubbleSort(objArr, "lgid");
    expect(objArr).toEqual([{lgid: 1, name: "1"}, {lgid: 2, name: "2"},
        {lgid: 3, name: "3"}, {lgid: 5, name: "5"}, {lgid: 8, name: "8"}]);
});
