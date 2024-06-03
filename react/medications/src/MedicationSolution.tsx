import { useState } from "react";

let nextId = 0;

interface Medication {
    name: string;
    dose: string;
    frequency: string;
    comment: string;
}

export default function MedicationSolution() {
    const [medications, setMedications] = useState<Medication[]>([]);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const formJson = Object.fromEntries(new FormData(e.currentTarget).entries());
        //nextId adds 1 to the current value for iterating later on
        nextId++;
        //TODO fix this logic
        setMedications([...medications, { ...formJson }]);
    }

    return (
        <div className="App">
            <form method="post" onSubmit={handleSubmit}>
                <p>
                    <label>
                        Medication: <input name="name" required />
                    </label>
                    <br />
                    <label>
                        Dose: <input name="dose" required />
                    </label>
                    <br />
                    <label>
                        Frequency: <input name="frequency" required />
                    </label>
                    <br />
                    <label>
                        Comment: <input name="comment" />
                    </label>
                    <br />
                </p>
                <button type="reset">Reset form</button>
                <button type="submit">Submit</button>
            </form>
            <div className="Medication-List">
                <ol>
                    {medications.map((medication) => (
                        <li key={medication.name}>
                            <div className="medication-list-item">
                                {`${medication.name} ${medication.dose} ${medication.frequency} - ${medication.comment}`}
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}