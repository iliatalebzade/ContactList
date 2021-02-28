const DEL_CONTACT = 'DEL_CONTACT'
const ADD_CONTACT = 'ADD_CONTACT'
const EDIT_CONTACT = 'EDIT_CONTACT'
const ADD_FAV = 'ADD_FAV'
const EDDIT_FORM_TOGGLER = 'EDDIT_FORM_TOGGLER' 

const contactAdder = (content) => ({type: ADD_CONTACT, payload:content})
const contactDeletter = (index) => ({type: DEL_CONTACT, payload:index})
const contactEditter = (content, index) => ({type: EDIT_CONTACT, payload:{content, index}})
const favoriteAdder = (index) => ({type: ADD_FAV, payload:index})
const edittFormToggler = (index) => ({type: EDDIT_FORM_TOGGLER, payload:index})

export {
    contactAdder,
    contactDeletter,
    contactEditter,
    favoriteAdder,
    edittFormToggler
}