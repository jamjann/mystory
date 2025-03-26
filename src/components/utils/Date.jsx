const FormattedDate = ({ date }) => {
  const [month, day, dof, year] = [
    date.getMonth(),
    date.getDate(),
    date.getDay(),
    date.getFullYear(),
  ];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const formattedDate = `${dayNames[dof]}, ${monthNames[month]} ${day}, ${year}`;

  return <p>{formattedDate}</p>;
};

export default FormattedDate;
