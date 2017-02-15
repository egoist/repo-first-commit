/* globals jasmine */
import repo from '../src'

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000

test('main', () => {
  return repo({
    owner: 'egoist',
    repo: 'vbuild',
    sha: '5.0'
  }).then(commit => {
    expect(commit.commit.message).toBe('init')
  })
})
