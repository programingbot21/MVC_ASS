// import { useEffect, useState } from "react";

// const Customer = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:7001/api/users")
//       .then((res) => res.json())
//       .then((data) => {
//         setUsers(data.users || []); // Fallback if data.users is undefined
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching users:", error);
//         setError("Failed to fetch users. Please try again later.");
//         setLoading(false);
//       });
//   }, []);

//   // Calculate Metrics
//   const totalCustomers = users.length;
//   const totalReferrals = users.reduce((sum, user) => sum + (user.referrals || 0), 0);
//   const successfulReferrals = users.reduce(
//     (sum, user) => sum + (user.successfulReferrals || 0),
//     0
//   );
//   const avgReferralsPerCustomer =
//     totalCustomers > 0 ? (totalReferrals / totalCustomers).toFixed(2) : 0;

//   if (loading) return <p className="text-center text-lg">Loading...</p>;
//   if (error) return <p className="text-center text-lg text-red-500">{error}</p>;

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
//       <StatCard title="Total Customers" value={totalCustomers} />
//       <StatCard title="Total Referrals" value={totalReferrals} />
//       <StatCard title="Successful Referrals" value={successfulReferrals} />
//       <StatCard title="Avg Referrals per Customer" value={avgReferralsPerCustomer} />
//     </div>
//   );
// };

// const StatCard = ({ title, value }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
//       <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
//       <p className="text-3xl font-bold text-blue-600 mt-2">{value}</p>
//     </div>
//   );
// };

// export default Customer;


// import { useEffect, useState } from "react";

// const Customer = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:7001/api/users")
//       .then((res) => res.json())
//       .then((data) => {
//         setUsers(data.users || []); // Fallback if data.users is undefined
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching users:", error);
//         setError("Failed to fetch users. Please try again later.");
//         setLoading(false);
//       });
//   }, []);

//   // Get current date and 7 days ago date
//   const sevenDaysAgo = new Date();
//   sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

//   // Calculate Metrics
//   const totalCustomers = users.length;
//   const totalReferrals = users.reduce((sum, user) => sum + (user.referrals || 0), 0);
//   const successfulReferrals = users.reduce(
//     (sum, user) => sum + (user.successfulReferrals || 0),
//     0
//   );
//   const avgReferralsPerCustomer =
//     totalCustomers > 0 ? (totalReferrals / totalCustomers).toFixed(2) : 0;

//   // Calculate new customers (users who joined in the last 7 days)
//   const newCustomers = users.filter((user) => {
//     const createdAt = new Date(user.createdAt); // Assuming 'createdAt' exists in user data
//     return createdAt >= sevenDaysAgo;
//   }).length;

//   if (loading) return <p className="text-center text-lg">Loading...</p>;
//   if (error) return <p className="text-center text-lg text-red-500">{error}</p>;

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-5">
//       <StatCard title="Total Customers" value={totalCustomers} />
//       <StatCard title="New Customers (Last 7 Days)" value={newCustomers} />
//       <StatCard title="Total Referrals" value={totalReferrals} />
//       <StatCard title="Successful Referrals" value={successfulReferrals} />
//       <StatCard title="Avg Referrals per Customer" value={avgReferralsPerCustomer} />
//     </div>
//   );
// };

// const StatCard = ({ title, value }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
//       <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
//       <p className="text-3xl font-bold text-blue-600 mt-2">{value}</p>
//     </div>
//   );
// };

// export default Customer;


import { useEffect, useState } from "react";

const Customer = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newCustomer, setNewCustomer] = useState({ name: "", referrals: 0, successfulReferrals: 0 });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch("http://localhost:7001/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setError("Failed to fetch users. Please try again later.");
        setLoading(false);
      });
  };

  // Handle input changes
  const handleInputChange = (e) => {
    setNewCustomer({ ...newCustomer, [e.target.name]: e.target.value });
  };

  // Handle new customer submission
  const handleAddCustomer = (e) => {
    e.preventDefault();

    fetch("http://localhost:7001/api/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCustomer),
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers([...users, data]); // Update state with the new user
        setNewCustomer({ name: "", referrals: 0, successfulReferrals: 0 }); // Reset form
      })
      .catch((error) => console.error("Error adding user:", error));
  };

  // Get current date and 7 days ago date
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  // Calculate Metrics
  const totalCustomers = users.length;
  const totalReferrals = users.reduce((sum, user) => sum + (user.referrals || 0), 0);
  const successfulReferrals = users.reduce(
    (sum, user) => sum + (user.successfulReferrals || 0),
    0
  );
  const avgReferralsPerCustomer =
    totalCustomers > 0 ? (totalReferrals / totalCustomers).toFixed(2) : 0;

  // Calculate new customers (users who joined in the last 7 days)
  const newCustomers = users.filter((user) => {
    const createdAt = new Date(user.createdAt);
    return createdAt >= sevenDaysAgo;
  }).length;

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-lg text-red-500">{error}</p>;

  return (
    <div className="p-5">
      {/* Add New Customer Form */}
      {/* <div className="bg-white shadow-md rounded-lg p-5 mb-5">
        <h2 className="text-xl font-semibold mb-3">Add New Customer</h2>
        <form onSubmit={handleAddCustomer} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="name"
            value={newCustomer.name}
            onChange={handleInputChange}
            placeholder="Customer Name"
            className="border p-2 rounded-lg w-full"
            required
          />
          <input
            type="number"
            name="referrals"
            value={newCustomer.referrals}
            onChange={handleInputChange}
            placeholder="Total Referrals"
            className="border p-2 rounded-lg w-full"
          />
          <input
            type="number"
            name="successfulReferrals"
            value={newCustomer.successfulReferrals}
            onChange={handleInputChange}
            placeholder="Successful Referrals"
            className="border p-2 rounded-lg w-full"
          />
          <button type="submit" className="bg-blue-600 text-white p-2 rounded-lg">
            Add Customer
          </button>
        </form>
      </div> */}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard title="Total Customers" value={totalCustomers} />
        <StatCard title="New Customers (Last 7 Days)" value={newCustomers} />
        <StatCard title="Total Referrals" value={totalReferrals} />
        <StatCard title="Successful Referrals" value={successfulReferrals} />
        <StatCard title="Avg Referrals per Customer" value={avgReferralsPerCustomer} />
      </div>



      <div className="bg-white shadow-md rounded-lg p-5 mb-5">
        <h2 className="text-xl font-semibold mb-3">Add New Customer</h2>
        <form onSubmit={handleAddCustomer} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="name"
            value={newCustomer.name}
            onChange={handleInputChange}
            placeholder="Customer Name"
            className="border p-2 rounded-lg w-full"
            required
          />
          <input
            type="number"
            name="referrals"
            value={newCustomer.referrals}
            onChange={handleInputChange}
            placeholder="Total Referrals"
            className="border p-2 rounded-lg w-full"
          />
          <input
            type="number"
            name="successfulReferrals"
            value={newCustomer.successfulReferrals}
            onChange={handleInputChange}
            placeholder="Successful Referrals"
            className="border p-2 rounded-lg w-full"
          />
          <button type="submit" className="bg-blue-600 text-white p-2 rounded-lg">
            Add Customer
          </button>
        </form>
      </div>
    </div>
  );
};

const StatCard = ({ title, value }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
      <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
      <p className="text-3xl font-bold text-blue-600 mt-2">{value}</p>
    </div>
  );
};

export default Customer;


