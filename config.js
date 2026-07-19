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
      CENTER_NAME: "Paruliya Youth Computer Training Center",
      CENTER_NAME_SHORT: "Paruliya YCTC",
      WEB_APP_URL: "https://script.google.com/macros/s/AKfycbxciTM-s_pk-iglcZgMK_Cs7OqRUwsvoHQP7BTchu5-wwRO1DiCppTJBsokHwTdNZuj/exec"
    },
    {
      id: "smartstudy",
      CENTER_NAME: "Smart Study Youth Computer Education Centre",
      CENTER_NAME_SHORT: "Smart Study YCEC",
      WEB_APP_URL: "https://script.google.com/macros/s/AKfycbwSPotGtbnW8DBWp3_8138AlCmj5_Pphm6DEwK9q1FeX-i9qatQfTQbU7ci4eFkI6s-/exec"
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

  PAYMENT_MODES: ["Cash", "UPI", "Bank Transfer"]
};
