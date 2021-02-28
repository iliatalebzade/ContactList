const initialState = {
    users: [
        {
            name: 'John',
            number: '123456789',
            fav: false,
            bingEdited: false,
        },
        {
            name: 'Ali',
            number: '123456789',
            fav: false,
            bingEdited: false,
        },
        {
            name: 'Ashly',
            number: '123456789',
            fav: false,
            bingEdited: false,
        },
        {
            name: 'Mort',
            number: '123456789',
            fav: false,
            bingEdited: false,
        },
        {
            name: 'Rick',
            number: '123456789',
            fav: false,
            bingEdited: false,
        },
        {
            name: 'Alex',
            number: '123456789',
            fav: false,
            bingEdited: false,
        },
        {
            name: 'Tom',
            number: '123456789',
            fav: false,
            bingEdited: false,
        },
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'DEL_CONTACT':
            return{
                ...state,
                users: state.users.filter((item, index) => index !== action.payload)
            }
        case 'ADD_CONTACT':
            return{
                ...state,
                users:[
                    ...state.users,
                    {
                        name: action.payload.name,
                        number: action.payload.number,
                        fav: false,
                        bingEdited: false,
                    }
                ]
            }
        case 'EDDIT_FORM_TOGGLER':
            return{
                ...state,
                users: state.users.map((item, index) => {
                    if(index === action.payload){
                        return item = {
                            name: item.name,
                            number: item.number,
                            fav: item.fav,
                            bingEdited: !item.bingEdited,
                        }
                    }else{return item}
                })
            }
        case 'EDIT_CONTACT':
            return{
                ...state,
                users: state.users.map((item, index) => {
                    if(index === action.payload.index){
                        return item = {
                            name: action.payload.content.name,
                            number: action.payload.content.number,
                            fav: false,
                            bingEdited: false,
                        }
                    }else{return item}
                })
            }
        case 'ADD_FAV':
            return {
                ...state,
                users: state.users.map((item, index) => {
                    if(index === action.payload){
                        return item = {
                            name: item.name,
                            number: item.number,
                            fav: !item.fav,
                            bingEdited: item.bingEdited,
                        }
                    }else{return item}
                })
            }
        default: return state
    }
}

export default reducer;