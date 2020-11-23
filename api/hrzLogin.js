const { hrzLogin } = require('@pager/pager-cli/module');

module.exports = async (req, res) => {
  
  res.setHeader('Access-Control-Allow-Origin', '*');

  try {
    const { username, password, env } = req.query;
  
    if (!username || !password) {
      return res.status(400).send({ error: "Bad credentials" })
    }
    const result = await hrzLogin.handler({
      username,
      password,
      environment: env || 'dev'
    });
  
    return res.json({ token: result });
  } catch (error) {
    return res.status(404).json({ error });
  }
}
