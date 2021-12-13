import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import "./style.css";

const employees = [
  {
    "id": "101",
    "fullname": "Romin Irani",
    "phonenumber": "9876543210",
    "email": "romin.k.irani@gmail.com",
    "salary": "50,000",
    "designation": "Developer",
    "department": "computers",
    "manager": "rakesh patil"

  },
  {
    "id": "102",
    "fullname": "ganesh deshmukh",
    "phonenumber": "408-1111111",
    "email": "neilrirani@gmail.com",
    "salary": "50,000",
    "designation": "Developer",
    "department": "computers",
    "manager": "reva sharma"

  },
  {
    "id": "103",
    "fullname": "Romin Irani",
    "phonenumber": "9876543210",
    "email": "romin.k.irani@gmail.com",
    "salary": "50,000",
    "designation": "Developer",
    "department": "computers",
    "manager": "rakesh patil"

  },
  {
    "id": "104",
    "fullname": "Romin Irani",
    "phonenumber": "408-2222222",
    "email": "tomhanks@gmail.com",
    "salary": "50,000",
    "designation": "Programmer",
    "department": "computers",
    "manager": "rakesh patil"

  }
];


const AddTable = () => {




  const [contacts, setContacts] = useState(employees);
  const [addFormData, setAddFormData] = useState({
    id: "",
    fullname: "",
    phonenumber: "",
    email: "",
    salary: "",
    designation: "",
    department: "",
    manager: "",

  });

  const [editFormData, setEditFormData] = useState
    ({
      id: "",
      fullname: "",
      phonenumber: "",
      email: "",
      salary: "",
      designation: "",
      department: "",
      manager: "",

    });
  // const [index, setIndex] = useState(null);
  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
     const newContact = {

        id: nanoid(),
        fullname: addFormData.fullname,
        phonenumber: addFormData.phonenumber,
        email: addFormData.email,
        salary: addFormData.salary,
        designation: addFormData.designation,
        department: addFormData.department,
        manager: addFormData.manager,

     };
  
 const newContacts = [...contacts, newContact];
    setContacts(newContacts);

  };



 

const handleEditFormSubmit = (event) => {
  event.preventDefault();

  const editedContact = {
    id: editContactId,
    fullname: editFormData.fullname,
    phonenumber: editFormData.phonenumber,
    email: editFormData.email,
    salary: editFormData.salary,
    designation: editFormData.designation,
    department: editFormData.department,
    manager: editFormData.manager,
  };

  const newContacts = [...contacts];

  const index = contacts.findIndex((contact) => contact.id === editContactId);

  newContacts[index] = editedContact;

  setContacts(newContacts);
  setEditContactId(null);
};

const handleEditClick = (event, contact) => {
  event.preventDefault();
  setEditContactId(contact.id);

  const formValues = {

    // id: editContactId,
    fullname: contact.fullname,
    phonenumber: contact.phonenumber,
    email: contact.email,
    salary: contact.salary,
    designation: contact.designation,
    department: contact.department,
    manager: contact.manager,
  };

  setEditFormData(formValues);
};

const handleCancelClick = () => {
  setEditContactId(null);
};

const handleDeleteClick = (contactId) => {
  const newContacts = [...contacts];

  const index = contacts.findIndex((contact) => contact.id === contactId);

  newContacts.splice(index, 1);

  setContacts(newContacts);
};

return (
  <div>

    <form onSubmit={handleEditFormSubmit}>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>FULL NAME</th>
            <th>PHONE NUMBER</th>
            <th>EMAIL</th>
            <th>SALARY</th>
            <th>DESIGNATION</th>
            <th>DEPARTMENT</th>
            <th>MANAGER</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>


          {contacts.map((contact) => {
            return (
              <Fragment>
                  {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
                
              </Fragment>
            )
          })}
        </tbody>

      </table>
    </form>
                {/* <tr>
                  <td>{contact.id}</td>
                  <td>{contact.fullname}</td>
                  <td>{contact.phonenumber}</td>
                  <td>{contact.email}</td>
                  <td>{contact.salary}</td>
                  <td>{contact.designation}</td>
                  <td>{contact.department}</td>
                  <td>{contact.manager}</td>
                  <td>
                    <button
                      type="button"
                      onClick={(event) => handleEditClick(event, contact)}>Edit</button>
                    <button type="button" onClick={() => handleDeleteClick(contact.id)}>
                      Delete
                    </button>
                  </td>
                </tr> */}
              







    <h2>Add Details here!</h2>
    <form onSubmit={handleAddFormSubmit}>
      <input type="hidden"
        id="Id"
        name="Id"
        value="101" />
      <input
        type="text"
        name="fullname"
        required="required"
        placeholder="Enter a fullname..."
        onChange={handleAddFormChange} />
      <input
        type="tel"
        id="phone"
        name="phonenumber"
        required="required"
        placeholder="Enter an phonenumber..."
        onChange={handleAddFormChange}
      />
      <input
        type="email"
        name="email"
        required="required"
        placeholder="Enter a email..."
        onChange={handleAddFormChange}
      />


      <input
        type="text"
        name="salary"
        required="required"
        placeholder="Enter an salary..."
        onChange={handleAddFormChange}
      />


      <input
        type="text"
        name="designation"
        required="required"
        placeholder="Enter an designation..."
        onChange={handleAddFormChange}
      />
      <input
        type="text"
        name="department"
        required="required"
        placeholder="Enter an department..."
        onChange={handleAddFormChange}
      />
      <input
        type="text"
        name="manager"
        required="required"
        placeholder="Enter an manager..."
        onChange={handleAddFormChange}
      />

      <button type="submit">Add</button>
      <input type="reset" />
    </form>




    {/* <form onSubmit={ handleEditClick}>

      <tr>
      <td>

          <input type="hidden"
           id="Id" 
           name="Id" 
           value="101"/>
        <input
          type="text"
          name="fullname"
          required="required"
          placeholder="Enter a fullname..."
          value={editFormData.fullname}
          onChange={handleEditFormChange}/>
          
         

<input
          type="text"
          name="designation"
          required="required"
          placeholder="Enter designation..."
          value={editFormData.designation}
          onChange={handleEditFormChange}
        />
           
           <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          value={editFormData.email}
          onChange={handleEditFormChange}
        />
        
         <input
          type="text"
          name="salary"
          required="required"
          placeholder="Enter a salary..."
          value={editFormData.salary}
          onChange={handleEditFormChange}
        />
    
    
           <input
          type="text"
          name="designation"
          required="required"
          placeholder="Enter an designation..."
          value={editFormData.designation}
          onChange={handleEditFormChange}
        />  
           <input
          type="text"
          name="department"
          required="required"
          value={editFormData.department}
          onChange={handleEditFormChange}
        />  
           <input
          type="text"
          name="manager"
          required="required"
          placeholder="Enter an manager..."
          value={editFormData.manager}
          onChange={handleEditFormChange}
        />  
        
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
        </form>    */}



  </div>

)
}

export default AddTable;

