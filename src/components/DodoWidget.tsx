// components/DodoWidget.tsx
import { useEffect } from "react";

declare global {
  interface Window {
    DodoWidget?: any;
  }
}

export default function DodoWidget() {
  useEffect(() => {
    const loadDodoWidget = async () => {
      // Avoid loading multiple times
      if (!document.querySelector("#dodo-css")) {
        const css = document.createElement("link");
        css.id = "dodo-css";
        css.rel = "stylesheet";
        css.href = "https://widget.usedodo.com/dodo-widget.css";
        document.head.appendChild(css);
      }

      if (!document.querySelector("#dodo-script")) {
        const script = document.createElement("script");
        script.id = "dodo-script";
        script.src = "https://widget.usedodo.com/dodo-widget.iife.js";
        script.async = true;
        script.onload = () => {
          if (window.DodoWidget) {
            window.DodoWidget.init({
              title: "AAKT Support Bot",
              widgetKey: "kq66XepGJaydL3U3AJTa+hzTCx7c3mlaWiDSqSc+TvQkuo+inxz91CFux4xswX4M9klLirIEw98E4/tvHB5aoQ==",
              widgetTheme: "theme-dark-blue",
              AiName: "AAKT Support Bot",
            });
          }
        };
        document.body.appendChild(script);
      } else if (window.DodoWidget) {
        window.DodoWidget.init({
          title: "AAKT Support Bot",
          widgetKey: "kq66XepGJaydL3U3AJTa+hzTCx7c3mlaWiDSqSc+TvQkuo+inxz91CFux4xswX4M9klLirIEw98E4/tvHB5aoQ==",
          widgetTheme: "theme-dark-blue",
          AiName: "AAKT Support Bot",
        });
      }
    };

    loadDodoWidget();
  }, []);

  return null; // The widget renders externally
}
