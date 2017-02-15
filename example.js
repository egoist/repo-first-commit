const repo = require('./')

repo({
  owner: 'egoist',
  repo: 'vbuild',
  sha: '5.0'
}).then(res => {
  console.log(res.commit.message)
})
