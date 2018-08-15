module.exports = data => {
  let projects = {
    project1: {
      passed: { number: 0, satisfaction: 0 },
      failed: { number: 0, satisfaction: 0 }
    },
    project2: {
      passed: { number: 0, satisfaction: 0 },
      failed: { number: 0, satisfaction: 0 }
    },
    project3: {
      passed: { number: 0, satisfaction: 0 },
      failed: { number: 0, satisfaction: 0 }
    },
    project4: {
      passed: { number: 0, satisfaction: 0 },
      failed: { number: 0, satisfaction: 0 }
    }
  }
  let experience = {}
  let demographics = {}

  for (let i = 0; i < data.length; i++) {
    if (data[i].project1 === 'pass') projects.project1.passed.number++
    if (data[i].project2 === 'pass') projects.project2.passed.number++
    if (data[i].project3 === 'pass') projects.project3.passed.number++
    if (data[i].project4 === 'pass') projects.project4.passed.number++
    if (data[i].project1 === 'fail') projects.project1.failed.number++
    if (data[i].project2 === 'fail') projects.project2.failed.number++
    if (data[i].project3 === 'fail') projects.project3.failed.number++
    if (data[i].project4 === 'fail') projects.project4.failed.number++
  }

  let processedData = {
    projects: projects,
    experience: experience,
    demographics: demographics
  }
  return processedData
}
