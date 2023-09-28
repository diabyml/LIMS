import { ipcMain } from "electron";
import { CHANNELS } from "../utils/channels";
import {
  addPatient,
  deletePatient,
  editPatient,
  getPatients,
} from "../models/patient.model";

export function registerPatientHandlers() {
  ipcMain.handle(CHANNELS.PATEINT_ADD, async (event, { name }: any) => {
    console.log(`Adding patient ${name}`);
    const res = await addPatient({ name });
    return JSON.stringify(res);
  });

  ipcMain.handle(CHANNELS.GET_PATIENTS, async () => {
    const patients = await getPatients();
    return JSON.stringify(patients);
  });

  // handle to delete patient
  ipcMain.handle(CHANNELS.DELETE_PATIENT, async (event, id: any) => {
    console.log("delete handler:", id);
    const res = await deletePatient(id);
    return JSON.stringify(res);
  });

  // handle to edit patient given id and data
  ipcMain.handle(CHANNELS.EDIT_PATIENT, async (event, id: any, data: any) => {
    console.log("edit handler:", id, data);
    const res = await editPatient(id, data);
    return JSON.stringify(res);
  });
}
