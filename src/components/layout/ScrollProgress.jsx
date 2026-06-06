// ScrollProgress.jsx - DEPRECATED: Not used in current implementation
// Kept for reference only - can be safely deleted

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const frame = useRef(0);
  const last = useRef(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const value = height > 0 ? (scrollTop / height) * 100 : 0;
      const next = Math.min(100, Math.max(0, value));
      if (Math.abs(next - last.current) >= 0.5) {
        last.current = next;
        setProgress(next);
      }
    };

    const onScroll = () => {
      if (frame.current) return;
      frame.current = window.requestAnimationFrame(() => {
        frame.current = 0;
        update();
      });
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (frame.current) window.cancelAnimationFrame(frame.current);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress__bar" style={{ transform: `scaleX(${progress / 100})` }} />
    </div>
  );
}
