const Employee = require("../roles/employee");

test("creates employee object", () => {
  const employee = new Employee("Steve", 20, "steve@gmail.com");
  expect(employee.name).toEqual("Steve");
  expect(employee.id).toEqual(20);
  expect(employee.email).toEqual("steve@gmail.com");
});

test("pulls employee name", () => {
  const employee = new Employee("Steve", 20, "steve@gmail.com");

  expect(employee.getName()).toEqual("Steve");
});

test("gets ID", () => {
  const employee = new Employee("Steve", 20, "steve@gmail.com");

  expect(employee.getId()).toEqual(20);
});

test("gets email", () => {
  const employee = new Employee("Steve", 20, "steve@gmail.com");

  expect(employee.getEmail()).toEqual("steve@gmail.com");
});

test("sets role", () => {
  const employee = new Employee("Steve", 20, "steve@gmail.com");

  expect(employee.getRole()).toEqual("Employee");
});
