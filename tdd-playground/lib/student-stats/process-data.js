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

  const projectsData = pnum => {
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
  const experienceData = years => {
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
    project1: projectsData(1),
    project2: projectsData(2),
    project3: projectsData(3),
    project4: projectsData(4)
  }
  let experience = {
    1: experienceData(1),
    2: experienceData(2),
    3: experienceData(3),
    4: experienceData(4),
    5: experienceData(5),
    6: experienceData(6)
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
