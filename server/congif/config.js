import mongoose from "mongoose";
import Grid from "gridfs-stream";
import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

const mongoURI = "mongodb://localhost:27017/mydatabase";

// Create MongoDB Connection
const conn = mongoose.createConnection(mongoURI);
let gfs;
conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads"); // GridFS collection name
});

// Configure Storage Engine for Multer + GridFS
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return {
      filename: file.originalname,
      bucketName: "uploads", // Must match collection name
    };
  },
});

const upload = multer({ storage });

export { upload, gfs };
