##### Fake Doctors Real Friends App
---

##### notes

* mp3 file for podcasts available from spotify web API
  * `https://api.spotify.com/v1/episodes?ids=5u75Q17WGYR2ZDPWtSzMB0`
  * requires Bearer token with correct access
  * returns object array of episodes
  * required field is `external_playback_url`


* Full permission bearer token available from
  * `GET` : `https://open.spotify.com/get_access_token`
  * (no params/headers required)
  * expect this to return `404` at some point....

---

###### todo:

- [x] Create authorization flow to generate bearer token
- [x] Using bearer token, get list of `id` for each podcast episode
- [x] Using episode `id` query `/episodes` API endpoint to get `external_playback_url` for each episode
- [ ] With list of `.mp3` URLs, parse into Speech to Text service
- [ ] Same as above, but Voice Classification
- [ ] With above outputs, combine into `SCRIPT` file for each episode
    - [ ] `SCRIPT` should be timestamped for each word spoken
- [ ] Store script JSON files into DynamoDB for later querying
- [ ] For searching timestamps, use `content-range` bytes on `external_playback_url`