export const FETCH_LOGIN_STARTED = "FETCH_LOGIN_STARTED";
export const FETCH_LOGIN_COMPLETED = "FETCH_LOGIN_COMPLETED";
export const FETCH_LOGIN_FAILED = "FETCH_LOGIN_FAILED";

export const FETCH_LOGOUT_STARTED = "FETCH_LOGOUT_STARTED";
export const FETCH_LOGOUT_COMPLETED = "FETCH_LOGOUT_COMPLETED";
export const FETCH_LOGOUT_FAILED = "FETCH_LOGOUT_FAILED";

export interface IAccounts {
  status: {
    statusCode: number;
    statusDisplay: string;
    statusValue: boolean;
  };
  loginInput: {
    userName: string;
    password: string;
  };
  isLoading: boolean;
  error: string;
  sessionTimeout: number;
}

export const fetchLoginData = (loginInput: any) => {
  return {
    type: FETCH_LOGIN_STARTED,
    //payload: status,
    input: loginInput
  };
};

export const fetchLogout = () => {
  return {
    type: FETCH_LOGOUT_STARTED,
  //  payload: status,

  };
};
