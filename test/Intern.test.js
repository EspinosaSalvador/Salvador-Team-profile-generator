const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with name, id, email, and school", () => {
      const intern = new Intern(
        "Salvador Espinosa Valdez",
        101,
        "espinosasalvador94@outlook.com",
        "Tec de Monterrey"
      );

      expect(intern.name).toEqual("Salvador Espinosa Valdez");
      expect(intern.id).toEqual(101);
      expect(intern.email).toEqual("espinosasalvador94@outlook.com");
      expect(intern.School).toEqual("Tec de Monterrey");
    });
  });

  describe("getSchool", () => {
    it("should return the school name", () => {
      const intern = new Intern(
        "Salvador Espinosa Valdez",
        101,
        "espinosasalvador94@outlook.com",
        "Tec de Monterrey"
      );
      const school = intern.getSchool();

      expect(school).toEqual(intern.School);
    });
  });

  describe("getRole", () => {
    it("should return the role of the intern", () => {
      const intern = new Intern(
        "Salvador Espinosa Valdez",
        101,
        "espinosasalvador94@outlook.com",
        "Tec de Monterrey"
      );
      const role = intern.getRole();

      expect(role).toEqual("Intern");
    });
  });
});
