// import { useState } from "react"; 
// export default function Inte() {
//     const [step, setStep] = useState(1);
//     const [file, setFile] = useState(null);
//     const [uploading, setUploading] = useState(false);
  
//     const handleFileChange = (event) => {
//       setFile(event.target.files[0]);
//     };
  
//     const handleUpload = () => {
//       if (!file) return;
//       setUploading(true);
//       setTimeout(() => {
//         setUploading(false);
//         setStep(3);
//       }, 1000); // Simulating upload
//     };
  
//     return (
//       <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
//         <h2 className="text-xl font-semibold mb-4">Customer Data Import </h2>
//         <div className="flex items-center justify-between mb-4">
//           <span className={`px-3 py-1 rounded ${step === 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}>1. Select</span>
//           <span className={`px-3 py-1 rounded ${step === 2 ? "bg-blue-500 text-white" : "bg-gray-200"}`}>2. Upload</span>
//           <span className={`px-3 py-1 rounded ${step === 3 ? "bg-green-500 text-white" : "bg-gray-200"}`}>3. Complete</span>
//         </div>
  
//         {step === 1 && (
//           <div>
//             <input type="file" onChange={handleFileChange} className="block w-full mb-2" />
//             <button
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//               onClick={() => file && setStep(2)}
//             >
//               Next
//             </button>
//           </div>
//         )}
  
//         {step === 2 && (
//           <div>
//           <p className="mb-2">Selected File: {file?.name}</p>
//           <button
//             className="bg-blue-500 text-white px-4 py-2 rounded"
//             onClick={handleUpload}
//             disabled={uploading}
//           >
//             {uploading ? "Uploading..." : "Upload"}
//           </button>
//         </div>
//         )}
  
//         {step === 3 && (
//           <div className="text-green-600 text-center">
//             <p>Upload Complete!</p>
//           </div>
//         )}
//       </div>
//     );
//   }
  
// import { useState } from "react"; 
// export default function Inte() {
//     const [step, setStep] = useState(1);
//     const [file, setFile] = useState(null);
//     const [uploading, setUploading] = useState(false);
  
//     const handleFileChange = (event) => {
//       setFile(event.target.files[0]);
//     };
  
//     const handleUpload = () => {
//       if (!file) return;
//       setUploading(true);
//       setTimeout(() => {
//         setUploading(false);
//         setStep(3);
//       }, 3000); // Simulating upload
//     };
  
//     return (
//         <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
//         <h2 className="text-xl font-semibold mb-4">Customer Data Import </h2>
//         <div className="flex items-center justify-between mb-4">
//           <span className={`px-3 py-1 rounded ${step === 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}>1. Select</span>
//           <span className={`px-3 py-1 rounded ${step === 2 ? "bg-blue-500 text-white" : "bg-gray-200"}`}>2. Upload</span>
//           <span className={`px-3 py-1 rounded ${step === 3 ? "bg-green-500 text-white" : "bg-gray-200"}`}>3. Complete</span>
//         </div>
  
//         {step === 1 && (
//           <div className="border-2 border-dashed border-blue-500 p-6 text-center rounded-lg cursor-pointer hover:bg-blue-50">
//             <input type="file" onChange={handleFileChange} className="block w-full mb-2" />
//             <button
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//               onClick={() => file && setStep(2)}
//             >
//               Next
//             </button>
//           </div>
//         )}
  
//         {step === 2 && (
//           <div>
//           <p className="mb-2">Selected File: {file?.name}</p>
//           <button
//             className="bg-blue-500 text-white px-4 py-2 rounded"
//             onClick={handleUpload}
//             disabled={uploading}
//           >
//             {uploading ? "Uploading..." : "Upload"}
//           </button>
//         </div>
//         )}
  
//         {step === 3 && (
//           <div className="text-green-600 text-center">
//             <p>Upload Complete!</p>
//           </div>
//         )}
//       </div>
//     );
//   }
  

import { useState } from "react";

export default function IntegrationCards() {
  const [step, setStep] = useState(1);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) return;
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      setStep(3);
    }, 3000); // Simulating upload
  };

  return (
     <>
     <div>
    <div className=" flex items-center justify-center  pt-10">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Integrations</h2>
        <p className="text-gray-600 mb-4">Connect your favorite tools and services.</p>
       
        
            </div>
        </div>
          
            
           
      
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto p-4">
      {/* Customer Data Import Card  */}
       <div className="bg-white rounded-lg shadow-md border border-blue-500 p-4">
        <h2 className="text-xl font-semibold mb-4">Customer Data Import</h2>
        <div className="flex items-center justify-between mb-4">
          <span className={`px-3 py-1 rounded ${step === 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}>1. Select</span>
          <span className={`px-3 py-1 rounded ${step === 2 ? "bg-blue-500 text-white" : "bg-gray-200"}`}>2. Upload</span>
          <span className={`px-3 py-1 rounded ${step === 3 ? "bg-green-500 text-white" : "bg-gray-200"}`}>3. Complete</span>
        </div>

        {step === 1 && (
       
       <>
        <div className="border-2 border-dashed border-blue-500 p-6 text-center rounded-lg cursor-pointer hover:bg-blue-50">
  <input type="file" onChange={handleFileChange} className="block w-auto mb-2" />
</div>

<button
  className="bg-blue-500 text-white px-4 py-2 rounded mt-9 flex items-center justify-center w-full"
  onClick={() => file && setStep(2)}
>
  Next
</button>

          
           </>
        )}

        {step === 2 && (
          <div>
            <p className="mb-2 ">Selected File: {file?.name}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded "
              onClick={handleUpload}
              disabled={uploading}
            >
              {uploading ? "Uploading..." : "Upload"}
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="text-green-600 text-center ">
            <p>Upload Complete!</p>
          </div>
        )}
      </div> 

      {/* Payment Integration Card */}
       <div className="bg-white rounded-lg shadow-md border border-purple-500 p-4">
        <div className="bg-purple-700 text-white p-3 rounded-t-lg flex justify-between items-center">
          <span className="font-semibold">Payment Integration</span>
          <span className="bg-purple-500 text-xs px-2 py-1 rounded-full">Premium</span>
        </div>
        <div className="p-4 text-center">
          <img src="/payment-providers.png" alt="Payment providers" className="mx-auto mb-2" />
          <h3 className="text-lg font-semibold">Connect Payment Processor</h3>
          <p className="text-gray-600 text-sm mb-4">
            Seamlessly track and process referral rewards by connecting your payment processor.
          </p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded flex items-center justify-center w-full">
            <span className="mr-2">→</span> CONNECT PAYMENT SYSTEM
          </button>
          <p className="text-gray-500 text-xs mt-3 bg-purple-100 p-2 rounded">
            Supports Stripe, PayPal, and more
          </p>
        </div>
      </div> 
    </div>
    </div>
    </>
  );
}
