const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with name, id, email, and Github username", () => {
      const engineer = new Engineer(
        "Salvador Espinosa Valdez",
        101,
        "espinosasalvador94@outlook.com",
        "espinosaSalvador"
      );

      expect(engineer.name).toEqual("Salvador Espinosa Valdez");
      expect(engineer.id).toEqual(101);
      expect(engineer.email).toEqual("espinosasalvador94@outlook.com");
      expect(engineer.Github).toEqual("espinosaSalvador");
    });
  });

  describe("getGithub", () => {
    it("should return the Github username", () => {
      const engineer = new Engineer(
        "Salvador Espinosa Valdez",
        101,
        "espinosasalvador94@outlook.com",
        "espinosaSalvador"
      );
      const githubUsername = engineer.getGithub();

      expect(githubUsername).toEqual(engineer.Github);
    });
  });

  describe("getRole", () => {
    it("should return the role of the engineer", () => {
      const engineer = new Engineer(
        "Salvador Espinosa Valdez",
        101,
        "espinosasalvador94@outlook.com",
        "espinosaSalvador"
      );
      const role = engineer.getRole();

      expect(role).toEqual("Engineer");
    });
  });
});
