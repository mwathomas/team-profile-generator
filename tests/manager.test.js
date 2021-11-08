const Manager = require("../roles/manager");

test("creates Manager object", () => {
  const manager = new Manager("Steve", 20, "steve@gmail.com", 1600);
  expect(manager.name).toEqual("Steve");
  expect(manager.id).toEqual(20);
  expect(manager.email).toEqual("steve@gmail.com");
  expect(manager.officeNumber).toEqual(1600);
});

test("changes role", () => {
  const manager = new Manager("Steve", 20, "steve@gmail.com", 1600);

  expect(manager.getRole()).toEqual("Manager");
});
