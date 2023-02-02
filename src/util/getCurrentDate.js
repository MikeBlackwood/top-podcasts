

const getCurrentDate = () => {
    let utc_date =  new Date();
    let currDate = utc_date.getUTCDate();
    currDate = currDate < 10 ? `0${currDate}` : `${currDate}`
    let month = utc_date.getMonth()+1
    month = month < 10 ? `0${month}` : `${month}`
    return `${month}-${currDate}-${utc_date.getFullYear()}`
}

export default getCurrentDate;