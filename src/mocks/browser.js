import { setupWorker } from "msw";
import { paymentHandlers } from "./paymentHandlers";

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...paymentHandlers);