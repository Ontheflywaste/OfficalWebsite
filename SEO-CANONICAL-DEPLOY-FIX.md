# CANONICAL TAGS

Add these **server-rendered** tags in the HTML `<head>` for each matching route template (for this repo, place them in the SSR head partial/template that outputs the route head, not via client JS runtime injection):

```html
<link rel="canonical" href="https://ontheflywastesolutions.com/services/valet-trash" />
<link rel="canonical" href="https://ontheflywastesolutions.com/services/junk-removal" />
<link rel="canonical" href="https://ontheflywastesolutions.com/services/bulk-removal" />
<link rel="canonical" href="https://ontheflywastesolutions.com/services/pressure-washing" />
<link rel="canonical" href="https://ontheflywastesolutions.com/about" />
<link rel="canonical" href="https://ontheflywastesolutions.com/" />
<link rel="canonical" href="https://ontheflywastesolutions.com/blog" />
<link rel="canonical" href="https://ontheflywastesolutions.com/blog/valet-trash-benefits" />
<link rel="canonical" href="https://ontheflywastesolutions.com/blog/holiday-waste-management-guide-thanksgiving-christmas-newyears" />
<link rel="canonical" href="https://ontheflywastesolutions.com/blog/valet-trash-benefits-orlando-apartments" />
<link rel="canonical" href="https://ontheflywastesolutions.com/blog/new-construction-apartments-valet-trash-guide" />
<link rel="canonical" href="https://ontheflywastesolutions.com/blog/what-property-managers-should-expect-valet-trash-company" />
<link rel="canonical" href="https://ontheflywastesolutions.com/blog/hidden-costs-in-house-trash-management" />
<link rel="canonical" href="https://ontheflywastesolutions.com/blog/valet-trash-benefits" />
<link rel="canonical" href="https://ontheflywastesolutions.com/blog/sustainable-waste-management" />
<link rel="canonical" href="https://ontheflywastesolutions.com/blog/bulk-waste-removal-guide" />
<link rel="canonical" href="https://ontheflywastesolutions.com/contact" />
<link rel="canonical" href="https://ontheflywastesolutions.com/reviews" />
```

---

# NGINX SNIPPET

Paste inside your `server { ... }` block. This targets **only** the listed URLs, strips trailing slash variants, strips query strings, and safely handles both together.

```nginx
# ------------------------------------------------------------
# Canonical enforcement for specific URLs only
# ------------------------------------------------------------

# 1) Match only listed canonical paths (NO trailing slash in capture)
map $uri $is_canonical_target {
    default 0;
    /services/valet-trash 1;
    /services/junk-removal 1;
    /services/bulk-removal 1;
    /services/pressure-washing 1;
    /about 1;
    / 1;
    /blog 1;
    /blog/valet-trash-benefits 1;
    /blog/holiday-waste-management-guide-thanksgiving-christmas-newyears 1;
    /blog/valet-trash-benefits-orlando-apartments 1;
    /blog/new-construction-apartments-valet-trash-guide 1;
    /blog/what-property-managers-should-expect-valet-trash-company 1;
    /blog/hidden-costs-in-house-trash-management 1;
    /blog/sustainable-waste-management 1;
    /blog/bulk-waste-removal-guide 1;
    /contact 1;
    /reviews 1;
}

# 2) Normalize trailing slash variant for these specific targets
# Example: /services/valet-trash/ -> /services/valet-trash
if ($request_uri ~* "^(/services/valet-trash|/services/junk-removal|/services/bulk-removal|/services/pressure-washing|/about|/blog|/blog/valet-trash-benefits|/blog/holiday-waste-management-guide-thanksgiving-christmas-newyears|/blog/valet-trash-benefits-orlando-apartments|/blog/new-construction-apartments-valet-trash-guide|/blog/what-property-managers-should-expect-valet-trash-company|/blog/hidden-costs-in-house-trash-management|/blog/sustainable-waste-management|/blog/bulk-waste-removal-guide|/contact|/reviews)/+(\?.*)?$") {
    return 301 https://ontheflywastesolutions.com$1;
}

# 3) Strip query string for canonical targets (including homepage)
# Example: /services/valet-trash?utm=x -> /services/valet-trash
if ($is_canonical_target = 1) {
    if ($args != "") {
        return 301 https://ontheflywastesolutions.com$uri;
    }
}

# 4) Keep homepage canonical at trailing slash
if ($uri = "/") {
    if ($args != "") {
        return 301 https://ontheflywastesolutions.com/;
    }
}
```

---

# APACHE SNIPPET

Equivalent `.htaccess` rules with `mod_rewrite` for only the listed paths.

```apache
<IfModule mod_rewrite.c>
RewriteEngine On

# ------------------------------------------------------------
# Canonical enforcement for specific URLs only
# ------------------------------------------------------------

# 1) Remove trailing slash on listed URLs (except root)
RewriteCond %{REQUEST_URI} ^/(services/valet-trash|services/junk-removal|services/bulk-removal|services/pressure-washing|about|blog|blog/valet-trash-benefits|blog/holiday-waste-management-guide-thanksgiving-christmas-newyears|blog/valet-trash-benefits-orlando-apartments|blog/new-construction-apartments-valet-trash-guide|blog/what-property-managers-should-expect-valet-trash-company|blog/hidden-costs-in-house-trash-management|blog/sustainable-waste-management|blog/bulk-waste-removal-guide|contact|reviews)/+$ [NC]
RewriteRule ^ https://ontheflywastesolutions.com/%1 [R=301,L]

# 2) Strip query string for listed canonical targets, including root
RewriteCond %{QUERY_STRING} .+
RewriteCond %{REQUEST_URI} ^/$ [OR]
RewriteCond %{REQUEST_URI} ^/(services/valet-trash|services/junk-removal|services/bulk-removal|services/pressure-washing|about|blog|blog/valet-trash-benefits|blog/holiday-waste-management-guide-thanksgiving-christmas-newyears|blog/valet-trash-benefits-orlando-apartments|blog/new-construction-apartments-valet-trash-guide|blog/what-property-managers-should-expect-valet-trash-company|blog/hidden-costs-in-house-trash-management|blog/sustainable-waste-management|blog/bulk-waste-removal-guide|contact|reviews)$ [NC]
RewriteRule ^ https://ontheflywastesolutions.com%{REQUEST_URI}? [R=301,L]

</IfModule>
```

---

# GREP COMMAND

Use this from repo root to find internal links using trailing-slash or query variants of the canonical list:

```bash
rg -n --pcre2 "https?://ontheflywastesolutions\.com(?:/services/(?:valet-trash|junk-removal|bulk-removal|pressure-washing)/|/about/|/blog/|/blog/(?:valet-trash-benefits|holiday-waste-management-guide-thanksgiving-christmas-newyears|valet-trash-benefits-orlando-apartments|new-construction-apartments-valet-trash-guide|what-property-managers-should-expect-valet-trash-company|hidden-costs-in-house-trash-management|sustainable-waste-management|bulk-waste-removal-guide)/|/contact/|/reviews/|/\?(?:[^\"'\s<]*)|/(?:services/(?:valet-trash|junk-removal|bulk-removal|pressure-washing)|about|blog|blog/(?:valet-trash-benefits|holiday-waste-management-guide-thanksgiving-christmas-newyears|valet-trash-benefits-orlando-apartments|new-construction-apartments-valet-trash-guide|what-property-managers-should-expect-valet-trash-company|hidden-costs-in-house-trash-management|sustainable-waste-management|bulk-waste-removal-guide)|contact|reviews)\?(?:[^\"'\s<]*))" .
```

---

# SITEMAP SNIPPET

Use this exact block in `sitemap.xml` (replace `[LASTMOD]` with `YYYY-MM-DD` per URL):

```xml
<url>
  <loc>https://ontheflywastesolutions.com/services/valet-trash</loc>
  <lastmod>[LASTMOD]</lastmod>
</url>
<url>
  <loc>https://ontheflywastesolutions.com/services/junk-removal</loc>
  <lastmod>[LASTMOD]</lastmod>
</url>
<url>
  <loc>https://ontheflywastesolutions.com/services/bulk-removal</loc>
  <lastmod>[LASTMOD]</lastmod>
</url>
<url>
  <loc>https://ontheflywastesolutions.com/services/pressure-washing</loc>
  <lastmod>[LASTMOD]</lastmod>
</url>
<url>
  <loc>https://ontheflywastesolutions.com/about</loc>
  <lastmod>[LASTMOD]</lastmod>
</url>
<url>
  <loc>https://ontheflywastesolutions.com/</loc>
  <lastmod>[LASTMOD]</lastmod>
</url>
<url>
  <loc>https://ontheflywastesolutions.com/blog</loc>
  <lastmod>[LASTMOD]</lastmod>
</url>
<url>
  <loc>https://ontheflywastesolutions.com/blog/valet-trash-benefits</loc>
  <lastmod>[LASTMOD]</lastmod>
</url>
<url>
  <loc>https://ontheflywastesolutions.com/blog/holiday-waste-management-guide-thanksgiving-christmas-newyears</loc>
  <lastmod>[LASTMOD]</lastmod>
</url>
<url>
  <loc>https://ontheflywastesolutions.com/blog/valet-trash-benefits-orlando-apartments</loc>
  <lastmod>[LASTMOD]</lastmod>
</url>
<url>
  <loc>https://ontheflywastesolutions.com/blog/new-construction-apartments-valet-trash-guide</loc>
  <lastmod>[LASTMOD]</lastmod>
</url>
<url>
  <loc>https://ontheflywastesolutions.com/blog/what-property-managers-should-expect-valet-trash-company</loc>
  <lastmod>[LASTMOD]</lastmod>
</url>
<url>
  <loc>https://ontheflywastesolutions.com/blog/hidden-costs-in-house-trash-management</loc>
  <lastmod>[LASTMOD]</lastmod>
</url>
<url>
  <loc>https://ontheflywastesolutions.com/blog/sustainable-waste-management</loc>
  <lastmod>[LASTMOD]</lastmod>
</url>
<url>
  <loc>https://ontheflywastesolutions.com/blog/bulk-waste-removal-guide</loc>
  <lastmod>[LASTMOD]</lastmod>
</url>
<url>
  <loc>https://ontheflywastesolutions.com/contact</loc>
  <lastmod>[LASTMOD]</lastmod>
</url>
<url>
  <loc>https://ontheflywastesolutions.com/reviews</loc>
  <lastmod>[LASTMOD]</lastmod>
</url>
```

Resubmission steps: deploy sitemap update, then in Google Search Console go to **Sitemaps** → submit `https://ontheflywastesolutions.com/sitemap.xml` → click the submitted sitemap row to confirm URLs were discovered.

---

# SERVICE PAGE PARAGRAPHS

Add each paragraph directly under the H1 (server-rendered) for the matching service page.

## /services/valet-trash
**Why Property Managers Choose Us**
On The Fly Waste Solutions gives property managers predictable nightly execution, clear resident-facing standards, and fast issue resolution. Our teams arrive on schedule, document completion, and coordinate with onsite staff so operations stay clean without adding management overhead. You get a dependable amenity that supports retention and protects curb appeal.

## /services/junk-removal
**Why Property Managers Choose Us**
Property managers rely on our junk removal crews for controlled timelines, safe hauling practices, and minimal disruption to residents. We scope jobs quickly, confirm access requirements, and clear units, breezeways, and common areas with professional handling. The result is faster turns, fewer compliance headaches, and cleaner presentation for prospects and residents.

## /services/bulk-removal
**Why Property Managers Choose Us**
Our bulk removal service helps managers keep oversized-item accumulation from escalating into complaints, citations, or labor drains. We provide scheduled pickups, organized staging guidance, and accountable completion reporting, so teams can plan confidently. Communities stay cleaner, maintenance staff stays focused, and move-out periods remain manageable across high-volume properties.

## /services/pressure-washing
**Why Property Managers Choose Us**
Managers choose our pressure washing service to maintain asset appearance without disrupting daily community flow. We coordinate around peak traffic windows, use surface-appropriate methods, and verify completion by area. This structured approach improves curb appeal, supports leasing outcomes, and reduces the burden on onsite teams managing vendor follow-through.

---

# FAQ JSON-LD BLOCKS

## /services/valet-trash
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How often can valet trash be scheduled for our community?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most multifamily communities choose five to seven nights per week based on occupancy and compactor capacity. We build a fixed service calendar with backup coverage and holiday handling so your team has predictable operations, fewer overflow events, and clear resident expectations throughout the month."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide proof that service was completed each night?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide property-level proof-of-service with completion logs and photo verification when required by your policy. Managers receive clear documentation for accountability, resident follow-up, and internal reporting, helping your staff confirm execution without manually auditing every building after pickup windows."
      }
    },
    {
      "@type": "Question",
      "name": "Are your teams insured, and what coverage is included?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our teams operate with active business insurance and follow documented safety procedures for multifamily service environments. Certificates of insurance can be provided during onboarding. This helps reduce vendor risk exposure, supports compliance requirements, and gives property ownership confidence that service is professionally managed."
      }
    }
  ]
}
</script>
```

## /services/junk-removal
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can junk removal be coordinated around turns and inspections?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We schedule pickups around turn calendars, inspection timelines, and access windows so your operations stay on track. Our team confirms scope in advance and executes within agreed time blocks, helping property managers avoid make-ready delays and keep vacant units progressing toward leasing readiness."
      }
    },
    {
      "@type": "Question",
      "name": "What reporting do managers receive after a junk removal job?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After service, managers receive completion confirmation with itemized scope notes and optional before-and-after photos. This provides documentation for ownership updates, resident chargeback workflows, and vendor accountability reviews. Standardized reporting reduces follow-up calls and gives teams a clear record of what was removed and when."
      }
    },
    {
      "@type": "Question",
      "name": "How do you handle liability and site protection during removals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use insured crews, controlled loading practices, and route planning to minimize risk in occupied communities. Teams protect common areas during transport and follow onsite rules for elevators, gates, and disposal points. This structured process helps property managers maintain safe operations while reducing exposure to damage claims."
      }
    }
  ]
}
</script>
```

## /services/bulk-removal
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How frequently should bulk item removal be scheduled?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Frequency depends on move-out volume, student turnover cycles, and local disposal constraints. Many communities run weekly or biweekly pickups, then increase cadence during peak turnover months. We help managers set a schedule that prevents pileups, protects curb appeal, and keeps maintenance teams focused on higher-value tasks."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide proof-of-service and pickup summaries?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Each visit can include confirmation notes, pickup summaries, and photo documentation for designated areas. This gives managers visibility into execution, supports operational reporting to ownership, and creates a consistent record for compliance reviews or resident communication when recurring bulk disposal issues appear."
      }
    },
    {
      "@type": "Question",
      "name": "Are your bulk removal operations insured and compliant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our crews are insured and operate using established handling and disposal procedures aligned with property policies and local requirements. We coordinate approved loading zones and service windows with onsite teams. This reduces risk, improves predictability, and helps management maintain a professional, audit-ready vendor program."
      }
    }
  ]
}
</script>
```

## /services/pressure-washing
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can pressure washing be scheduled to avoid resident disruption?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We coordinate service windows around leasing traffic, resident peak hours, and access constraints to minimize disruption. Managers receive a clear area sequence and timeline before work starts. This planning-first approach keeps operations predictable while improving cleanliness across high-visibility community surfaces."
      }
    },
    {
      "@type": "Question",
      "name": "How do managers verify completed pressure washing areas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide completion reporting by area, including notes and optional photo verification for prioritized zones. This documentation supports vendor accountability, ownership updates, and maintenance planning. Property teams can quickly confirm what was completed and flag follow-up items without relying on ad hoc walk-throughs."
      }
    },
    {
      "@type": "Question",
      "name": "What insurance and risk controls are in place for this service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our pressure washing crews are insured and follow site-specific safety controls, including equipment handling standards and hazard awareness in active multifamily environments. We align with property access and safety requirements before work begins. This helps reduce risk exposure while ensuring professional service quality."
      }
    }
  ]
}
</script>
```

---

# PR MESSAGE & DEVELOPER NOTE

**One-line PR/commit message:**
`SEO: enforce canonical URLs with targeted redirects, sitemap alignment, and unique service-page indexation content`

**Developer note:**
Apply canonical tags in the server-rendered head template used by route pages (or per-route server templates), place redirect logic in the web server layer (`nginx` server block or Apache `.htaccess`), and update `sitemap.xml` so only canonical URLs are published. Add the four service-page manager-focused paragraphs directly under each H1 and embed each page’s FAQ JSON-LD in the server HTML output. Keep all canonical and schema output server-side only (no JS runtime injection).

---

# VERIFICATION CHECKLIST

## A) Redirect and canonical validation via curl

```bash
# Service page trailing slash -> canonical
curl -I https://ontheflywastesolutions.com/services/valet-trash/

# Service page query variant -> canonical
curl -I "https://ontheflywastesolutions.com/services/valet-trash?utm=test"

# Service canonical tag exists in HTML
curl -s https://ontheflywastesolutions.com/services/valet-trash | grep -i canonical

# Blog trailing slash -> canonical
curl -I https://ontheflywastesolutions.com/blog/valet-trash-benefits/

# Blog query variant -> canonical
curl -I "https://ontheflywastesolutions.com/blog/valet-trash-benefits?ref=abc"

# Blog canonical tag exists
curl -s https://ontheflywastesolutions.com/blog/valet-trash-benefits | grep -i canonical

# Homepage query variant -> canonical homepage
curl -I "https://ontheflywastesolutions.com/?utm=test"

# Homepage canonical tag exists
curl -s https://ontheflywastesolutions.com/ | grep -i canonical

# Optional full redirect chain visibility
curl -IL "https://ontheflywastesolutions.com/services/valet-trash/?utm=test"
```

Expected: `301` with `Location: https://ontheflywastesolutions.com/<canonical-path>` for variants, and `200` canonical pages containing exactly one matching `<link rel="canonical" ...>`.

## B) Search Console exact steps

1. Open **Google Search Console** for property `https://ontheflywastesolutions.com/`.
2. Go to **URL Inspection**.
3. Inspect one canonical URL (example: `/services/valet-trash`).
4. In results, verify:
   - **Indexing allowed?** = Yes.
   - **User-declared canonical** = exact canonical URL.
   - **Google-selected canonical** (after recrawl) matches user-declared canonical.
5. Click **Test Live URL** → wait for completion.
6. Click **Request Indexing**.
7. Repeat for at least: homepage `/`, one service page, one blog post.
8. Go to **Indexing → Pages** and monitor “Duplicate without user-selected canonical” trend.
9. Go to **Sitemaps** → submit/refresh `https://ontheflywastesolutions.com/sitemap.xml`.

## C) Two-week monitoring plan

- Check **Indexing → Pages** every 2–3 days for reduction of duplicate-canonical issues.
- Reinspect affected URLs in **URL Inspection** after crawl events.
- Confirm server logs show Googlebot receiving `301` on variants and `200` on canonical URLs.
- Ensure newly published internal links always reference canonical URLs only.

---

# FALLBACK NOTE

If Google still selects the homepage as canonical after these fixes, the issue is usually content similarity or weak internal signals. Increase uniqueness on affected pages (intro copy, FAQs, headings), strengthen internal links pointing directly to each canonical URL with descriptive anchor text, and ensure no conflicting canonical/redirect/meta-robots signals exist. Then request reindexing again and allow at least 1–2 crawl cycles.
