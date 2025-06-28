'use client'

import { useEffect, useState } from "react"

export default function StrengthAndFaithCoachSlides() {
  const [startDate, setStartDate] = useState<string | null>(null)
  const [availableDay, setAvailableDay] = useState(0)

  const days = [
    {
      title: "Day 1 – You Can’t Change What You Won’t Confront",
      image: "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1200&q=80",
      scripture: "Then you will know the truth, and the truth will set you free. – John 8:32",
      core: `Today marks Day 1 of your comeback — not because you hit rock bottom, but because you chose honesty. The hardest lies to face are the quiet ones we tell ourselves: “It’s not that bad.” “I can stop anytime.” “I’ve got it under control.”

But deep down, you know this has cost you more than just mornings and memories. It’s cost you clarity, strength, respect — from others, and from yourself. This isn’t about shame. It’s about ownership.

The truth hurts at first. But it's also the beginning of healing. You don't need another excuse. You need alignment between your values and your actions. And that begins today — with the truth.`,
      bullets: [
        "God isn’t waiting for perfection. He honors honesty.",
        "Think of truth like form in the gym — when your form is off, your progress stalls.",
        "Honesty with yourself is the first rep in this 90-day set."
      ],
      challenge: "Write down what alcohol has truly cost you — physically, spiritually, emotionally. No sugarcoating. Then write what you hope to gain back."
    },
    {
      title: "Day 2 – The War Within",
      image: "https://images.unsplash.com/photo-1533587851505-d1393c317b99?auto=format&fit=crop&w=1200&q=80",
      scripture: "I do not understand what I do. For what I want to do I do not do, but what I hate I do. – Romans 7:15",
      core: `If you feel torn — good. That means you’re waking up.

You’re not broken. You’re in a battle. When your actions don’t match your values, your mind rebels. That tension is called cognitive dissonance — and it’s not a sign of failure. It’s a sign of spiritual friction, of a deeper man rising.

The old you wants comfort. The new you craves alignment. Today, don’t run from that discomfort — study it. Let it sharpen you.`,
      bullets: [
        "God sees the conflict within you — and still calls you chosen.",
        "Progress happens between sets — in the tension. That soreness? That’s growth.",
        "The pain you feel isn’t punishment. It’s your potential fighting to emerge."
      ],
      challenge: "When temptation hits today, pause. Don’t fight it — observe it. Write down what triggered it, and what you felt in your body and mind. That’s data for war."
    },
    {
      title: "Day 3 – Break the Loop",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80",
      scripture: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. – Romans 12:2",
      core: `Habits aren’t random. They’re loops. Cue → Craving → Response → Reward.

At some point, alcohol became a shortcut to relief. The problem is, shortcuts always cost more in the long run. But here’s the truth: what was once automatic can be reprogrammed. God wired your brain to change.

Every time you interrupt the loop, you weaken it. Your freedom isn’t in a finish line — it’s in the daily decision to break the cycle and build new patterns.`,
      bullets: [
        "Transformation isn’t instant—it’s a renewal.",
        "Like learning a new lift, at first it feels awkward. But repetition builds rhythm.",
        "You don’t need to feel “strong” to win. You need to act in alignment with who you’re becoming."
      ],
      challenge: "Map your loop: What’s your usual cue? What do you crave? What’s your response? What’s the false reward? Now write a new plan: What will you do instead next time?"
    }
  ]

  useEffect(() => {
    const storedStart = localStorage.getItem("programStart")
    if (!storedStart) {
      const today = new Date().toISOString()
      localStorage.setItem("programStart", today)
      setStartDate(today)
      setAvailableDay(1)
    } else {
      setStartDate(storedStart)
      const start = new Date(storedStart)
      const now = new Date()
      const diffDays = Math.floor((now - start) / (1000 * 60 * 60 * 24)) + 1
      setAvailableDay(diffDays)
    }
  }, [])

  return (
    <div className="p-6 space-y-12 bg-gradient-to-b from-slate-50 to-slate-200 min-h-screen">
      {days.slice(0, availableDay).map((day, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl shadow-xl p-6 max-w-xl mx-auto border border-slate-300"
        >
          {day.image && (
            <div className="mb-4 overflow-hidden rounded-lg">
              <img
                src={day.image}
                alt={`Visual for ${day.title}`}
                style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: '0.5rem', display: 'block' }}
              />
            </div>
          )}
          <h2 className="text-2xl font-bold text-slate-800 mb-2">{day.title}</h2>
          <p className="italic text-slate-500 text-sm mb-4">{day.scripture}</p>
          <p className="text-slate-700 mb-4 whitespace-pre-line">{day.core}</p>
          <div className="mb-4">
            <h3 className="font-semibold text-slate-800 mb-1">Faith–Fitness–Frame:</h3>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              {day.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-100 border-l-4 border-blue-500 p-3 rounded">
            <p className="font-semibold text-slate-800">Challenge:</p>
            <p className="text-slate-700 text-sm">{day.challenge}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
