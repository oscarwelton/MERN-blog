const convertDate = (date) => {
  const nth = (day) => day>3&&day<21?"th":day%10===1?"st":day%10===2?"nd":day%10===3?"rd":"th";
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];


  const newDate = new Date(date);
  const day = newDate.getDay();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();

  return `${day}${nth(day)} ${months[month]} ${year}`;
};

export default convertDate;
