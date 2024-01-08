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
		const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
		res.json(data);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Server Error" }).send();
	}
});

app.get("/api/:id", async (req, res) => {
	try {
		const data = await ref.doc(req.params.id).get();
		if (!data.exists) {
			res.status(404).json({ message: "Not Found" }).send();
			return;
		}
		res.json(data.data());
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Server Error" }).send();
	}
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log("Server is running on port " + PORT);
});
