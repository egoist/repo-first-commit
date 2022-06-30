/* eslint-disable camelcase */
import fetch from 'axios'
import parse from 'parse-link-header'

export default function ({
  owner,
  repo,
  token,
  sha
} = {}) {
  const request = page => fetch.get(`https://api.github.com/repos/${owner}/${repo}/commits`, {
    params: {
      sha,
      per_page: 100,
      page
    },
    headers: {Authorization: `token ${token}`},
  }).then(res => {
    const {headers: {link}, data} = res
    if (!link || page !== 1) {
      return data[data.length - 1]
    }
    const {last} = parse(link)
    return request(last.page)
  })

  return request(1)
}
