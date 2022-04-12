import { shipFactory } from "../scripts/ship";

test("Ship has length property", () => {
  let ship = shipFactory(4);
  expect(ship.getLength()).toBe(4);
});

test("Ship has fields", () => {
  let ship = shipFactory(4);
  expect(ship.getFields()).toEqual([0, 0, 0, 0]);
});

test("Hitting ship results in changed fields", () => {
  let ship = shipFactory(4);
  ship.hit(0);
  expect(ship.getFields()).toEqual([1, 0, 0, 0]);
});

test("Hitting ship as often as its length results in sunk ship", () => {
  let ship = shipFactory(4);
  ship.hit(0);
  ship.hit(1);
  ship.hit(2);
  ship.hit(3);
  expect(ship.isSunk()).toBe(true);
});

test("Hitting ship as often as its length, but twice on same tile does not sink ship", () => {
  let ship = shipFactory(4);
  ship.hit(0);
  ship.hit(1);
  ship.hit(2);
  ship.hit(2);
  expect(ship.isSunk()).toBe(false);
});
