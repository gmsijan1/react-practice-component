import "./style.css";

export default function ScrollTopBottom() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-container">
      <h1>Scroll To Top & Bottom</h1>

      <button onClick={scrollToBottom} className="scroll-btn">
        Scroll to Bottom
      </button>

      <div className="scroll-content">
        <p>Scroll the page and use the buttons.</p>
        <p>Keep scrolling...</p>
        <p>Almost there...</p>
        <p>End of the content.</p>
      </div>

      <button onClick={scrollToTop} className="scroll-btn">
        Scroll to Top
      </button>
    </div>
  );
}
