import validator from "validator";
import admin from "firebase-admin";
import { setGlobalOptions } from "firebase-functions";
import { onRequest } from "firebase-functions/https";

admin.initializeApp();
const db = admin.firestore();

setGlobalOptions({ maxInstances: 3 });

export const submitForm = onRequest(
  { timeoutSeconds: 30, region: ["us-central1"] },
  async (req, res) => {
    if (req.method !== "POST") {
      res.status(405).send("Method Not Allowed");
    }

    try {
      const body = req.query.body ? JSON.parse(req.query.body as string) : req.body;

      const name = validator.escape(validator.trim(body.name || ""));
      const email = validator.escape(validator.trim(body.email || ""));

      const company = validator.escape(validator.trim(body.company || ""));
      const message = validator.escape(validator.trim(body.message || ""));

      await db.collection("initiatives").add({
        ...{ name, email, company, message },
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      res.status(200).json({ success: true });
    } catch (err) {
      console.error("Error sending email:", err);
      res.status(500).json({ error: "Failed to send email" });
    }
  }
);
