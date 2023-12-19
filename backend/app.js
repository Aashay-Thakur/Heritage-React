import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import serviceAccountKey from "./serviceAccountKey.json" assert { type: "json" };

initializeApp({
	credential: cert(serviceAccountKey),
});

const db = getFirestore();
const ref = db.collection("location");

const app = express();
app.use(
	cors({
		origin: "http://localhost:5173",
	})
);

app.get("/api/all", async (req, res) => {
	try {
		const snapshot = await ref.orderBy("name").get();
		const data = snapshot.docs.map((doc) => doc.data());
		res.json(data);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Server Error" }).send();
	}
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log("Server is running on port " + PORT);
});
