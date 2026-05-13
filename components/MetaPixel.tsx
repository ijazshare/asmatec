"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { META_PIXEL_CONFIG } from "@/constants/meta-pixel";

export const pageview = () => {
    if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "PageView");
    }
};

export const event = (name: string, options = {}) => {
    if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", name, options);
    }
};

const MetaPixel = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    // Tracks whether this is the initial render.
    // The inline script already fires the first PageView, so we skip it here.
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (!META_PIXEL_CONFIG.isEnabled || !META_PIXEL_CONFIG.pixelId || META_PIXEL_CONFIG.pixelId === "YOUR_PIXEL_ID_HERE") {
            return;
        }

        // Skip the very first run to avoid double-counting the initial PageView
        // (the inline <Script> already calls fbq('track', 'PageView') on load).
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        if (META_PIXEL_CONFIG.autoTrackPageViews) {
            pageview();
        }
    }, [pathname, searchParams]);

    if (!META_PIXEL_CONFIG.isEnabled || !META_PIXEL_CONFIG.pixelId || META_PIXEL_CONFIG.pixelId === "YOUR_PIXEL_ID_HERE") {
        return null;
    }

    return (
        <>
            <Script
                id="fb-pixel"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_CONFIG.pixelId}');
            fbq('track', 'PageView');
          `,
                }}
            />
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: "none" }}
                    src={`https://www.facebook.com/tr?id=${META_PIXEL_CONFIG.pixelId}&ev=PageView&noscript=1`}
                    alt="meta-pixel"
                />
            </noscript>
        </>
    );
};

export default MetaPixel;

