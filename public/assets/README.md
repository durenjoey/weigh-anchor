# Assets Directory

This directory contains all media assets for the Weigh Anchor website.

## Folder Structure

### `/logos/`
- **company-logo.png** - Main Weigh Anchor logo (recommended: 300x100px, PNG with transparency)
- **company-logo-white.png** - White version for dark backgrounds
- **company-icon.png** - Square icon version (recommended: 256x256px)
- **client-logos/** - Client logos for trust bar
  - doj-logo.png
  - va-logo.png
  - tribal-nations-logo.png
  - fortune500-client-logos.png

### `/images/`
- **hero-construction.jpg** - Hero section background image
- **about-team.jpg** - Team/company photo for About page
- **construction-site-1.jpg** - Project photos
- **construction-site-2.jpg** - Project photos
- **technology-dashboard.jpg** - Technology section visual

### `/documents/`
- **capability-statement.pdf** - Downloadable capability statement
- **company-profile.pdf** - Company profile document

### `/team/`
- **ceo-headshot.jpg** - CEO professional headshot
- **cto-headshot.jpg** - CTO professional headshot
- **vp-operations-headshot.jpg** - VP Operations headshot

## Image Guidelines

### Logos
- **Format**: PNG with transparency preferred
- **Size**: Company logo should be 2x retina ready (600x200px actual, displayed at 300x100px)
- **Client logos**: Consistent height recommended (80px tall)

### Photos
- **Format**: JPG for photos, PNG for graphics with transparency
- **Size**: Web-optimized (under 500KB each)
- **Dimensions**: 
  - Hero images: 1920x1080px or larger
  - Team headshots: 400x400px square
  - Project photos: 800x600px or larger

### Documents
- **Format**: PDF
- **Size**: Under 5MB for web downloads

## Usage in Code

Access these assets using the `/assets/` path:

```jsx
// Company logo
<img src="/assets/logos/company-logo.png" alt="Weigh Anchor" />

// Client logos
<img src="/assets/logos/client-logos/doj-logo.png" alt="Department of Justice" />

// Team photos
<img src="/assets/team/ceo-headshot.jpg" alt="CEO Name" />

// Documents
<a href="/assets/documents/capability-statement.pdf" download>
  Download Capability Statement
</a>
```

## Next Steps

1. Drop your logo files into `/logos/`
2. Add client logos to `/logos/client-logos/`
3. Add team headshots to `/team/`
4. Add any project photos to `/images/`
5. Add capability statement to `/documents/`

The website will automatically use these assets once they're placed in the correct folders.