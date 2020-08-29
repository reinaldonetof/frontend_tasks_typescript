const sortArrayCustom = tasks => {
  const sortByObject = { progress: 0, finished: 1, cancelled: 2 };
  const arrayTask = tasks.sort(
    (a, b) => sortByObject[a['status']] - sortByObject[b['status']],
  );
  return arrayTask;
};

export default sortArrayCustom;
