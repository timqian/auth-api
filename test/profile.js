// import axios from 'axios';
// import { BASEURL } from '../config';
// import assert from 'assert';
//
// describe("GET /profile", function () {
//   it("should need token", function () {
//     return axios.get(`${BASEURL}/profile`)
//       .then((res) => {
//         console.log(res.data);
//         assert.equal(res.data.success, false, 'should be false');
//       }).catch((res) => {
//         console.log(res.data);
//         assert.equal(res.data.success, false, 'should be false');
//         // throw new Error(res);
//       });
//   });
//
//   it("should success", function () {
//     return axios.get(`${BASEURL}/profile`, {
//       params: {
//         token: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoidGltIiwiaWF0IjoxNDQ5NjQzMTEwLCJleHAiOjE0NDk3Mjk1MTB9.Hs-omG9gUJRqEnUTfS6SIfQQup5ew763AoNz6sNEkuQ`
//       }
//     }).then((res) => {
//       console.log(res.data);
//       assert.equal(typeof res.data.name, 'string', 'name should be String');
//     }).catch((res) => {
//       throw new Error(res);
//     });
//   });
//
// });
