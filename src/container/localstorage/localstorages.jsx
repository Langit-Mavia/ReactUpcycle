const saveDataToLocal = (data) => {
  localStorage.setItem('userData', JSON.stringify(data));
};

const getDataFromLocal = () => {
  const data = localStorage.getItem('userData');
  return data ? JSON.parse(data) : null;
};

const clearDataFromLocal = () => {
  localStorage.removeItem('userData');
};

const updateDataInLocal = (updatedData) => {
  const existingData = getDataFromLocal();

  if (existingData) {
    const updatedUserData = { ...existingData, ...updatedData };
    saveDataToLocal(updatedUserData);
  }
};

export { saveDataToLocal, getDataFromLocal, clearDataFromLocal, updateDataInLocal };
