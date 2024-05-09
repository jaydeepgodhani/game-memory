const modifyStats = (statVar, setFunc, val, arr) => {
  const newStatVar = statVar.slice();
  newStatVar[arr[0]] = val;
  newStatVar[arr[1]] = val;
  setFunc(newStatVar);
}

export default modifyStats;