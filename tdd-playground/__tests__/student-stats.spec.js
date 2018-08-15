const StudentStats = require('../lib/student-stats')

describe('student stats', () => {
  let statsMachine, processedData

  beforeEach(() => {
    statsMachine = new StudentStats('../lib/student-data.json')
    processedData = {
      projects: {
        project1: {
          passed: { number: 10, satisfaction: 10 },
          failed: { number: 10, satisfaction: 10 }
        },
        project2: {
          passed: { number: 10, satisfaction: 10 },
          failed: { number: 10, satisfaction: 10 }
        },
        project3: {
          passed: { number: 10, satisfaction: 10 },
          failed: { number: 10, satisfaction: 10 }
        },
        project4: {
          passed: { number: 10, satisfaction: 10 },
          failed: { number: 10, satisfaction: 10 }
        }
      },
      experience: {
        1: { satisfaction: 10 },
        2: { satisfaction: 10 },
        3: { satisfaction: 10 },
        4: { satisfaction: 10 },
        5: { satisfaction: 10 }
      },
      demographics: {
        averageAge: 10,
        averageSatisfaction: 10
      }
    }
  })
  it('Should load JSON data', () => {
    expect(statsMachine.data).toBeDefined()
    expect(statsMachine.data[0].name).toEqual('Miss Jermain Waters')
  })
  describe('When querying a project by name', () => {
    describe('When project name exists', () => {
      it('Should return the correct stats', () => {
        expect(statsMachine.getProjectByName('project1')).toEqual(
          processedData.projects['project1']
        )
      })
    })
    describe('When project name does not exist', () => {
      it('Should throw an error', () => {
        expect(() => statsMachine.getProjectByName('project5')).toThrow(
          'No Projects with that Name'
        )
      })
    })
  })
})
