
function checkIsNullorEmpty(value: any) {
  if (!value || value === "" || value === null || value === 0) {
    return true;
  }
  else {
    return false;
  }
}
export const validateLandDetails = (values: any) => {
  let errors: any = {};
  if (checkIsNullorEmpty(values.StateId)) {
    errors.StateId = 'Please selecte the state';
  }
  if (checkIsNullorEmpty(values.city)) {
    errors.city = 'Please fill the value of city ';
  }

  if (checkIsNullorEmpty(values.village)) {
    errors.village = 'Please fill the value of village';
  }

  if (checkIsNullorEmpty(values.pattaNumber)) {
    errors.pattaNumber = 'Please fill the value of pattaNumber';
  }

  if (checkIsNullorEmpty(values.areaSize)) {
    errors.areaSize = 'Please fill the value of areaSize';
  }

  if (checkIsNullorEmpty(values.name)) {
    errors.name = 'Please fill the value of name';
  }
  //else if (!/\S+@\S+\.\S+/.test(values.email)) {
  //  errors.email = 'Email address is invalid';
  //}
  return errors;
};

export const validatePartiation = (values: any) => {
  let errors: any = {};
  if (checkIsNullorEmpty(values.landDetailId)) {
    errors.landDetailId = 'Please selecte the land';
  }  

  if (checkIsNullorEmpty(values.landDirection)) {
    errors.landDirection = 'Please fill the value of landDirection';
  }

  if (checkIsNullorEmpty(values.areaSize)) {
    errors.areaSize = 'Please fill the value of areaSize';
  }
  return errors;
};


export const validatePlowingDetails = (values: any) => {
  let errors: any = {};
  if (checkIsNullorEmpty(values.landDetailId)) {
    errors.landDetailId = 'Please selecte the land';
  }
  if (checkIsNullorEmpty(values.partitionLandDetailId)) {
    errors.partitionLandDetailId = 'Please selecte the partiation';
  }
  if (checkIsNullorEmpty(values.plowingDate)) {
    errors.city = 'Please fill the value of plowingDate ';
  }

  if (checkIsNullorEmpty(values.typeofPlowing)) {
    errors.village = 'Please fill the value of typeofPlowing';
  }

  if (checkIsNullorEmpty(values.plowingExp)) {
    errors.pattaNumber = 'Please fill the value of plowingExp';
  }
  return errors;
};

export const validatePestControl = (values: any) => {
  let errors: any = {};
  if (checkIsNullorEmpty(values.landDetailId)) {
    errors.landDetailId = 'Please selecte the land';
  }
  if (checkIsNullorEmpty(values.partitionLandDetailId)) {
    errors.partitionLandDetailId = 'Please selecte the partiation';
  }
  if (checkIsNullorEmpty(values.pestControlDate)) {
    errors.pestControlDate = 'Please fill the value of pestControlDate ';
  }
  if (checkIsNullorEmpty(values.nameofthePestSide)) {
    errors.nameofthePestSide = 'Please fill the value of nameofthePestSide ';
  }
  if (checkIsNullorEmpty(values.cost)) {
    errors.cost = 'Please fill the value of Cost ';
  }

  if (checkIsNullorEmpty(values.purpose)) {
    errors.purpose = 'Please fill the value of purpose';
  }

  if (checkIsNullorEmpty(values.labourCost)) {
    errors.labourCost = 'Please fill the value of labourCost';
  }
  return errors;
};

export const validateHarvesting = (values: any) => {
  let errors: any = {};
  if (checkIsNullorEmpty(values.landDetailId)) {
    errors.landDetailId = 'Please selecte the land';
  }
  if (checkIsNullorEmpty(values.partitionLandDetailId)) {
    errors.partitionLandDetailId = 'Please selecte the partiation';
  }
  if (checkIsNullorEmpty(values.date)) {
    errors.date = 'Please fill the value of date ';
  }  
  if (checkIsNullorEmpty(values.cost)) {
    errors.cost = 'Please fill the value of Cost ';
  }
  if (checkIsNullorEmpty(values.noOfLabours)) {
    errors.noOfLabours = 'Please fill the value of number of Labours';
  }
  if (checkIsNullorEmpty(values.labourCost)) {
    errors.labourCost = 'Please fill the value of labourCost';
  }
  return errors;
};


export const validateSale = (values: any) => {
  let errors: any = {};
  if (checkIsNullorEmpty(values.landDetailId)) {
    errors.landDetailId = 'Please selecte the land';
  }
  if (checkIsNullorEmpty(values.partitionLandDetailId)) {
    errors.partitionLandDetailId = 'Please selecte the partiation';
  }
  if (checkIsNullorEmpty(values.quantity)) {
    errors.quantity = 'Please selecte the quantity';
  }
  if (checkIsNullorEmpty(values.saleDate)) {
    errors.saleDate = 'Please fill the value of saleDate ';
  }
  if (checkIsNullorEmpty(values.price)) {
    errors.price = 'Please fill the value of price ';
  }
  if (checkIsNullorEmpty(values.buyerName)) {
    errors.buyerName = 'Please fill the value of buyer Name';
  }
  if (checkIsNullorEmpty(values.buyerMobileNumber)) {
    errors.buyerMobileNumber = 'Please fill the value of buyerMobileNumber';
  }
  return errors;
};


export const validateSeeding = (values: any) => {
  let errors: any = {};
  if (checkIsNullorEmpty(values.landDetailId)) {
    errors.landDetailId = 'Please selecte the land';
  }
  if (checkIsNullorEmpty(values.partitionLandDetailId)) {
    errors.partitionLandDetailId = 'Please selecte the partiation';
  }
  if (checkIsNullorEmpty(values.quantity)) {
    errors.quantity = 'Please fill the value of quantity ';
  }
  if (checkIsNullorEmpty(values.seedName)) {
    errors.seedName = 'Please fill the value of seedName ';
  }
  if (checkIsNullorEmpty(values.date)) {
    errors.date = 'Please fill the value of date ';
  }
  if (checkIsNullorEmpty(values.seedCost)) {
    errors.seedCost = 'Please fill the value of Cost ';
  }
  if (checkIsNullorEmpty(values.noOfLabours)) {
    errors.noOfLabours = 'Please fill the value of number of Labours';
  }
  if (checkIsNullorEmpty(values.labourCost)) {
    errors.labourCost = 'Please fill the value of labourCost';
  }
  return errors;
};

export const validateWeedRemove = (values: any) => {
  let errors: any = {};
  if (checkIsNullorEmpty(values.landDetailId)) {
    errors.landDetailId = 'Please selecte the land';
  }
  if (checkIsNullorEmpty(values.partitionLandDetailId)) {
    errors.partitionLandDetailId = 'Please selecte the partiation';
  }
  if (checkIsNullorEmpty(values.date)) {
    errors.date = 'Please fill the value of date ';
  }
  if (checkIsNullorEmpty(values.cost)) {
    errors.cost = 'Please fill the value of Cost ';
  }
  if (checkIsNullorEmpty(values.noOfLabours)) {
    errors.noOfLabours = 'Please fill the value of number of Labours';
  }
  if (checkIsNullorEmpty(values.labourCost)) {
    errors.labourCost = 'Please fill the value of labourCost';
  }
  return errors;
};
