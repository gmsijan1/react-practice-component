import useResponsive from "./useResponsive";
import "./style.css";

export default function ResponsiveDemo() {
  const { width, height, isMobile, isTablet, isDesktop } = useResponsive();

  return (
    <div className="responsive-container">
      <h1>Window Resize Hook</h1>

      <p>Width: {width}px</p>
      <p>Height: {height}px</p>

      {isMobile && <p>📱 Mobile View</p>}
      {isTablet && <p>📱 Tablet View</p>}
      {isDesktop && <p>🖥️ Desktop View</p>}
    </div>
  );
}
