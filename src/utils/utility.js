const innerJoin = (firstTableArray, SecondTableArray, condtion) => {
  let { on, where } = condtion;
  return firstTableArray.map((rowsFirstTable) => ({
    ...rowsFirstTable,
    ...SecondTableArray.find(
      (rowsSecondTable) => rowsSecondTable.on === rowsFirstTable.where
    ),
  }));
};

export { innerJoin };
