const connection = require("../config/database");

const getHomePage = (req, res) => {
  //Process data <=> call Model
  res.render("home.ejs");
};

const showNewPosts = (req, res) => {
  //Process data <=> call Model
  res.send("New post page!");
};

const getCreateUserPage = (req, res) => {
  res.render("create_user.ejs");
};

const postCreateUser = async (req, res) => {
  const { email, name, age } = req.body;

  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, age) VALUES (?, ?, ?)`,
    [email, name, age]
  );

  return res.send("Success");
};

module.exports = {
  getHomePage,
  showNewPosts,
  postCreateUser,
  getCreateUserPage,
};
