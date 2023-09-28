// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge, ipcRenderer } = require("electron");
import { CHANNELS } from "./server/utils/channels";

// console.log("Preload...");

contextBridge.exposeInMainWorld("electronAPI", {
  onAddPatient: (patient: any) =>
    ipcRenderer.invoke(CHANNELS.PATEINT_ADD, patient),
  onGetPatients: () => ipcRenderer.invoke(CHANNELS.GET_PATIENTS),
  // onDeletePatient given id
  onDeletePatient: (id: any) => ipcRenderer.invoke(CHANNELS.DELETE_PATIENT, id),

  // onEditPatient given id and data

  onEditPatient: (id: any, data: any) =>
    ipcRenderer.invoke(CHANNELS.EDIT_PATIENT, id, data),
});
