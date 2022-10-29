const fetchData = () => {
  return Promise.resolve("peanut butter");
};

test("the data is peanut butter", () => {
  fetchData().then((data) => {
    expect(data).toBe("peanut butter");
  });
});
