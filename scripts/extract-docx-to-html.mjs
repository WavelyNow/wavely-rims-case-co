import fs from 'fs';
import path from 'path';
import mammoth from 'mammoth';

const sourceDir = 'C:/Users/robert.popescu/Documents/proiect';
const targetDir = path.resolve('src/content/legal');

const files = [
  { src: 'Privacy Policy Wavely v1.0.docx', out: 'privacy.html' },
  { src: 'Wavely terms and condition v1.0.docx', out: 'terms.html' },
  { src: 'Cookie Policy Wavely.docx', out: 'cookie.html' },
  // If an FAQ doc is provided later, add: { src: 'FAQ Wavely.docx', out: 'faq.html' }
];

async function convertDocxToHtml(srcPath) {
  const options = {
    styleMap: [
      'p[style-name="Normal"] => p:fresh',
      'h1 => h1:fresh',
      'h2 => h2:fresh',
      'h3 => h3:fresh',
      'h4 => h4:fresh',
      'h5 => h5:fresh',
      'h6 => h6:fresh',
      'ul => ul:fresh',
      'ol => ol:fresh',
      'li => li:fresh'
    ],
    convertImage: mammoth.images.inline(async () => null),
    includeDefaultStyleMap: true,
  };
  const { value: html } = await mammoth.convertToHtml({ path: srcPath }, options);
  return html.trim();
}

async function run() {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  for (const f of files) {
    const srcPath = path.join(sourceDir, f.src);
    if (!fs.existsSync(srcPath)) {
      console.warn(`[skip] Missing DOCX: ${srcPath}`);
      continue;
    }
    console.log(`[convert] ${srcPath}`);
    const html = await convertDocxToHtml(srcPath);
    const outPath = path.join(targetDir, f.out);
    // Wrap in semantic container to help styling via .prose
    const wrapped = `<article lang=\"en\">\n${html}\n</article>`;
    fs.writeFileSync(outPath, wrapped, 'utf8');
    console.log(`[write] ${outPath} (${Buffer.byteLength(wrapped, 'utf8')} bytes)`);
  }

  console.log('Done.');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});