const mockData = require('../mockData')
let runner = require('../lib/test-runner')()
runner.md.header = 'AAA'
let returnValue = runner.print(mockData.testFunction, mockData.abcString, mockData.threeText, mockData.abcString)
                                                                                                              ('return')
console.log(returnValue + 'z')
