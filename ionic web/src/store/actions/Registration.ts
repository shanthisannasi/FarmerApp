export const STORE_REG_STARTED = "STORE_REG_STARTED";
export const STORE_REG_COMPLETED = "STORE_REG_COMPLETED";
export const STORE_REG_FAILED = "STORE_REG_FAILED";

export const storeRegData = (regInput:any) => {
  return {
    type: STORE_REG_STARTED,
   // payload: status,
    input: regInput
  };
};
