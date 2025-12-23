'use client';

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Home() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendLink = async () => {
    setError(null);

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: 'https://www.beyondresourcing.com',
      },
    });

    if (error) {
      setError(error.message);
    } else {
      setSent(true);
    }
  };

  return (
    <main style={{ padding: 40, fontFamily: 'system-ui' }}>
      <h1>Beyond Resourcing</h1>

      {sent ? (
        <p>Check your email for the login link.</p>
      ) : (
        <>
          <input
            type="email"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: 10, width: 300 }}
          />
          <br /><br />
          <button onClick={sendLink} style={{ padding: 10 }}>
            Send magic link
          </button>
        </>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </main>
  );
}
