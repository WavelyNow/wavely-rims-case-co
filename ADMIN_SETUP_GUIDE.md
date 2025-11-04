# 🔐 Admin Dashboard Setup Guide

## ✅ Ce Am Implementat

### 1. Sistema de Autorizare Sigură
- ✅ Tabela `user_roles` cu enum pentru roluri (admin, moderator, user)
- ✅ Security definer function `has_role()` pentru verificare securizată
- ✅ RLS policies pe toate tabelele marketing pentru admin access
- ✅ **CRITICAL**: Nu folosim localStorage pentru admin checks (security best practice)
- ✅ Server-side validation prin Supabase

### 2. Admin Dashboard Complet
**URL:** `/admin/discount-codes`

**Features:**
- 📊 **Statistics Dashboard** - Total codes, active codes, usage, discounts given
- ➕ **Create Codes** - Generator automat cu validare
- 📋 **View All Codes** - Tabel complet cu toate detaliile
- ✏️ **Edit/Toggle Status** - Activare/Dezactivare inline
- 🗑️ **Delete Codes** - Ștergere cu confirmare
- 🔄 **Deactivate Expired** - Buton pentru deactivare automată coduri expirate
- 📥 **Export Report** - Export CSV pentru analiză
- 🔄 **Real-time Refresh** - Date actualizate la cerere

### 3. Login Page
**URL:** `/admin/login`

Pagină dedicată de autentificare pentru admini cu:
- Email + password authentication
- Loading states
- Error handling
- Redirect automat la dashboard după login

---

## 🚀 SETUP INIȚIAL - PRIMUL ADMIN

### Step 1: Activează Auto-Confirm Email în Supabase

**IMPORTANT:** Pentru testare rapidă, activează auto-confirm email:

1. Go to Lovable Cloud → Tables
2. Click pe "Settings" sau go to Supabase direct
3. **Authentication** → **Providers** → **Email**
4. Toggle ON: **Enable email confirmations**
5. Save changes

SAU în Supabase Dashboard:
```
Settings → Authentication → Email Auth → 
☑️ Enable email confirmations (AUTO CONFIRM)
```

### Step 2: Creează Primul User Admin

**Metoda 1: Prin Supabase UI (Recomandat)**

1. Go to **Lovable Cloud** → Click "View Backend"
2. Navighează la **Authentication** → **Users**
3. Click **"Add user"** (sau "Invite user")
4. Fill in details:
   ```
   Email: admin@wavely.ro (sau email-ul tău)
   Password: [choose secure password]
   Auto confirm user: ✓ YES
   ```
5. Click **"Create user"**
6. **IMPORTANT:** Copiază `User UID` din tabel (ex: `123e4567-e89b-12d3-a456-426614174000`)

**Metoda 2: Prin SQL (Avansați)**

În Lovable Cloud → Tables → Run SQL:
```sql
-- This creates a user via SQL (advanced method)
-- Better to use UI method above
```

### Step 3: Adaugă Rol Admin Pentru User

**În Lovable Cloud → Tables → `user_roles` → Add Row:**

```
user_id: [paste User UID from Step 2]
role: admin
```

**SAU prin SQL:**

```sql
INSERT INTO public.user_roles (user_id, role)
VALUES ('your-user-id-from-step-2', 'admin');
```

**Verifică:**
```sql
SELECT * FROM user_roles;
```

Ar trebui să vezi:
```
| id | user_id | role | created_at |
|----|---------|------|------------|
| uuid | your-uuid | admin | timestamp |
```

---

## 📱 UTILIZARE ADMIN DASHBOARD

### Login

1. Navigate to: `https://wavely.lovable.app/admin/login`
2. Enter credentials:
   ```
   Email: admin@wavely.ro
   Password: [your password]
   ```
3. Click **"Sign In"**
4. Vei fi redirectat automat la `/admin/discount-codes`

### Dashboard Features

#### 1. **Create New Code**

Click **"Create New Code"** → Dialog se deschide:

```
Code: WAVELYABC123 [Generate button pentru automat]
Type: Percentage / Fixed Amount
Value: 10 (pentru 10% sau 10 RON)
Description: Campaign description
Max Uses: [blank = unlimited]
Min Purchase: 0 (minimum order amount)
Valid for: 30 days
```

Click **"Create Code"** → Codul e activ instant!

#### 2. **View Stats**

Dashboard top arată:
- **Total Codes**: Număr total coduri create
- **Active Codes**: Coduri active momentan
- **Total Usage**: De câte ori au fost folosite
- **Total Discount**: Suma totală discount-uri acordate

#### 3. **Manage Codes**

În tabel, pentru fiecare cod:
- **Activate/Deactivate**: Toggle status
- **Delete**: Șterge permanent (cu confirmare)

#### 4. **Bulk Actions**

**Deactivate Expired:**
- Click butonul → Toate codurile expirate devin inactive automat
- Query: `UPDATE discount_codes SET is_active = false WHERE valid_until < NOW()`

**Export Report:**
- Click butonul → Download CSV cu toate datele
- Format: `discount-codes-YYYY-MM-DD.csv`
- Columns: Code, Type, Value, Uses, Max Uses, Status, Created, Expires

**Refresh:**
- Reîncarcă datele din database
- Folosește când ai modificat manual în Cloud UI

---

## 🔐 SECURITATE

### Ce Am Implementat

1. **Row Level Security (RLS) activat pe toate tabelele**
   - Doar admin-ii pot vedea/modifica discount codes
   - Public poate doar folosi codurile active în cart

2. **Security Definer Function**
   ```sql
   CREATE FUNCTION public.has_role(_user_id UUID, _role app_role)
   RETURNS BOOLEAN
   ```
   - Previne recursive RLS issues
   - Verifică roluri securizat

3. **No Client-Side Auth Checks**
   - **NEVER** folosim `localStorage` pentru admin checks
   - Toate verificările sunt server-side
   - Hook `useAdmin()` face query la `user_roles` table

4. **Protected Routes**
   - `/admin/*` routes redirect la login dacă nu ești admin
   - Session management prin Supabase Auth

### Policies Create

```sql
-- Admins pot face orice cu discount codes
"Admins can view all discount codes"
"Admins can insert discount codes"
"Admins can update discount codes"
"Admins can delete discount codes"

-- Admins pot vedea toate usage-urile
"Admins can view all discount usage"

-- Similar pentru giveaways, referral codes, etc.
```

---

## 👥 ADAUGĂ MAI MULȚI ADMINI

### Metoda 1: Prin Admin UI (Când va fi creat)

Coming soon: Admin user management panel

### Metoda 2: Manual în Cloud

1. User-ul se creează cont normal pe site (dacă va fi signup page)
2. SAU îl creezi tu în **Authentication → Users**
3. Adaugi rol în `user_roles` table:
   ```sql
   INSERT INTO user_roles (user_id, role)
   VALUES ('new-admin-user-id', 'admin');
   ```

### Metoda 3: SQL Bulk

```sql
-- Adaugă multiple admins
INSERT INTO user_roles (user_id, role)
VALUES 
  ('user-id-1', 'admin'),
  ('user-id-2', 'admin'),
  ('user-id-3', 'moderator');
```

---

## 📊 ANALYTICS & REPORTING

### Query-uri Utile

**Top 10 Coduri După Usage:**
```sql
SELECT 
  code,
  current_uses,
  type,
  value,
  description
FROM discount_codes
ORDER BY current_uses DESC
LIMIT 10;
```

**Revenue Impact (Total Discount Given):**
```sql
SELECT 
  dc.code,
  COUNT(dcu.id) as times_used,
  SUM(dcu.discount_amount) as total_discount,
  AVG(dcu.discount_amount) as avg_discount
FROM discount_codes dc
LEFT JOIN discount_code_usage dcu ON dc.id = dcu.discount_code_id
GROUP BY dc.id, dc.code
ORDER BY total_discount DESC;
```

**Codes Performance This Month:**
```sql
SELECT 
  dc.code,
  COUNT(dcu.id) as uses_this_month,
  SUM(dcu.discount_amount) as discount_this_month
FROM discount_codes dc
LEFT JOIN discount_code_usage dcu ON dc.id = dcu.discount_code_id
WHERE dcu.used_at >= date_trunc('month', CURRENT_DATE)
GROUP BY dc.id, dc.code;
```

**Expired But Still Active (Needs Cleanup):**
```sql
SELECT code, valid_until, current_uses
FROM discount_codes
WHERE valid_until < NOW() AND is_active = true;
```

---

## 🔧 TROUBLESHOOTING

### "I can't login as admin"

**Check 1:** Există user-ul în Authentication?
```sql
-- Run în Lovable Cloud → Tables
SELECT email FROM auth.users WHERE email = 'your@email.com';
```

**Check 2:** User-ul are rol de admin?
```sql
SELECT * FROM user_roles WHERE user_id = 'your-user-id';
```

**Check 3:** Auto-confirm email e activ?
- Go to Auth settings
- Make sure "Enable email confirmations" is ON pentru testing

**Fix:**
```sql
-- Adaugă rol admin dacă lipsește
INSERT INTO user_roles (user_id, role)
VALUES ('your-user-id', 'admin');
```

### "I get 'No admin access' error"

**Cauze posibile:**
1. User ID greșit în `user_roles`
2. RLS policies nu funcționează
3. Session expired

**Fix:**
1. Logout complet
2. Verifică `user_roles` table
3. Login din nou
4. Check browser console pentru errors

### "Can't see any discount codes in dashboard"

**Check RLS:**
```sql
-- Verifică dacă policy exists
SELECT * FROM pg_policies 
WHERE tablename = 'discount_codes';
```

**Check role:**
```sql
-- Verifică rol current user
SELECT role FROM user_roles 
WHERE user_id = auth.uid();
```

### "Export doesn't work"

Browser block-uie downloads? 
- Check browser permissions
- Allow downloads din site-ul Wavely
- Try different browser

---

## 🎯 BEST PRACTICES

### Când creezi coduri:

1. **Nume clare și descriptive:**
   ```
   ✓ WELCOME10 - clar ce face
   ✓ BLACKFRIDAY25 - știi când expiră
   ✗ ABC123 - confuz
   ```

2. **Set expiry dates:**
   - Campaign codes: 7-30 days
   - Welcome codes: 90 days
   - Flash sales: 24-48 hours

3. **Use max_uses pentru protecție:**
   - Influencer codes: 50-100 uses
   - Flash sales: 200-500 uses
   - Welcome codes: unlimited OK

4. **Track în description:**
   ```
   "Instagram Campaign - @influencer - Jan 2025"
   "Email Newsletter - Week 1 - Jan 2025"
   "TikTok Ad - Campaign ID: 12345"
   ```

### Monitoring:

1. **Check expired weekly:**
   - Click "Deactivate Expired" în admin
   - SAU run manual cleanup

2. **Export monthly reports:**
   - Track performance trends
   - Calculate ROI
   - Plan next campaigns

3. **Review high-usage codes:**
   - Identify what works
   - Replicate successful patterns
   - Pause underperforming codes

---

## 🚀 NEXT FEATURES (Future)

- [ ] Grafice și charts pentru usage trends
- [ ] A/B testing între coduri
- [ ] Automatic email când cod e aproape full (max_uses)
- [ ] Customer segmentation pentru targeted codes
- [ ] Integration cu Google Analytics
- [ ] Bulk edit multiple codes
- [ ] Code templates pentru quick creation
- [ ] API endpoint pentru external tools

---

## 📞 SUPPORT

**Issues:**
- Check Lovable Cloud logs
- Verify RLS policies
- Test cu query-uri SQL direct

**Quick Fixes:**
```sql
-- Reset toate codurile expirate
UPDATE discount_codes SET is_active = false 
WHERE valid_until < NOW();

-- Șterge test codes
DELETE FROM discount_codes 
WHERE description LIKE '%test%';

-- View admin users
SELECT u.email, ur.role 
FROM auth.users u
JOIN user_roles ur ON u.id = ur.user_id;
```

---

*Ultima actualizare: 2025-01-04*
*Versiune: Admin Dashboard v1.0*
