const Employee = require("../roles/employee");

test("creates employee object", () => {
  const employee = new Employee("Steve", 20, "steve@gmail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
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

test("gets role of employee", () => {
  const employee = new Employee("Steve", 20, "steve@gmail.com");

  expect(employee.getRole()).toEqual("Employee");
});
