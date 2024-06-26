const HolbertonCourse = require("./2-hbtn_course.js").default;

test("HolbertonCourse checks constructor types", () => {
    expect(() => {
      new HolbertonCourse(10, 20, ["Lucie", "Guillaume"]);
    }).toThrowError();
    expect(() => {
      new HolbertonCourse('PHP', '20', ["Lucie", "Guillaume"]);
    }).toThrowError();
    expect(() => {
      new HolbertonCourse('PHP', 20, "Lucie");
    }).toThrowError();
});

