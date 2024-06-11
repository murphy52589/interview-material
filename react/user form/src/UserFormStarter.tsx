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
  return (
    <form>
      <label>First name:</label>
      <br />
      <input
        name='userFirstname'
        type='text'
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input
        name='userLastname'
        type='text'
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        name='userPhone'
        type='text'
      />
      <br/>
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
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
      </tbody>
    </table>
  );
}

export default function UserFormStarter() {
  //TODO add entries to phone book
  //TODO sort entries by last name
  const addEntryToPhoneBook = (entry: Entry) => {
    console.log(entry);
  }
  const sortedEntries: Entry[] = [];
  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <InformationTable entries={sortedEntries} />
    </section>
  );
}
