const { hrzLogin } = require('jvelezpo-pager-cli/module');

module.exports = async (req, res) => {
  console.log('=======hrzLogin======================');
  console.log(hrzLogin);
  console.log('=============================');
  const result = await hrzLogin.handler({
    username: 'KSWIHARTXUAT',
    password: 'Password123',
    environment: 'dev'
  });
  console.log('=====result========================');
  console.log(result);
  console.log('=============================');

  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
    result
  })
}
