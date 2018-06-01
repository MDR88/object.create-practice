const jobObjectBuilder = (enumTF, writeTF, businessName, positionWorked, dateStarted, dateEnded) => {
        const jobObject = Object.create({}, {
            nameOfBusiness: {
                enumerable: enumTF,
                writable: writeTF,
                value: businessName
            },
            position: {
                enumerable: enumTF,
                writable: writeTF,
                value: positionWorked
            },
            startDate: {
                enumerable: enumTF,
                writable: writeTF,
                value: dateStarted
            },
            endDate: {
                enumerable: enumTF,
                writable: writeTF,
                value: dateEnded
            }
        })
    return jobObject   
}
const jobObjectDiv = document.querySelector("#jobs-list-div")
const arringtonVineyard = jobObjectBuilder(true, false, "Arrington Vineyard", "Cellar Hand", "08/2017", "05/2018")
const hollandHouse = jobObjectBuilder(true, false, "Holland House", "Expo", "Forever", "and Ever")
const asurion = jobObjectBuilder(true, false, "Asurion", "Tech Support", "03/2016", "08/2017") 
const jobsArray = [arringtonVineyard, hollandHouse, asurion]

const articleTagElement = document.createElement("article")
articleTagElement.setAttribute("id", "article-tag-element")
const articleTagElementObject = document.getElementById("article-tag-element")
let breakElement = document.createElement("br")

jobObjectDiv.appendChild(articleTagElement)
let listCounter = 1
for (let j = 0; j < jobsArray.length; j++) {
    let jobListElement = document.createElement("ul")
    jobListElement.setAttribute("id", `list${listCounter}`)
    articleTagElement.appendChild(jobListElement)
    for (let i in jobsArray[j]) {
        let theValue = `${i}: ${jobsArray[j][i]}`
        let listItem = document.createElement("li")
        listItem.innerHTML = `${theValue}`
        jobListElement.appendChild(listItem)
    }
    document.getElementById(`list${listCounter}`).appendChild(breakElement)
    listCounter++
}