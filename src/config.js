// =============================================
//  CENTRAL API CONFIG — FreshCart Consumer App
// =============================================
// Local development:   http://localhost:8000
// Same-network mobile: http://<your-pc-ip>:8000  (auto-detected)
// Production:          Set VITE_API_BASE in .env file
// =============================================

const API_BASE = import.meta.env.VITE_API_BASE || 'http://162.55.25.67/~durgapal/';

if (import.meta.env.DEV) {
    console.info('[FreshCart] API_BASE =', API_BASE);
}

export const GOOGLE_CLIENT_ID = "PASTE_YOUR_GOOGLE_CLIENT_ID_HERE";

export default API_BASE;
