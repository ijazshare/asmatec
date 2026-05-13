# Meta Pixel Setup Guide

This project has Meta Pixel (formerly Facebook Pixel) integrated to track page views and contact form submissions.

## Setup Instructions

### 1. Get your Pixel ID
1. Go to your [Meta Events Manager](https://business.facebook.com/events_manager).
2. Select your Data Source (Pixel).
3. Copy the **Pixel ID** from the Settings tab.

### 2. Configure the Pixel ID
You have two ways to set the Pixel ID:

#### Option A: Using Environment Variables (Recommended)
Add this to your `.env.local` file (create it if it doesn't exist):
```env
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=your_pixel_id_here
```

#### Option B: Hardcoding in Config (Quick Fix)
Open `constants/meta-pixel.ts` and replace `"YOUR_PIXEL_ID_HERE"` with your actual ID:
```typescript
pixelId: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || "PASTE_YOUR_ID_HERE",
```

## Features Already Implemented
- **Automatic PageView Tracking**: Tracks every page visit automatically using Next.js route change detection.
- **Form Submission Tracking**: Specifically tracks the "Contact" event when a user successfully submits the contact form.
- **Layout Integration**: The `<MetaPixel />` component is already placed in `app/layout.tsx` and works globally.

## How to Test
1. Install the [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfbijbbpjohchiifkaolnnbnoaccda) Chrome extension.
2. Visit your website.
3. Open the extension to see if the "PageView" event is firing.
4. Submit the contact form to see the "Contact" event fire.

## Developer Notes
The Pixel component is located at `components/MetaPixel.tsx`. You can manually trigger events anywhere in the code like this:
```typescript
import { event } from "@/components/MetaPixel";

// Example: Tracking a custom button click
const handleClick = () => {
  event("ButtonClick", { label: "Newsletter Signup" });
};
```
