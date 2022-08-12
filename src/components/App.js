import { useEffect} from "react";
import shortid from 'shortid';

import { FormAddContacts } from "./FormAddContacts/FormAddContacts";
import { ContactsList } from "./ContactsList/ContactList";
import { FilterContacts } from "./FilterContacts/FilterContacts";

import { useSelector,useDispatch } from "react-redux";
import { addContact, filterContacts} from "Redux/store";
// import { itemsReducer } from "Redux/store";



export const App = () => {

  const dispath = useDispatch();
  // console.log(dispath)
  const contacts = useSelector(state => state.items);
  const filter = useSelector(state => state.filter);
  // console.log(contacts)
  
  // const [contacts, setContacts] = useState(
  //   JSON.parse(window.localStorage.getItem('contacts')) ??
  //   [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]
  // );
  // const [filter, setFilter] = useState('');
  

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts)) 
  }, [contacts]);


  const formSubmitHandler = data => {
    // console.log(data.name)
    if (contacts.find(contact => (data.name === contact.name))){
      alert(data.name + ' is already in contacts' )
    }
    else {
      dispath(addContact({ name:data.name, number:data.number, id: shortid() }))
    //   setContacts([...contacts, { name: data.name, number: data.number, id: shortid.generate() }]);
    }
  };

  const getFilterContacts = () => {
    if (filter !== '') {
      return dispath(filterContacts(filter));
    }
  };



  // const changeFilter = e => {
  //   dispath(filter(e.currentTarget.value));
  // };

  // const getFilterListContact = useMemo(() => {
  //   return contacts.filter(contact => contact.name.toLowerCase().includes(filter));
  // }, [contacts, filter]);

  // const getFilterListContact = () => {
  //    return contacts.filter(contact => contact.name.toLowerCase().includes(filter));
  // };
  

  // const deleteContact = (contactId) => {
  //   contacts.filter(contact => contact.id !== contactId);
  // };

  // const deleteContact = (contactId) => {
  //   // dispath(deleteContact({id: {contactId}}))
  //   // console.log(contactId)
  //   dispath(deleteContact({id:contactId}))
  //   console.log(dispath(deleteContact({id:contactId})))
      
  // };

    return (
      <>
        <h1 className="headlineApp">Phonebook</h1>
        
        <FormAddContacts  onSubmit={formSubmitHandler}/>
       
        <FilterContacts
          // contact={filter}
          getList={getFilterContacts}
        />

        {contacts !== []  &&
          <>
        <h2 className="contactListTitle">Contacts</h2>
        <ContactsList />
        </>}
      
        

        {/* {filter !== ''?  <ContactsList
          contacts={getFilterContacts()}
          // onDeleteContact = {deleteContact}
        />:<ContactsList
          contacts={contacts}
          // onDeleteContact={deleteContact}
        />} */}
      
    
      </>
    );
  
};


// export const App = () => {

//   const dispath = useDispatch();
//   // console.log(dispath)
//   const contact = useSelector(state => state.items);
//   console.log(contact)
  
//   const [contacts, setContacts] = useState(
//     JSON.parse(window.localStorage.getItem('contacts')) ??
//     [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]
//   );
//   const [filter, setFilter] = useState('');
  

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts)) 
//   }, [contacts]);


//   const formSubmitHandler = data => {
//     if (contacts.find(contact => (data.name === contact.name))){
//       alert(data.name + ' is already in contacts' )
//     }
//     else {
//       setContacts([...contacts, { name: data.name, number: data.number, id: shortid.generate() }]);
//     }
//   };


//   const changeFilter = e => {
//     setFilter(e.currentTarget.value);
//   };

//   // const getFilterListContact = useMemo(() => {
//   //   return contacts.filter(contact => contact.name.toLowerCase().includes(filter));
//   // }, [contacts, filter]);

//   const getFilterListContact = () => {
//      return contacts.filter(contact => contact.name.toLowerCase().includes(filter));
//   };
  

//   const deleteContact = (contactId) => {
//     setContacts(prevState => (prevState.filter(contact => contact.id !== contactId)));
//   };

//     return (
//       <>
//         <h1 className="headlineApp">Phonebook</h1>
        
//         <FormAddContacts onSubmit={formSubmitHandler} />
       
//         <FilterContacts
//           contact={filter}
//           filter={changeFilter}
//         />
      
//         <h2 className="contactListTitle">Contacts</h2>

//         {filter !== ''?  <ContactsList
//           contacts={getFilterListContact()}
//           onDeleteContact = {deleteContact}
//         />:<ContactsList
//           contacts={contacts}
//           onDeleteContact = {deleteContact}/>}
      
    
//       </>
//     );
  
// };


