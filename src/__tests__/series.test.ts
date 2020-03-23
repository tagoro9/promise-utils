import { series } from "~/series";

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
}

describe("series", () => {
  test("executes the promises in series", async () => {
    const spy = jest.fn();
    const data = await series([
      () => {
        spy(1);
        return Promise.resolve(1);
      },
      async () => {
        await wait(100);
        spy(2);
        return Promise.resolve(2);
      },
      () => {
        spy(3);
        return Promise.resolve(3);
      },
    ]);
    expect(data).toEqual([1, 2, 3]);
    expect(spy.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          1,
        ],
        Array [
          2,
        ],
        Array [
          3,
        ],
      ]
    `);
  });
});
