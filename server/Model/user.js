// import mongoose from "mongoose";

// // Define the schema
// const UserSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true
// },

  // cvFileId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "uploads.files", // Reference to GridFS file
  // },
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
// });

// // Create and export the model
// const User1 = mongoose.model("User", UserSchema);
// export default User1;


import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    cvFileId: {
      type: mongoose.Schema.Types.ObjectId, // Store GridFS file ID
      required: true,
    },
  },
  { timestamps: true } // Adds createdAt & updatedAt automatically
);

const User1 = mongoose.model("User", UserSchema);
export default User1;
