import { GET_STATELIST_STARTED, GET_STATELIST_COMPLETED,GET_STATELIST_FAILED }
  from '../../actions/StateList';


const initialStateData={
  stateitems: [],
}

const stateListData = (state = initialStateData, action: any) => {
  switch (action.type) {
    case GET_STATELIST_STARTED:
      return {
        ...state,       
      };
    case GET_STATELIST_COMPLETED:
      return {
        ...state,
        stateitems: action.payload
      };
    case GET_STATELIST_FAILED:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
};

export default stateListData;