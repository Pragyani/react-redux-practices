import DeleteAllusers from "./DeleteAllusers";

const UserDetails = () => {
    return (
        <>
            <div className="content">
                <div className="admin-table">
                    <div className="admin-subtitle">List of User Details</div>
                    <button>Add New Users</button>
                </div>
                <ul>
                    <li>hie</li>
                    <li>hi</li>
                </ul>
                <hr />
                <DeleteAllusers />
            </div>


        </>
    )
}
export default UserDetails;