import { Given, Then, When } from '@cucumber/cucumber'
import { computeString } from '../../src'
import assert = require('node:assert')

let output: string

let input: number

Given('Having entry number {int}', function (param: number) {
  input = param
})

When('I apply the computeString method', function () {
  output = computeString(input)
})

Then('I get {word}', function (expected: string) {
  assert.strictEqual(output, expected)
})
