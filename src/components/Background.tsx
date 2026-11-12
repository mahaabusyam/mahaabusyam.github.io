import './Background.css'

// Decorative only, so it is hidden from screen readers (aria-hidden).
// It is position: fixed, so it stays behind the page while you scroll.
export default function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <div className="aurora aurora-1" />
      <div className="aurora aurora-2" />
      <div className="aurora aurora-3" />
      <div className="aurora aurora-4" />
      <div className="stars stars-a" />
      <div className="stars stars-b" />
      <div className="stars stars-c" />
      <span className="shoot s1" />
      <span className="shoot s2" />
      <span className="shoot s3" />
      <span className="shoot s4" />
      <span className="shoot s5" />
      <span className="shoot s6" />
    </div>
  )
}