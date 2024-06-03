export default function MedicationSolution() {

    return (
        <div className="App">
            <form>
                <p>
                    <label>
                        Medication: <input name="name"/>
                    </label>
                    <br/>
                    <label>
                        Dose: <input name="dose"/>
                    </label>
                    <br/>
                    <label>
                        Frequency: <input name="frequency"/>
                    </label>
                    <br/>
                    <label>
                        Comment: <input name="comment"/>
                    </label>
                    <br/>
                </p>
                <button>Reset form</button>
                <button>Submit</button>
            </form>
        </div>
    );
}
