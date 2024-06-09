import React, { FormEvent, useState } from 'react';
import { createRoot } from 'react-dom/client';


const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

interface Entry {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}


function PhoneBookForm({ addEntryToPhoneBook }) {
  const [firstName, setFirstName] = useState<string>('Coder');
  const [lastName, setLastName] = useState<string>('Byte');
  const [phoneNumber, setPhoneNumber] = useState<string>('8885559999');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addEntryToPhoneBook({ firstName, lastName, phoneNumber });
  }
  return (
    <form onSubmit={handleSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname' 
        type='text'
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname'
        name='userLastname' 
        type='text' 
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone' 
        name='userPhone' 
        type='text'
        value={phoneNumber}
        onChange={e => setPhoneNumber(e.target.value)}
      />
      <br/>
      <input 
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Add User' 
      />
    </form>
  )
}

function InformationTable({ entries }) {
  return (
    <table style={style.table} className='informationTable'>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry, index) => (
          <tr key={index}>
            <td style={style.tableCell}>{entry.firstName}</td>
            <td style={style.tableCell}>{entry.lastName}</td>
            <td style={style.tableCell}>{entry.phoneNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function UserFormSolution(props) {
  const [entries, setEntries] = useState([]);

  const addEntryToPhoneBook = (entry) => {
    setEntries([...entries, entry]);
  }

  const sortedEntries = [...entries].sort((a, b) => a.lastName.localeCompare(b.lastName));

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook}/>
      <InformationTable entries={sortedEntries}/>
    </section>
  );
}