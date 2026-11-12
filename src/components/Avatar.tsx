import { useState } from 'react'
import { profile } from '../data/profile'

// Shows /maha.jpg. If the file is missing, onError flips `failed` to true
// and we show a gradient "M" instead of a broken-image icon.
export default function Avatar() {
  const [failed, setFailed] = useState(false)

  return (
    <div className="avatar">
      <div className="avatar-spin" />
      <div className="avatar-inner">
        {failed ? (
          <span className="avatar-fallback" aria-hidden="true">
            M
          </span>
        ) : (
          <img
            src="/maha.webp"
            alt={`Portrait of ${profile.fullName}`}
            width={128}
            height={128}
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </div>
  )
}