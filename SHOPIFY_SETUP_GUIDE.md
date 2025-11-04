# 🛍️ Ghid Complet Setup Shopify - FAZA 2

## ✅ Checkpoint Tehnic - Implementare Completă

### Cart & Checkout Implementation - ✓ FUNCȚIONAL
- ✅ Storefront API 2025-07 integrat corect
- ✅ Cart state management cu Zustand + localStorage persistence
- ✅ Checkout creation cu `cartCreate` mutation
- ✅ Checkout URL cu `channel=online_store` parameter
- ✅ Window.open cu `_blank` target pentru checkout extern
- ✅ Loading states și error handling
- ✅ Cart drawer cu scroll optimization

**Status:** Checkout flow-ul funcționează corect din punct de vedere tehnic! 🎉

---

## 📋 Configurări Necesare în Shopify Admin Dashboard

Pentru ca store-ul să fie complet funcțional și să poți procesa plăți reale, trebuie să configurezi următoarele setări în **Shopify Admin Dashboard**:

### 🔗 Access Shopify Admin
**URL:** `https://admin.shopify.com/store/wavely-rims-case-co-qaqwp`

---

## 1️⃣ PAYMENT METHODS (Metode de Plată)

### Cum să configurezi:
1. Du-te la **Settings** → **Payments**
2. Activează metodele de plată dorite:

#### ⭐ Recomandate pentru România:

**Shopify Payments** (Dacă este disponibil în România)
- Acceptă Visa, Mastercard direct
- Comision: ~2.9% + $0.30 per tranzacție
- **Setup:** Click "Activate Shopify Payments" și completează informațiile firmei

**Alternative Payment Providers:**

**1. Stripe** (Recomandat #1)
- Comision: 2.9% + RON 1.45 per tranzacție
- Acceptă: Visa, Mastercard, Google Pay, Apple Pay
- **Setup:** 
  - Click "Add payment method" → Select "Stripe"
  - Conectează contul Stripe sau creează unul nou
  - Completează KYC (verificare identitate)

**2. PayPal** (Recomandat #2)
- Comision: ~3.4% + comision fix
- Acceptă: PayPal accounts, carduri
- **Setup:**
  - Click "Add payment method" → Select "PayPal"
  - Conectează contul PayPal Business

**3. 2Checkout / Verifone** (Pentru piața europeană)
- Acceptă plăți locale din România și UE
- **Setup:** Click "Add payment method" → Search "2Checkout"

### Manual Payment Methods (Opțional pentru început):
- ✅ **Bank Deposit** - Transfer bancar
- ✅ **Cash on Delivery (COD)** - Ramburs (cu comision curier)

**⚠️ IMPORTANT:** Fără payment provider activ, clienții NU vor putea finaliza comenzi!

---

## 2️⃣ SHIPPING ZONES & RATES (Zone Livrare)

### Cum să configurezi:
1. Du-te la **Settings** → **Shipping and delivery**
2. Click **Manage** la "Shipping"

### Configurare Recomandată:

#### 📍 **ZONA 1: România**
```
Zone name: România
Countries: Romania
```

**Shipping Rates pentru România:**

| Metodă | Preț | Timp Livrare | Curier |
|--------|------|--------------|--------|
| Standard Shipping | RON 15 (€3) | 2-3 zile | FanCourier/Cargus |
| Express Shipping | RON 25 (€5) | 1-2 zile | FanCourier Express |
| Free Shipping | GRATIS | 3-4 zile | Peste 200 RON (€40) |

**Setup în Shopify:**
```
1. Click "Add rate" în zona România
2. Rate name: "Livrare Standard"
3. Price: 15 RON
4. Condition: Order weight < 2kg

Repeat pentru Express și Free Shipping
```

#### 🇪🇺 **ZONA 2: Uniunea Europeană**
```
Zone name: UE - Europa
Countries: Select all EU countries (exclude România)
```

**Shipping Rates pentru UE:**

| Metodă | Preț | Timp Livrare |
|--------|------|--------------|
| EU Standard | €8 | 5-7 zile |
| EU Express | €15 | 3-5 zile |
| Free Shipping EU | GRATIS | 7-10 zile (peste €80) |

#### 🌍 **ZONA 3: Rest of World (Opțional)**
```
Zone name: Internațional
Countries: Rest of world
```

| Metodă | Preț | Timp Livrare |
|--------|------|--------------|
| International Standard | €20 | 10-15 zile |

### 🎁 Free Shipping Threshold
**Recommended:** Activează gratuit livrare peste un prag minim
```
Condition: Order total > 200 RON (€40) pentru România
Condition: Order total > 400 RON (€80) pentru UE
```

**Setup:**
1. În shipping rate, bifează "Based on order price"
2. Setează minimum amount
3. Set shipping rate la 0

---

## 3️⃣ TAX SETTINGS (Setări TVA - CRITIC!)

### ⚠️ OBLIGATORIU pentru România - TVA 19%

### Cum să configurezi:
1. Du-te la **Settings** → **Taxes and duties**
2. Click **Romania** din lista de țări

### Configurare TVA România:

```
✅ Collect sales tax: ON
Tax rate: 19%
Tax name: "TVA" (sau "IVA" - automat în Shopify)

✅ Include tax in prices: ON (recomandat pentru B2C)
   - Prețurile afișate deja includ TVA
   - Clientul vede prețul final
   
IMPORTANT: Bifează "All products are taxable" dacă toate produsele au TVA
```

### Configurare UE (MOSS/OSS pentru cross-border):

Dacă vinzi în UE peste €10,000/an:
```
1. Înregistrează-te la OSS (One Stop Shop) în România
2. În Shopify: Settings → Markets → European Union
3. Activează "Collect VAT for EU countries"
4. Setează rate-urile automate (Shopify le calculează automat)
```

### Tax Exemptions:
- Pentru clienți B2B cu cod TVA valid UE: pot fi exceptați
- Setup: Settings → Taxes → "Manage tax exemptions"

**🔴 CRITIC:** Fără TVA configurat corect = probleme legale cu ANPC și Finanțe!

---

## 4️⃣ CHECKOUT SETTINGS (Setări Finalizare Comandă)

### Cum să configurezi:
1. Du-te la **Settings** → **Checkout**

### Setări Recomandate:

#### Customer Accounts:
```
☑️ Accounts are optional
   - Permite guest checkout (cumpărare fără cont)
   - Clientul poate crea cont după comandă
```

#### Customer Contact:
```
☑️ Customers can only check out using email
```

#### Form Options:
```
☑️ Require first and last name
☑️ Require company name: OPTIONAL (doar pentru B2B)
☑️ Shipping address phone number: REQUIRED
```

#### Order Processing:
```
☑️ Automatically fulfill orders
☑️ Automatically archive the order (după 60 zile)
```

#### Marketing:
```
☑️ Show option to sign up for marketing at checkout
```

#### Abandoned Cart Recovery:
```
☑️ Automatically send abandoned checkout emails
   - După 1 oră: reminder email
   - După 24 ore: al doilea reminder cu discount 5-10%
```

---

## 5️⃣ EMAIL NOTIFICATIONS (Notificări Automate)

### Cum să configurezi:
1. Du-te la **Settings** → **Notifications**

### Template-uri de personalizat:

#### 📧 **Customer Notifications:**
- ✅ Order confirmation (Confirmare comandă)
- ✅ Order invoice (Factură - important pentru România!)
- ✅ Shipping confirmation (Confirmare expediere cu AWB)
- ✅ Out for delivery (În livrare)
- ✅ Delivered (Livrată)

#### Personalizări recomandate:
```
Subject line: "[Wavely] Comanda ta #{{ order_number }} a fost confirmată! 🎉"

Body: Include:
- Detalii comandă
- Tracking number (când e expediat)
- Link catre politica de retur
- Contact support: contact@wavely.ro
```

**🎨 Brand Customization:**
- Logo: Adaugă logo Wavely în header email
- Colors: Match cu branding-ul site-ului
- Footer: Include CUI, adresă firmă (obligatoriu!)

---

## 6️⃣ STORE DETAILS (Detalii Magazine)

### Cum să configurezi:
1. Du-te la **Settings** → **Store details**

### Informații de completat:

```
Store name: Wavely
Store industry: Apparel & Accessories > Phone cases

Contact email: contact@wavely.ro
Customer service email: support@wavely.ro

Business address: (OBLIGATORIU pentru facturi)
SC WAVELY SRL
Băiculești, Argeș, România
CUI: RO[completează]
Reg. Com: J[XX]/[NNN]/[AAAA]

Store currency: RON (Lei românești)
IBAN pentru rambursări: RO[...] (pentru refund-uri)

Timezone: (GMT+02:00) Bucharest
Weight units: Kilograms
```

---

## 7️⃣ LEGAL PAGES (Pagini Legale - ✅ ALREADY DONE!)

Deja create în Lovable:
- ✅ Privacy Policy (`/privacy-policy`)
- ✅ Terms & Conditions (`/terms`)
- ✅ Return Policy (`/return-policy`)
- ✅ Cookie Policy (`/cookie-policy`)

### Link în Shopify Checkout:
1. Du-te la **Settings** → **Legal**
2. Pentru fiecare politică:
   - Click "Create from template" SAU
   - Link catre pagina ta: `https://wavely.lovable.app/privacy-policy`

---

## 8️⃣ DOMAIN & SSL (Domeniu Custom)

### Cum să configurezi:
1. Du-te la **Settings** → **Domains**

### Opțiuni:

#### A. Cumpără domeniu prin Shopify:
```
Cost: ~$11-14/an pentru .com
SSL: Inclus automat (HTTPS)
Setup: Automat
```

#### B. Conectează domeniu existent:
```
1. Ai deja wavely.com? (sau .ro)
2. În Shopify: Click "Connect existing domain"
3. Adaugă DNS records la provider-ul tău:
   - A Record: @ → IP Shopify
   - CNAME: www → shops.myshopify.com
4. Wait 24-48h pentru propagare DNS
```

**⚠️ IMPORTANT:** SSL (HTTPS) este obligatoriu pentru plăți online!

---

## 9️⃣ ANALYTICS & TRACKING

### Google Analytics 4:
1. Du-te la **Settings** → **Customer events** (Shopify Plus)
   SAU use Custom Pixels
2. Add Google Analytics 4 tracking code
3. Enable Enhanced Ecommerce tracking

### Facebook Pixel:
1. Du-te la **Settings** → **Customer events**
2. Click "Add custom pixel"
3. Paste Facebook Pixel ID
4. Enable pentru:
   - Page views
   - Add to Cart
   - Purchase

---

## 🧪 10. TESTING CHECKLIST (Pre-Launch)

### Test Order Flow:

```
✅ 1. Add product to cart din site Lovable
✅ 2. Open cart drawer
✅ 3. Click "Checkout with Shopify"
✅ 4. Se deschide checkout Shopify în tab nou
✅ 5. Completează detalii client
✅ 6. Selectează shipping method
✅ 7. Add payment method (folosește Shopify test cards)
✅ 8. Place order
✅ 9. Verifică email confirmation
✅ 10. Verifică order în Shopify Admin
```

### Shopify Test Cards (Bogus Gateway):
```
Pentru testare fără plăți reale:
Settings → Payments → "Activate Bogus Gateway"

Test cards:
✅ Success: 1 (orice card number care începe cu 1)
❌ Declined: 2
⏳ Pending: 3
```

### Testează scenarii:
- ✅ Comandă sub free shipping threshold
- ✅ Comandă peste threshold (livrare gratuită)
- ✅ Comandă din România
- ✅ Comandă din UE
- ✅ Payment declined
- ✅ Multiple items în cart
- ✅ Update quantity în cart

---

## 📊 NEXT STEPS - După Configurare

1. **Claim Your Shopify Store** (când ești gata pentru LIVE)
   - Shopify îți oferă 30 zile trial gratuit
   - După trial: selectează un plan (Basic = $39/lună)

2. **Configure Curier Integration**
   - FanCourier API pentru tracking automat
   - Sau manual: generate AWB-uri în FanCourier portal

3. **Setup Facturare Automată**
   - Integrează SmartBill sau Oblio pentru facturi automate
   - Obligatoriu în România: factură electronică la fiecare comandă

4. **Marketing Setup**
   - Email marketing: Klaviyo sau Mailchimp
   - Social media: Instagram Shopping, Facebook Shops
   - Google Ads, TikTok Ads setup

---

## 🆘 SUPPORT & RESOURCES

### Shopify Help Center:
- Payments: https://help.shopify.com/en/manual/payments
- Shipping: https://help.shopify.com/en/manual/shipping
- Taxes: https://help.shopify.com/en/manual/taxes

### România Specific:
- ANPC Guidelines: https://anpc.ro/ce-este-sal/
- Facturare electronică: https://www.anaf.ro/
- TVA OSS: https://ec.europa.eu/taxation_customs/

### Contact:
- Shopify Support: 24/7 chat în admin dashboard
- Wavely Tech: contact@wavely.ro (pentru probleme tehnice)

---

## ✅ COMPLETION CHECKLIST

Înainte de a lansa store-ul:
```
□ Payment provider activat și testat
□ Shipping zones configurate (România + UE)
□ Tax rate 19% TVA setată
□ Checkout settings optimizate
□ Email notifications personalizate
□ Store details completate (CUI, adresă)
□ Legal pages linkate în checkout
□ Domain custom conectat (opțional, dar recomandat)
□ Test order procesată cu succes
□ Google Analytics configurat
□ Facebook Pixel instalat (pentru ads)
```

**🎉 Când toate sunt bifate → READY TO LAUNCH!**

---

*Ultima actualizare: 2025-01-04*
*Versiune: FAZA 2 - Payment & Shipping Setup*
