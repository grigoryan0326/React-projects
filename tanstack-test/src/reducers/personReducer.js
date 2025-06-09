const initialState = [{
    "id": "329302fb-7e31-4692-9a40-0cfe8d055f0b",
    "firstName": "Changed",
    "lastName": "Info",
    "age": 333,
    "date": "6/3/2025"
    },
    {
        "id": "c7ac95ac-e00f-4627-b449-5a7be2939287",
        "firstName": "Changed",
        "lastName": "Info",
        "age": 18,
        "date": "6/3/2025"
    },
    {
        "id": "5d76ab3a-a03e-4298-a4fa-e7ae32365223",
        "firstName": "Karen",
        "lastName": "Grigoryan",
        "age": 25,
        "date": "6/3/2025"
    }]

export const DELETE_PERSON = 'delete_person';
export const PUT_PERSON = 'put_person';
export const PATCH_PERSON = 'patch_person';

export const personReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_PERSON: {
            return [...state.filter(el => {
                console.log(el.id, action.payload.id)
                return el.id !== action.payload.id
            })]
        }
        case PUT_PERSON: {
            return [...state.map(el => {
                if(el.id === action.payload.id) {
                    return action.payload
                } else return el
            })]
        }
        case PATCH_PERSON: {
            return [...state.map(el => {
                if(el.id === action.payload.id) {
                    return {
                        ...el,
                        age: action.payload.age,
                    }
                } else return el
            })]
        }
        default: {
            console.log('unknown action type', action.type)
            return state;
        }
    }
}

const test = personReducer(undefined, {
    type: DELETE_PERSON,
    payload: {
        id: "5d76ab3a-a03e-4298-a4fa-e7ae32365223"
    }
})
