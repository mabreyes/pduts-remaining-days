let currentDateTime = new Date()
let currentYear = currentDateTime.getFullYear().toLocaleString('en-PH').replace(",", "")
let currentMonth = (currentDateTime.getMonth() + 1).toLocaleString('en-PH')
if (currentMonth.length < 2)
    currentMonth = '0' + currentMonth
let currentDate = currentDateTime.getDate().toLocaleString('en-PH')
if (currentDate.length < 2)
    currentDate = '0' + currentDate
const startDate = currentYear + "-" + currentMonth + "-" + currentDate
const endDate = '2022-06-30'

const diffInMs = new Date(endDate) - new Date(startDate)
const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
document.querySelector('h1 #days').textContent = Math.ceil(diffInDays)