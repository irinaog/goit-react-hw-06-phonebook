// import {useState} from "react";
import PropTypes from 'prop-types';
import css from './FormAddContact.module.css';
// import shortid from 'shortid';

// import {  useSelector } from 'react-redux';
// import { addContact } from "Redux/store";
// import { addContact,  } from 'Redux/changeSlice';


export const FormAddContacts = ({onSubmit}) => {
  // const contacts = useSelector((state) => state.items);
  // const dispath = useDispatch();
  // const dispath = useDispatch();
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
    
    // const hendleChange = e => {
    // const { name, value } = e.currentTarget;
    
    //   switch (name) {
    //     case 'name':
    //       setName(value);
    //       break;
        
    //     case 'number':
    //       setNumber(value);
    //       break;
        
    //     default: return;
    //   }

    // };
    // const hendleSubmit = e => {
    // e.preventDefault();
    //   const form = e.currentTarget;
    //   dispath(addContact(contacts));
    //   form.reset();
    
    // };
    const hendleSubmit = e => {
      e.preventDefault();
      const name = e.currentTarget.elements.name.value;
      const number = e.currentTarget.elements.number.value;
      onSubmit({name, number})
      // console.log(contacts)
      e.currentTarget.reset();
      
        //  dispath(addContact({ name, number, id: shortid() })) 
      
    
       
      
      
   
 

      // contacts.filter(contact => {
      //   if (contact.name === name || contact.number === number) {
      //     e.currentTarget.reset();
      //     return alert('sorry');
      //   }
      //   console.log(contact.name)
      //   console.log(name)
      //   dispath(addContact({ name, number, id: shortid() }));
      //   return e.currentTarget.reset();
      // })
      
      
      
    // reset();
    };
    
  // const reset = () => {
  //   setNumber('');
  //   setName('');
  //   };
    
    
        return (
            <>
            <form  className = {css.formAddContact} onSubmit={hendleSubmit}> 
          <label className={css.formInputTitle}>
            Name 
            <input
            className={css.formInput}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              // value={name}
              // onChange={hendleChange}   
                  />
          </label>
           <label className={css.formInputTitle}>
            Number
            <input
            className={css.formInput}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                // value={number}
                // onChange={hendleChange}
            />
          </label>
          
          <button  className ={css.addBtn} type="submit">Add contact</button>
        </form></>
        )
    
};


// export const FormAddContacts = ({ onSubmit }) => {
//   // const contacts = useSelector((state) => state.contacts.items);
//   // const dispath = useDispatch();
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
    
//     const hendleChange = e => {
//     const { name, value } = e.currentTarget;
    
//       switch (name) {
//         case 'name':
//           setName(value);
//           break;
        
//         case 'number':
//           setNumber(value);
//           break;
        
//         default: return;
//       }

//     };
//     // const hendleSubmit = e => {
//     // e.preventDefault();
//     //   const form = e.currentTarget;
//     //   dispath(addContact(contacts));
//     //   form.reset();
    
//     // };
//     const hendleSubmit = e => {
//     e.preventDefault();
       
//       onSubmit({ name, number })
//     reset();
//     };
    
//   const reset = () => {
//     setNumber('');
//     setName('');
//     };
    
    
//         return (
//             <>
//             <form  className = {css.formAddContact} onSubmit={hendleSubmit}> 
//           <label className={css.formInputTitle}>
//             Name 
//             <input
//             className={css.formInput}
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                 required
//               value={name}
//               onChange={hendleChange}   
//                   />
//           </label>
//            <label className={css.formInputTitle}>
//             Number
//             <input
//             className={css.formInput}
//                 type="tel"
//                 name="number"
//                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                 required
//                 value={number}
//                 onChange={hendleChange}
//             />
//           </label>
          
//           <button  className ={css.addBtn} type="submit">Add contact</button>
//         </form></>
//         )
    
// };

FormAddContacts.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
