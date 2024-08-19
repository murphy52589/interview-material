import { FormEvent, useState } from 'react';
import './UserForm.css';

interface Entry {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

interface PhoneBookFormProps {
  addEntryToPhoneBook: (entry: Entry) => void;
}

interface InformationTableProps {
  entries: Entry[];
}

function PhoneBookForm({ addEntryToPhoneBook }: PhoneBookFormProps) {
  const [firstName, setFirstName] = useState<string>('Coder');
  const [lastName, setLastName] = useState<string>('Byte');
  const [phoneNumber, setPhoneNumber] = useState<string>('8885559999');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addEntryToPhoneBook({ firstName, lastName, phoneNumber });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>First name:</label>
      <br />
      <input
        name='userFirstname'
        type='text'
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        name='userLastname'
        type='text'
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        name='userPhone'
        type='text'
        value={phoneNumber}
        onChange={e => setPhoneNumber(e.target.value)}
      />
      <br />
      <input
        className='submit-button'
        type='submit'
        value='Add User'
      />
    </form>
  )
}

function InformationTable({ entries }: InformationTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry: Entry, index: number) => (
          <tr key={index}>
            <td>{entry.firstName}</td>
            <td>{entry.lastName}</td>
            <td>{entry.phoneNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function UserFormSolution() {
  const [entries, setEntries] = useState<Entry[]>([]);

  const addEntryToPhoneBook = (entry: Entry) => {
    setEntries([...entries, entry]);
  }

  const sortedEntries = [...entries].sort((a, b) => a.lastName.localeCompare(b.lastName));

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <InformationTable entries={sortedEntries} />
    </section>
  );
}
