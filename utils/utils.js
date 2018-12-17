export const formatDate = dateString => {
  return dateString
    .split(' ')
    .filter((element, index) => {
      if (index < 4) return true;
    })
    .join(' ');
};
