import useCustomHook from "./Coustomhook";

const StudentRoutes = () => {
    const { data, isloading, error } = useCustomHook();

    if (isloading) return <p>⏳ Loading...</p>;
    if (error) return <p style={{ color: 'red' }}>❌ Failed to load!</p>;
    if (!data) return <p>No data </p>;

    return (
        <div>
            {/* Replace with exact field names from your JSON! */}
            <p>{JSON.stringify(data)}</p>
        </div>
    );
};
export default StudentRoutes;