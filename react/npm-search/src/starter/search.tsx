export default function NpmSearchStarter() {

    return (
        <>
            <form>
                <p>Search NPM packages</p>
                <input
                    type="text"
                    name="search"
                />
                <button type="submit">Search</button>
            </form>
        </>
    );
}
