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


function getDateXDaysAgo(numOfDays, date = new Date()) {
    const daysAgo = new Date(date.getTime());
  
    daysAgo.setDate(date.getDate() - numOfDays);
  
    return daysAgo;
  }
  
  const date = new Date('2022-06-30');
  
  // 👇️ Fri Dec 31 2021
  console.log(getDateXDaysAgo(17, date));
  
  document.querySelector('h1 #days').textContent = days

// if (diffInDays <= 1) {
//     document.querySelector('h1 #count-plural-verb').textContent = 'There is'
//     document.querySelector('h1 #count-plural-day').textContent = 'day.'
// } 
// else if (diffInDays == 0) {

// } else {
//     document.querySelector('h1 #count-plural-verb').textContent = 'There are'
//     document.querySelector('h1 #count-plural-day').textContent = 'days.'
// }