export const formatDate = dateString => {
  return dateString
    .split(' ')
    .filter((element, index) => {
      if (index < 4) return true;
    })
    .join(' ');
};

export const urlify = str => {
  return str.replace(/\s/g, '%20');
};
