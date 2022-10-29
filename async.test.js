const fetchData = () => {
  return Promise.resolve("peanut butter");
};

test("the data is peanut butter async", async () => {
  const data = await fetchData();
  expect(data).toBe("peanut butter");
});

test("the data is peanut butter promise", () => {
  fetchData().then((data) => {
    expect(data).toBe("peanut butter");
  });
});
