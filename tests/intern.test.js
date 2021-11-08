const Intern = require("../roles/intern");

test("creates Intern object", () => {
  const intern = new Intern("Steve", 20, "steve@gmail.com", "USC");
  expect(intern.name).toEqual("Steve");
  expect(intern.id).toEqual(20);
  expect(intern.email).toEqual("steve@gmail.com");
  expect(intern.school).toEqual("USC");
});

// gets school from getSchool()
test("pulls in school for intern", () => {
  const intern = new Intern("Steve", 20, "steve@gmail.com", "USC");

  expect(intern.getSchool()).toEqual("USC");
});

// gets role from getRole()
test("changed role", () => {
  const intern = new Intern("Steve", 20, "steve@gmail.com", "USC");

  expect(intern.getRole()).toEqual("Intern");
});
