
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
    errors.StateId = 'Please Select the State';
  }
  if (checkIsNullorEmpty(values.city)) {
    errors.city = 'Please Fill the Value of City ';
  }

  if (checkIsNullorEmpty(values.village)) {
    errors.village = 'Please Fill the Value of Village';
  }

  if (checkIsNullorEmpty(values.pattaNumber)) {
    errors.pattaNumber = 'Please Fill the Value of PattaNumber';
  }

  if (checkIsNullorEmpty(values.areaSize)) {
    errors.areaSize = 'Please Fill the Value of AreaSize';
  }

  if (checkIsNullorEmpty(values.name)) {
    errors.name = 'Please Fill the Value of LandName';
  }
  //else if (!/\S+@\S+\.\S+/.test(values.email)) {
  //  errors.email = 'Email address is invalid';
  //}
  return errors;
};

export const validatePartiation = (values: any) => {
  let errors: any = {};
  if (checkIsNullorEmpty(values.landDetailId)) {
    errors.landDetailId = 'Please Select the LandName';
  }  

  if (checkIsNullorEmpty(values.landDirection)) {
    errors.landDirection = 'Please Fill the Value of LandDirection';
  }

  if (checkIsNullorEmpty(values.areaSize)) {
    errors.areaSize = 'Please Fill the Value of AreaSize';
  }
  return errors;
};


export const validatePlowingDetails = (values: any) => {
  let errors: any = {};
  if (checkIsNullorEmpty(values.landDetailId)) {
    errors.landDetailId = 'Please Select the LandName';
  }
  if (checkIsNullorEmpty(values.partitionLandDetailId)) {
    errors.partitionLandDetailId = 'Please Select the Partition';
  }
  if (checkIsNullorEmpty(values.plowingDate)) {
    errors.city = 'Please Fill the Value of PlowingDate ';
  }

  if (checkIsNullorEmpty(values.typeofPlowing)) {
    errors.village = 'Please Fill the Type of Plowing';
  }

  if (checkIsNullorEmpty(values.plowingExp)) {
    errors.pattaNumber = 'Please Fill the Value of PlowingExpenses';
  }
  return errors;
};

export const validatePestControl = (values: any) => {
  let errors: any = {};
  if (checkIsNullorEmpty(values.landDetailId)) {
    errors.landDetailId = 'Please Select the LandName';
  }
  if (checkIsNullorEmpty(values.partitionLandDetailId)) {
    errors.partitionLandDetailId = 'Please Select the Partition';
  }
  if (checkIsNullorEmpty(values.pestControlDate)) {
    errors.pestControlDate = 'Please Fill the Value of PestControlDate ';
  }
  if (checkIsNullorEmpty(values.nameofthePestSide)) {
    errors.nameofthePestSide = 'Please Fill the Name of the PestCide ';
  }
  if (checkIsNullorEmpty(values.cost)) {
    errors.cost = 'Please Fill the Value of Cost ';
  }

  if (checkIsNullorEmpty(values.purpose)) {
    errors.purpose = 'Please Fill the Value of Purpose';
  }

  if (checkIsNullorEmpty(values.labourCost)) {
    errors.labourCost = 'Please Fill the Value of LabourCost';
  }
  return errors;
};

export const validateHarvesting = (values: any) => {
  let errors: any = {};
  if (checkIsNullorEmpty(values.landDetailId)) {
    errors.landDetailId = 'Please Select the LandName';
  }
  if (checkIsNullorEmpty(values.partitionLandDetailId)) {
    errors.partitionLandDetailId = 'Please Select the Partition';
  }
  if (checkIsNullorEmpty(values.date)) {
    errors.date = 'Please Fill the Value of Date ';
  }  
  if (checkIsNullorEmpty(values.cost)) {
    errors.cost = 'Please Fill the Value of Cost ';
  }
  if (checkIsNullorEmpty(values.noOfLabours)) {
    errors.noOfLabours = 'Please Fill the Number of Labours';
  }
  if (checkIsNullorEmpty(values.labourCost)) {
    errors.labourCost = 'Please Fill the Value of LabourCost';
  }
  return errors;
};


export const validateSale = (values: any) => {
  let errors: any = {};
  if (checkIsNullorEmpty(values.landDetailId)) {
    errors.landDetailId = 'Please Select the LandName';
  }
  if (checkIsNullorEmpty(values.partitionLandDetailId)) {
    errors.partitionLandDetailId = 'Please Select the Partition';
  }
  if (checkIsNullorEmpty(values.quantity)) {
    errors.quantity = 'Please Select the Quantity';
  }
  if (checkIsNullorEmpty(values.saleDate)) {
    errors.saleDate = 'Please Fill the Value of SaleDate ';
  }
  if (checkIsNullorEmpty(values.price)) {
    errors.price = 'Please Fill the Value of Price ';
  }
  if (checkIsNullorEmpty(values.buyerName)) {
    errors.buyerName = 'Please Fill the Value of Buyer Name';
  }
  if (checkIsNullorEmpty(values.buyerMobileNumber)) {
    errors.buyerMobileNumber = 'Please Fill the Value of Buyer Mobile Number';
  }
  return errors;
};


export const validateSeeding = (values: any) => {
  let errors: any = {};
  if (checkIsNullorEmpty(values.landDetailId)) {
    errors.landDetailId = 'Please Select the LandName';
  }
  if (checkIsNullorEmpty(values.partitionLandDetailId)) {
    errors.partitionLandDetailId = 'Please Select the Partition';
  }
  if (checkIsNullorEmpty(values.quantity)) {
    errors.quantity = 'Please Fill the Value of Quantity ';
  }
  if (checkIsNullorEmpty(values.seedName)) {
    errors.seedName = 'Please Fill the Value of SeedName ';
  }
  if (checkIsNullorEmpty(values.date)) {
    errors.date = 'Please Fill the Value of Date ';
  }
  if (checkIsNullorEmpty(values.seedCost)) {
    errors.seedCost = 'Please Fill the SeedCost ';
  }
  if (checkIsNullorEmpty(values.noOfLabours)) {
    errors.noOfLabours = 'Please Fill the Number of Labours';
  }
  if (checkIsNullorEmpty(values.labourCost)) {
    errors.labourCost = 'Please Fill the Value of LabourCost';
  }
  return errors;
};

export const validateWeedRemove = (values: any) => {
  let errors: any = {};
  if (checkIsNullorEmpty(values.landDetailId)) {
    errors.landDetailId = 'Please Select the LandName';
  }
  if (checkIsNullorEmpty(values.partitionLandDetailId)) {
    errors.partitionLandDetailId = 'Please Select the Partition';
  }
  if (checkIsNullorEmpty(values.date)) {
    errors.date = 'Please Fill the Value of Date ';
  }
  if (checkIsNullorEmpty(values.cost)) {
    errors.cost = 'Please Fill the Value of Cost ';
  }
  if (checkIsNullorEmpty(values.noOfLabours)) {
    errors.noOfLabours = 'Please Fill the Number of Labours';
  }
  if (checkIsNullorEmpty(values.labourCost)) {
    errors.labourCost = 'Please Fill the Value of labourCost';
  }
  return errors;
};
