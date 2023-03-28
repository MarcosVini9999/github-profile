export const formatedDate = (dateString: string) => {
  const date = new Date(dateString);

  const meses = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  const formatedDate =
    String(+date.getDate() + 1) +
    " " +
    meses[date.getMonth()] +
    " " +
    date.getFullYear();

  return formatedDate;
};
