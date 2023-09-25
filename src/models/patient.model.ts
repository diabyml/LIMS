import PatientSchema from "./patient.mongo";

export async function addPatient(patient: any) {
  const newPatient = new PatientSchema(patient);
  return await newPatient.save();
}

export async function getPatients() {
  return await PatientSchema.find();
}
