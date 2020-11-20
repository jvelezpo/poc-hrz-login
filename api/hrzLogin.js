const { hrzLogin } = require('jvelezpo-pager-cli/module');

module.exports = async (req, res) => {

  const { username, password, env } = req.body;

  if (!username || !password) {
    res.status(400).send({ error: "Bad credentials" })
  }
  const result = await hrzLogin.handler({
    username,
    password,
    environment: env || 'dev'
  });

  res.json({ token: result });
}
