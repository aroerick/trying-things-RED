module.exports = data => {
  const averageArr = arr =>
    arr === []
      ? 0
      : arr.reduce(function(a, b) {
          return a + b
        }) / arr.length

  let passed = []
  let failed = []
  let satis = []
  let age = []

  const passfail = pnum => {
    for (let i = 0; i < data.length; i++) {
      data[i][`project${pnum}`] === 'pass'
        ? passed.push(data[i].satisfaction)
        : failed.push(data[i].satisfaction)
    }
    return {
      passed: { number: passed.length, satisfaction: averageArr(passed) },
      failed: { number: failed.length, satisfaction: averageArr(failed) }
    }
  }
  const expSat = years => {
    for (let i = 0; i < data.length; i++) {
      if(data[i].yearsExperience === years) satis.push(data[i].satisfaction)
    }
    if(satis.length >= 1){
      return {
        satisfaction: averageArr(satis)
      }
    }
    return {}
  }
  const demographicsData = () => {
    for(let i = 0; i < data.length; i++){
      age.push(data[i].age)
      satis.push(data[i].satisfaction)
    }
    return {
      averageAge: averageArr(age),
      averageSatisfaction: averageArr(satis)
    }
  }
  let projects = {
    project1: passfail(1),
    project2: passfail(2),
    project3: passfail(3),
    project4: passfail(4)
  }
  let experience = {
    1: expSat(1),
    2: expSat(2),
    3: expSat(3),
    4: expSat(4),
    5: expSat(5),
    6: expSat(6)
  }
  let demographics = demographicsData()
  let processedData = {
    projects: projects,
    experience: experience,
    demographics: demographics
  }
  // console.log(projects)
  return processedData
}
