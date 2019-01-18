export const formatDate = dateString => {
  const dateArr = dateString.split(' ');
  dateArr.length = 4;
  return dateArr.join(' ');
};

export const urlify = str => {
  return str.trim().replace(/\s/g, '%20');
};
