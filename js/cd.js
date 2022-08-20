// let currentDateTime = new Date()
// let currentYear = currentDateTime.getFullYear().toLocaleString('en-PH').replace(",", "")
// let currentMonth = (currentDateTime.getMonth() + 1).toLocaleString('en-PH')
// if (currentMonth.length < 2)
//     currentMonth = '0' + currentMonth
// let currentDate = currentDateTime.getDate().toLocaleString('en-PH')
// if (currentDate.length < 2)
//     currentDate = '0' + currentDate
// const startDate = currentYear + "-" + currentMonth + "-" + currentDate
// const endDate = '2022-06-30'

// const diffInMs = new Date(endDate) - new Date(startDate)
// const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
// document.querySelector('h1 #days').textContent = Math.ceil(diffInDays)
// window.history.replaceState(null, null, "?refresh=True&days=" + Math.ceil(diffInDays))

const timestamp = 1656518400 // 06.30.2022
const days = Math.ceil((Date.now() - timestamp) / 86400000)
document.querySelector('h1 #days').textContent = days
if (days <= 1) document.querySelector('h1 #unit').textContent = "day"


// if (diffInDays <= 1) {
//     document.querySelector('h1 #count-plural-verb').textContent = 'There is'
//     document.querySelector('h1 #count-plural-day').textContent = 'day.'
// } 
// else if (diffInDays == 0) {

// } else {
//     document.querySelector('h1 #count-plural-verb').textContent = 'There are'
//     document.querySelector('h1 #count-plural-day').textContent = 'days.'
// }