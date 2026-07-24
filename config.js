/**
 * ================================
 * CONFIG - multi-center setup
 * ================================
 * Each center has its OWN Google Sheet + its own Apps Script deployment.
 * To add a third center later, copy one block inside CENTERS
 * and fill in its own name + URL. Nothing else needs to change.
 */
const CONFIG = {
  CENTERS: [
    {
      id: "paruliya",
      CENTER_NAME: "Paruliya Yuva Computer Training Center",
      CENTER_NAME_SHORT: "Paruliya YCTC",
      WEB_APP_URL: "https://script.google.com/macros/s/AKfycbykONKlhTCC46q9Gep9XPfp6VLRYLnNsDt4g2DFOXrjJvWCOTXtTVeSp05eaNhCuzutdw/exec"
    },
    {
      id: "smartstudy",
      CENTER_NAME: "Smart Study Youth Computer Education Centre",
      CENTER_NAME_SHORT: "Smart Study YCEC",
      WEB_APP_URL: "https://script.google.com/macros/s/AKfycby5gPLT-_vaO6tGtRZ4DEe2X_WLBvT7QezSNi6JTQiau1zWXa6vz3VrH28Cnh0J8eGW/exec"
    }
  ],

  COURSES: [
    "CITA",
    "DITA",
    "CFAS",
    "DFAS",
    "LEARN & EARN",
    "COMPUTER TEACHER'S TRAINING"
  ],

  EXPENSE_CATEGORIES: [
    "Rent",
    "Electricity Bill",
    "Internet / Recharge",
    "Staff Salary",
    "Marketing / Advertisement",
    "Stationery",
    "Travel / Fuel",
    "Other"
  ],

  PAYMENT_MODES: ["Cash", "UPI", "Bank Transfer"],

  REFERENCE_SOURCES: [
    "Student Referral",
    "Staff Referral",
    "Facebook",
    "Walk-in",
    "Other"
  ]
};
