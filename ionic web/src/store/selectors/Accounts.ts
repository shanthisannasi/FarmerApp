export const getCurrentUser = () => {
  const loggedInString = localStorage.getItem('AUTHDATA');
  if (loggedInString) {
    const loggedInData = JSON.parse(loggedInString);
    return loggedInData;
  }
  else {
    return null;
  }
}

export const getUserQueryString = () => {
  var userData=getCurrentUser()  
  if (userData) {
    var query = "userId=" + userData.userDetail.id;
    return query;
  }
  else {
    return "";
  }
}

export const setUserForCRUD = (obj: any) => {
  var userData = getCurrentUser()
  if (userData) {
    obj["UserId"]= userData.userDetail.id;    
  }  
}


