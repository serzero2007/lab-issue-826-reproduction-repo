const { expect } = require('code');
const { it, experiment } = exports.lab = require('lab').script();

import { one, two } from "../../src/Module1/index"

experiment(`function one`, () => {
  it(`runs1`, () => {
    expect(one).to.be.a.function()
    let result = one()
    expect(result).to.be.true()
  })
  it(`runs2`, () => {
    expect(two).to.be.a.function()
    let result = two()
    expect(result).to.be.true()
  })
})
