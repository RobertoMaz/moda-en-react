import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";


function openModal() {

    const Modal = lazy(() => import("./modal"));
    const modalDiv = document.createElement("div");
    modalDiv.id = "modal";

}


export default openModal;