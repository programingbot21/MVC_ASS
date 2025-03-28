import { useEffect, useState } from "react";
import { FaUserFriends, FaPercentage, FaDollarSign, FaChartLine } from "react-icons/fa";
import { Bell, UserCircle } from "lucide-react";
import emailjs from "emailjs-com";

export default function chat() {
  const [referrals, setReferrals] = useState([]);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    setReferrals([
      { name: "John Smith", email: "john@example.com" },
      { name: "Alice Brown", email: "alice@example.com" },
      { name: "Mike Johnson", email: "mike@example.com" },
      { name: "Sarah Wilson", email: "sarah@example.com" },
    ]);
  }, []);

  const sendEmails = () => {
    referrals.forEach((referral) => {
      const templateParams = {
        to_name: referral.name,
        to_email: referral.email,
        message: "Thank you for referring! Keep earning rewards!",
      };

      emailjs
        .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams, "YOUR_PUBLIC_KEY")
        .then(
          () => setNotification("Emails sent successfully!"),
          (error) => console.error("Error sending email:", error)
        );
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-6">
        <h1 className="text-2xl font-bold">Welcome back</h1>
        <div className="flex items-center space-x-4">
          <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
          <div className="flex items-center space-x-2">
            <UserCircle className="w-8 h-8 text-gray-600" />
            <span className="font-medium">John Doe</span>
            <span className="text-gray-500 text-sm">Admin</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard icon={<FaUserFriends />} label="Total Referrals" value="1,234" change="+12%" />
        <StatCard icon={<FaPercentage />} label="Conversion Rate" value="23.5%" change="-2.4%" negative />
        <StatCard icon={<FaDollarSign />} label="Revenue Impact" value="$12,345" change="+8.7%" />
        <StatCard icon={<FaChartLine />} label="Active Campaigns" value="3" />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-lg font-semibold mb-4">Recent Referrals</h2>
        <ul>
          {referrals.map((referral, index) => (
            <li key={index} className="flex items-center space-x-4 mb-3">
              <UserCircle className="w-8 h-8 text-gray-600" />
              <div>
                <p className="font-medium">{referral.name}</p>
                <p className="text-sm text-gray-500">{referral.email}</p>
              </div>
            </li>
          ))}
        </ul>
        <button onClick={sendEmails} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
          Send Referral Emails
        </button>
        {notification && <p className="text-green-500 mt-2">{notification}</p>}
      </div>

      <AIAssistant />
    </div>
  );
}

const StatCard = ({ icon, label, value, change, negative = false }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
    <div className="text-blue-500 text-2xl">{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <h3 className="text-xl font-bold">{value}</h3>
      {change && (
        <p className={`text-sm ${negative ? "text-red-500" : "text-green-500"}`}>
          {negative ? "↓" : "↑"} {change} vs last month
        </p>
      )}
    </div>
  </div>
);

const AIAssistant = () => (
  <div className="fixed bottom-6 right-6 bg-white p-4 rounded-lg shadow-md w-80">
    <div className="flex items-center space-x-2">
      <span className="text-lg font-bold">Referral AI Assistant</span>
    </div>
    <p className="text-sm text-gray-600 mt-2">
      Would you like to see today's insights for boosting referrals?
    </p>
    <button className="mt-2 w-full bg-blue-500 text-white px-4 py-2 rounded-lg">
      Check out today's AI insights
    </button>
    <div className="mt-3 flex justify-between text-sm text-blue-500">
      <button>Optimize strategy</button>
      <button>View metrics</button>
    </div>
  </div>
);
