import { registerCoeffectHandler } from "reffects";

window.API_URL = "https://openlibrary.org";

export default function register() {
  registerCoeffectHandler("apiUrl", function apiUrl() {
    console.log(process.env);
    return { apiUrl: process.env.API_URL || window.API_URL };
  });
}
