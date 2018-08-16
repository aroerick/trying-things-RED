const processData = require('../lib/student-stats/process-data')

describe('Process Data', () => {
  let processedData
  let mockData = [
    {
      name: 'Rickey Weimann',
      age: 25,
      yearsExperience: 5,
      satisfaction: 5,
      project1: 'pass',
      project2: 'fail',
      project3: 'fail',
      project4: 'pass'
    },
    {
      name: 'Marcella Rutherford',
      age: 24,
      yearsExperience: 6,
      satisfaction: 1,
      project1: 'fail',
      project2: 'fail',
      project3: 'fail',
      project4: 'fail'
    },
    {
      name: 'Dr. Silas Wintheiser',
      age: 26,
      yearsExperience: 5,
      satisfaction: 3,
      project1: 'fail',
      project2: 'fail',
      project3: 'pass',
      project4: 'fail'
    }
  ]
  beforeEach(() => {
    processedData = processData(mockData)
  })

  describe('Shape of processed data', () => {
    it('Should generate an object with 3 keys', () => {
      expect(Object.keys(processedData)).toEqual([
        'projects',
        'experience',
        'demographics'
      ])
    })
  })
  describe('Projects', () => {
    it('Should create an object for each project', () => {
      expect(Object.keys(processedData.projects)).toEqual([
        'project1',
        'project2',
        'project3',
        'project4'
      ])
    })
    it('Should show number of students passing and their average satisfaction', () => {
      expect(processedData.projects.project1.passed).toEqual({
          number: 1,
          satisfaction: 5
      })
    })
    it('Should show number of students failing and their average satisfaction', () => {
      expect(processedData.projects.project1.failed).toEqual({
          number: 2,
          satisfaction: 2
      })
    })
  })
  // describe('Experience', () => {
  //   it('Should return average satisfaction for all years of experience given in data', () => {
  //     expect(processedData.experience[5]).toEqual({
  //       satisfaction: 4
  //     })
  //   })
  // })
  // describe('Demographics', () => {
  //   it('Should return the average age and average satisfaction for data set', () => {
  //     expect(processedData.demographics).toEqual({
  //       averageAge: 25,
  //       averageSatisfaction: 3
  //     })
  //   })
  // })
})
