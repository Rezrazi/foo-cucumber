const rules: { digit: number; output: string }[] = [
  {
    digit: 3,
    output: 'Foo',
  },
  {
    digit: 5,
    output: 'Bar',
  },
  {
    digit: 7,
    output: 'Qix',
  },
]

const computeString = (input: number): string => {
  let output = ''

  // Check if the input is divisible by a digit in our rules
  rules.forEach((rule) => {
    if (input % rule.digit === 0) {
      output += rule.output
    }
  })

  // Split the number to an array of digits
  const digits = input
    .toString()
    .split('')
    .map((digitAsString) => Number(digitAsString))

  // Check if the number contains any number in our rules
  digits.forEach((digit: number) => {
    const rule = rules.find((rule) => rule.digit === digit)

    if (!rule) {
      return
    }

    output += rule.output
  })

  // If no rules were applied, return the input as a string
  if (output.length === 0) {
    output = input.toString()
  }

  return output
}

export { computeString }
