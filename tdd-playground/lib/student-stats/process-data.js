module.exports = data => {

  const averageArr = arr => (
    (arr == []) ? 0 :
    (
      arr.reduce(function(a, b) {
        return a + b
      }) / arr.length
    )
  )
  let passed = []
  let failed = []
  const passfail = (pnum) => {
    for (let i = 0; i < data.length; i++) {
      data[i][`project${pnum}`] === 'pass'
        ?
            passed.push(data[i].satisfaction)
        :
            failed.push(data[i].satisfaction)
    }
    return {
      passed: { number: passed.length, satisfaction: averageArr(passed)},
      failed: { number: failed.length, satisfaction: averageArr(failed)}
    }
  }
  let projects = {
    project1: passfail(1),
    project2: passfail(2),
    project3: passfail(3),
    project4: passfail(4)
  }
  let experience = {}
  let demographics = {}
  let processedData = {
    projects: projects,
    experience: experience,
    demographics: demographics
  }
  console.log(projects)
  return processedData
}
