import PatientSchema from "./patient.mongo";

export async function addPatient(patient: any) {
  const newPatient = new PatientSchema(patient);
  return await newPatient.save();
}

export async function getPatients() {
  // return await PatientSchema.find();
  // find and return all patients as array
  return await PatientSchema.find().exec();
}

// function to delete patient
export async function deletePatient(id: string) {
  return await PatientSchema.findByIdAndDelete(id);
}

// edit patient given id and data
export async function editPatient(id: string, data: any) {
  return await PatientSchema.findByIdAndUpdate(id, data);
}
