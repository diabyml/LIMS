// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge, ipcRenderer } = require("electron");
import { CHANNELS } from "./utils/channels";

// console.log("Preload...");

contextBridge.exposeInMainWorld("electronAPI", {
  onAddPatient: (patient: any) =>
    ipcRenderer.invoke(CHANNELS.PATEINT_ADD, patient),
  onGetPatients: () => ipcRenderer.invoke(CHANNELS.GET_PATIENTS),
});
