const fetchData = () => {
  return Promise.resolve("peanut butter");
};

const fetchDataRejected = () => {
  return Promise.reject("error");
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
  // *expect.assertions(1) uses when function is async
  // *to make sure a certain number of assertions (expect().toMatch())
  // *are call during test
  // *if expect.assertions(1); didn't specify a fulfillment promise would
  // *not fail the test
  expect.assertions(1);
  // !this test will fail because of fetchData is resolve
  // !expect(error).toMatch('error'); didn't get call
  try {
    await fetchDataRejected();
  } catch (error) {
    expect(error).toMatch(/error/);
  }
});

test("the data is peanut butter combine with resolves", async () => {
  //* resolves here of Jest
  await expect(fetchData()).resolves.toBe("peanut butter");
});

test("the data is peanut butter combine with rejects", async () => {
  //* resolves here of Jest
  await expect(fetchDataRejected()).rejects.toMatch("error");
});
