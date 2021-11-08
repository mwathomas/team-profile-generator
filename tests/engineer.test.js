const Engineer = require("../roles/engineer");

test("creates Engineer object", () => {
  const engineer = new Engineer("Steve", 20, "steve@gmail.com", "steve");
  expect(engineer.name).toEqual("Steve");
  expect(engineer.id).toEqual(20);
  expect(engineer.email).toEqual("steve@gmail.com");
  expect(engineer.github).toEqual("steve");
});

test("gets role of employee", () => {
  const engineer = new Engineer("Steve", 20, "steve@gmail.com", "steve");

  expect(engineer.getRole()).toEqual("Engineer");
});
