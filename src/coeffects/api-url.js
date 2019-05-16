import { registerCoeffectHandler } from 'reffects';

export default function register() {
  registerCoeffectHandler('apiUrl', function apiUrl() {
    return {
      apiUrl: process.env.API_URL
    };
  });
}
