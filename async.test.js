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

test("the fetch fails with an error", async () => {
  // *expect.assertions(1) uses when function is callback based
  // *make sure the callback function get call later
  // *1 here means just 1 callback function in the fetchData
  // !expect.assertions(1);
  // !this test will fail because fetchData is a promise call not a callback
  try {
    await fetchData();
  } catch (error) {
    expect(error).toMatch(/error/);
  }
});
