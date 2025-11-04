# 🎯 Wavely Marketing Tools - Complete Guide

## ✅ FAZA 3 - IMPLEMENTARE COMPLETĂ

### 🎉 Ce am implementat:

1. **✅ Discount Code System** - Coduri de reducere personalizate cu validare
2. **✅ Cart Integration** - Input pentru coduri în shopping cart
3. **✅ Giveaway System** - Concursuri și giveaway-uri cu tracking
4. **✅ Referral Program** - Sistem de recomandări cu recompense

---

## 📊 BAZA DE DATE

### Tabele Create:

#### 1. `discount_codes` - Coduri de Reducere
```sql
Columns:
- id: UUID (primary key)
- code: TEXT (unique) - Codul de reducere (ex: WELCOME10)
- type: 'percentage' | 'fixed_amount' - Tip reducere
- value: DECIMAL - Valoarea reducerii
- description: TEXT - Descriere
- max_uses: INTEGER - Număr maxim folosiri (null = unlimited)
- current_uses: INTEGER - Folosiri actuale
- min_purchase_amount: DECIMAL - Sumă minimă pentru activare
- valid_from: TIMESTAMP - Data start validitate
- valid_until: TIMESTAMP - Data expirare (null = no expiry)
- is_active: BOOLEAN - Status activ/inactiv
- created_by: TEXT - Cine l-a creat (pentru tracking)
```

**Sample Codes Created:**
- `WELCOME10` - 10% off first order (unlimited uses, no minimum)
- `SUMMER20` - 20% off (100 uses max, 100 RON minimum)
- `FREESHIP` - 15 RON off shipping (unlimited, 50 RON minimum)

#### 2. `discount_code_usage` - Tracking Folosire Coduri
```sql
Columns:
- id: UUID
- discount_code_id: UUID (foreign key)
- customer_email: TEXT
- order_id: TEXT
- discount_amount: DECIMAL
- used_at: TIMESTAMP
```

#### 3. `giveaways` - Concursuri
```sql
Columns:
- id: UUID
- title: TEXT - Titlu giveaway
- description: TEXT - Descriere
- prize_description: TEXT - Descriere premiu
- entry_requirement: 'email' | 'referral' | 'social_follow' | 'purchase'
- max_entries: INTEGER - Număr maxim participanți (null = unlimited)
- current_entries: INTEGER - Participanți actuali
- start_date: TIMESTAMP
- end_date: TIMESTAMP
- winner_selected: BOOLEAN
- winner_email: TEXT
- is_active: BOOLEAN
```

**Sample Giveaways:**
1. Launch Giveaway - 3x Custom Cases (30 days)
2. Car Lover Special - Luxury Gold Case (15 days)

#### 4. `giveaway_entries` - Înscrieri Giveaway
```sql
Columns:
- id: UUID
- giveaway_id: UUID (foreign key)
- email: TEXT
- full_name: TEXT
- referral_code: TEXT (optional)
- social_proof: TEXT (optional)
- entry_count: INTEGER
- created_at: TIMESTAMP
- UNIQUE constraint pe (giveaway_id, email) - 1 entry per email
```

#### 5. `referral_codes` - Coduri Referral
```sql
Columns:
- id: UUID
- code: TEXT (unique) - Codul de referral (ex: WAVELYABC123)
- referrer_email: TEXT - Email-ul celui care recomandă
- referrer_name: TEXT
- reward_type: 'discount' | 'free_product' | 'points'
- reward_value: DECIMAL - Recompensa pentru prieten
- referrer_reward_type: 'discount' | 'free_product' | 'points'
- referrer_reward_value: DECIMAL - Recompensa pentru referrer
- max_uses: INTEGER - Câte persoane pot folosi codul
- current_uses: INTEGER
- is_active: BOOLEAN
- expires_at: TIMESTAMP (optional)
```

**Default Rewards:**
- Friend gets: 10% discount
- Referrer gets: 15% discount (per successful referral)

#### 6. `referral_usage` - Tracking Referrals
```sql
Columns:
- id: UUID
- referral_code_id: UUID (foreign key)
- referee_email: TEXT - Email-ul prietenului
- referee_name: TEXT
- order_id: TEXT
- reward_claimed: BOOLEAN
- referrer_reward_claimed: BOOLEAN
- used_at: TIMESTAMP
```

---

## 🛒 DISCOUNT CODES - Cum Funcționează

### 1. Pentru Clienți (Cart Integration)

**Locație:** Shopping Cart Drawer (click pe cart icon)

**Flow:**
1. Clientul adaugă produse în cart
2. Deschide cart drawer
3. Vede secțiunea "Discount Code" 
4. Introduce codul (ex: WELCOME10)
5. Click "Apply"

**Validare Automată:**
- ✅ Verifică dacă codul există și e activ
- ✅ Verifică dacă nu a expirat
- ✅ Verifică suma minimă de cumpărare
- ✅ Verifică numărul maxim de folosiri
- ✅ Calculează reducerea automat
- ✅ Afișează subtotal, discount, și total

**Exemplu Visual în Cart:**
```
Subtotal:        $100.00
Discount (WELCOME10):  -$10.00
────────────────────────
Total:           $90.00

[Checkout with Shopify] →
```

### 2. Creare Coduri Noi

**Metoda 1: Direct în Database**
```sql
INSERT INTO discount_codes (
  code, 
  type, 
  value, 
  description, 
  max_uses, 
  min_purchase_amount, 
  valid_until
) VALUES (
  'NEWYEAR25',           -- Cod (UPPERCASE automat)
  'percentage',          -- sau 'fixed_amount'
  25,                    -- 25% sau 25 RON
  'New Year Sale',       -- Descriere
  100,                   -- Max 100 folosiri (NULL = unlimited)
  50,                    -- Minim 50 RON comandă
  '2025-01-31'::timestamp -- Data expirare
);
```

**Metoda 2: Lovable Cloud UI**
1. Go to Cloud → Tables → `discount_codes`
2. Click "Add Row"
3. Fill in details
4. Save

### 3. Tipuri de Reduceri

**Percentage Discount:**
```sql
code: 'SAVE20'
type: 'percentage'
value: 20  -- 20% off
```

**Fixed Amount:**
```sql
code: 'GET50OFF'
type: 'fixed_amount'
value: 50  -- 50 RON off
```

### 4. Strategii de Discount

**Welcome Discount:**
```sql
-- Pentru clienți noi
code: 'WELCOME10'
type: 'percentage'
value: 10
min_purchase_amount: 0
max_uses: NULL  -- Unlimited
```

**Flash Sales:**
```sql
-- Vânzări scurte, limited time
code: 'FLASH48H'
type: 'percentage'
value: 30
max_uses: 50
valid_until: now() + interval '48 hours'
```

**Free Shipping:**
```sql
-- Livrare gratuită
code: 'FREESHIP'
type: 'fixed_amount'
value: 15  -- Cost-ul shipping-ului
min_purchase_amount: 50
```

**Bulk Orders:**
```sql
-- Pentru comenzi mari
code: 'BULK100'
type: 'percentage'
value: 15
min_purchase_amount: 500
```

---

## 🎁 GIVEAWAYS - Cum Funcționează

### 1. Pagina Giveaway

**URL:** `https://wavely.lovable.app/giveaway`

**Features:**
- ✅ Afișează toate giveaway-urile active
- ✅ Countdown timer (zile rămase)
- ✅ Număr participanți
- ✅ Descriere premiu
- ✅ Entry form (email + nume)
- ✅ Prevenție duplicate entries (1 entry per email)

### 2. Creare Giveaway Nou

```sql
INSERT INTO giveaways (
  title,
  description,
  prize_description,
  entry_requirement,
  max_entries,
  end_date
) VALUES (
  '🎉 Valentine''s Day Special',
  'Win a romantic custom case set for you and your loved one!',
  '2x Custom Cases with matching designs - Value 200 RON',
  'email',  -- sau 'social_follow', 'referral', 'purchase'
  300,      -- Max 300 participants
  now() + interval '14 days'
);
```

### 3. Entry Requirements

**Email Only (Simplest):**
```sql
entry_requirement: 'email'
-- Doar email + nume
```

**Social Follow:**
```sql
entry_requirement: 'social_follow'
-- Request: Instagram/TikTok username
-- Field: social_proof
```

**Referral Code:**
```sql
entry_requirement: 'referral'
-- Must use a referral code to enter
-- Field: referral_code
```

**Purchase Required:**
```sql
entry_requirement: 'purchase'
-- Must have placed an order
-- Field: order_id
```

### 4. Selectare Câștigător

**Manual Selection:**
```sql
-- View all entries for a giveaway
SELECT * FROM giveaway_entries 
WHERE giveaway_id = 'giveaway-uuid-here'
ORDER BY created_at;

-- Select winner
UPDATE giveaways 
SET 
  winner_selected = true,
  winner_email = 'winner@email.com'
WHERE id = 'giveaway-uuid-here';
```

**Random Selection (SQL):**
```sql
-- Random winner
WITH random_winner AS (
  SELECT email 
  FROM giveaway_entries 
  WHERE giveaway_id = 'giveaway-uuid-here'
  ORDER BY RANDOM() 
  LIMIT 1
)
UPDATE giveaways 
SET 
  winner_selected = true,
  winner_email = (SELECT email FROM random_winner)
WHERE id = 'giveaway-uuid-here'
RETURNING winner_email;
```

### 5. Post-Giveaway Actions

1. **Notify Winner** - Send email cu Resend edge function
2. **Update Status** - Mark giveaway as completed
3. **Social Proof** - Post winner announcement pe social media
4. **Generate Discount Code** - Pentru winner să claim prize-ul

---

## 🔗 REFERRAL SYSTEM - Cum Funcționează

### 1. Pagina Referral

**URL:** `https://wavely.lovable.app/referral`

**Flow pentru Referrer:**
1. Enter email + name
2. Generate unique code (ex: WAVELYABC123)
3. Copy referral link
4. Share via WhatsApp, Facebook, Email

**Referral Link Format:**
```
https://wavely.lovable.app?ref=WAVELYABC123
```

### 2. Rewards System

**Default Setup:**
```
Friend (Referee) gets: 10% discount on first order
Referrer gets: 15% discount per successful referral
Max uses per code: 50 referrals
```

**Cum se aplică:**
1. Friend click pe referral link → `?ref=CODE` în URL
2. Code se salvează în localStorage/session
3. La checkout, codul se aplică automat
4. După purchase, tracking se face în `referral_usage`

### 3. Tracking Referrals

**View Referral Stats:**
```sql
-- Referrer performance
SELECT 
  rc.code,
  rc.referrer_email,
  rc.current_uses,
  COUNT(ru.id) as successful_referrals
FROM referral_codes rc
LEFT JOIN referral_usage ru ON rc.id = ru.referral_code_id
WHERE rc.referrer_email = 'referrer@email.com'
GROUP BY rc.id;
```

**Top Referrers:**
```sql
SELECT 
  referrer_email,
  referrer_name,
  current_uses,
  code
FROM referral_codes
WHERE is_active = true
ORDER BY current_uses DESC
LIMIT 10;
```

### 4. Customize Rewards

**Increase Rewards pentru Campaign:**
```sql
-- Special campaign: 20% pentru ambii
INSERT INTO referral_codes (
  code,
  referrer_email,
  referrer_name,
  reward_type,
  reward_value,
  referrer_reward_type,
  referrer_reward_value,
  max_uses
) VALUES (
  'WAVELYSPECIAL',
  'influencer@email.com',
  'Top Influencer',
  'discount',
  20,  -- Friend gets 20%
  'discount',
  20,  -- Referrer gets 20%
  100
);
```

### 5. Social Sharing

**Pre-built Share Options:**
- 📱 WhatsApp - Direct message
- 👥 Facebook - Share link
- ✉️ Email - Template email

**Custom Social Text:**
```
Check out Wavely custom car rim phone cases! 
Use my code {CODE} for 10% off: 
{LINK}
```

---

## 🎯 MARKETING CAMPAIGNS - Strategii

### Campaign 1: Launch Campaign
```sql
-- Discount code pentru early adopters
INSERT INTO discount_codes (code, type, value, description, max_uses, valid_until)
VALUES ('LAUNCH50', 'percentage', 50, 'Launch Special - 50% OFF', 100, now() + interval '7 days');

-- Giveaway pentru buzz
INSERT INTO giveaways (title, prize_description, entry_requirement, max_entries, end_date)
VALUES ('🚀 Launch Giveaway - 5 Winners!', '5x Custom Cases', 'social_follow', 500, now() + interval '14 days');
```

### Campaign 2: Referral Boost
```sql
-- Increased referral rewards pentru 30 zile
UPDATE referral_codes 
SET 
  reward_value = 15,           -- Friend: 15% (was 10%)
  referrer_reward_value = 20   -- Referrer: 20% (was 15%)
WHERE is_active = true;
```

### Campaign 3: Flash Sale
```sql
-- 24h flash sale
INSERT INTO discount_codes (code, type, value, max_uses, valid_until)
VALUES ('FLASH24', 'percentage', 40, 200, now() + interval '24 hours');
```

### Campaign 4: Seasonal
```sql
-- Black Friday
INSERT INTO discount_codes (code, type, value, valid_from, valid_until)
VALUES (
  'BLACKFRIDAY',
  'percentage',
  35,
  '2025-11-29 00:00:00',
  '2025-11-29 23:59:59'
);
```

---

## 📧 EMAIL MARKETING INTEGRATION

### Scenario: Send Code to New Subscribers

**Step 1:** Create unique discount for email campaign
```sql
INSERT INTO discount_codes (code, type, value, description, created_by)
VALUES ('EMAIL2025', 'percentage', 15, 'Email Subscriber Welcome', 'email_campaign');
```

**Step 2:** Send via Resend (Edge Function needed)
```typescript
// supabase/functions/send-welcome-email/index.ts
import { Resend } from 'npm:resend@2.0.0';

const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

await resend.emails.send({
  from: 'Wavely <hello@wavely.ro>',
  to: subscriberEmail,
  subject: 'Welcome to Wavely - 15% OFF Inside! 🎁',
  html: `
    <h1>Welcome ${name}!</h1>
    <p>Use code <strong>EMAIL2025</strong> for 15% off your first order!</p>
    <a href="https://wavely.lovable.app?discount=EMAIL2025">Shop Now</a>
  `
});
```

---

## 📊 ANALYTICS & REPORTING

### Discount Code Performance
```sql
SELECT 
  dc.code,
  dc.type,
  dc.value,
  dc.current_uses,
  COUNT(dcu.id) as total_redemptions,
  SUM(dcu.discount_amount) as total_discount_given,
  AVG(dcu.discount_amount) as avg_discount
FROM discount_codes dc
LEFT JOIN discount_code_usage dcu ON dc.id = dcu.discount_code_id
GROUP BY dc.id
ORDER BY total_redemptions DESC;
```

### Giveaway Performance
```sql
SELECT 
  g.title,
  g.current_entries,
  g.max_entries,
  ROUND((g.current_entries::numeric / NULLIF(g.max_entries, 0)) * 100, 2) as fill_rate_percent,
  DATE_PART('day', g.end_date - now()) as days_remaining
FROM giveaways g
WHERE g.is_active = true;
```

### Referral Leaderboard
```sql
SELECT 
  referrer_name,
  referrer_email,
  current_uses as successful_referrals,
  current_uses * referrer_reward_value as total_rewards_earned
FROM referral_codes
WHERE is_active = true
ORDER BY current_uses DESC
LIMIT 20;
```

---

## 🔧 ADMIN ACTIONS

### Deactivate Expired Codes
```sql
UPDATE discount_codes 
SET is_active = false 
WHERE valid_until < now() AND is_active = true;
```

### Archive Completed Giveaways
```sql
UPDATE giveaways 
SET is_active = false 
WHERE end_date < now() AND winner_selected = true;
```

### Find Unused Codes
```sql
SELECT code, description, created_at 
FROM discount_codes 
WHERE current_uses = 0 
AND created_at < now() - interval '30 days';
```

---

## 🚀 NEXT STEPS (Post-FAZA 3)

### Immediate:
- [ ] Setup Resend pentru email notifications
- [ ] Create email templates pentru winners
- [ ] Add UTM tracking pentru referral links
- [ ] Setup automated winner selection (cron job)

### Future Enhancements:
- [ ] Admin dashboard pentru code management
- [ ] Automatic code generation API
- [ ] A/B testing pentru different reward levels
- [ ] Integration cu Meta Ads pentru retargeting
- [ ] Loyalty points system
- [ ] Tiered referral rewards (Bronze/Silver/Gold)

---

## 📞 SUPPORT

**Technical Issues:**
- Database: Lovable Cloud → Tables view
- Code validation: Check browser console
- Referral tracking: Verify `referral_usage` table

**Campaign Management:**
- Create codes: Cloud → `discount_codes` table
- Monitor usage: Analytics queries above
- Winner selection: SQL queries provided

---

*Ultima actualizare: 2025-01-04*
*Versiune: FAZA 3 - Marketing Tools Complete*
