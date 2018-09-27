const pruebasReducer = (state = {
    nombre:'princeso',
    url:'http://www.noticiaspv.com/wp-content/uploads/2013/12/7c3114462eaa9fdde5fc8446ea250ccb-princeso10.jpg'
}, action) =>{
switch(action.type){
    case "SET_NAME":
        return {
            ...state,
            name: action.data

        };
    case "SET_IMAGEN":
        return {
            ...state,
            url: action.data,
        };
    default:
        break;
}
    return state;
};

export default pruebasReducer;