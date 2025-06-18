// scripts/build-project.js
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const appName = process.argv[2];
if (!appName) {
  console.error(
    '❌ Please provide the app name as an argument.\nUsage: npm run build-project <app-name>'
  );
  process.exit(1);
}

const projectAppPath = path.resolve(__dirname, `../projects/${appName}`);
const outputDirNames = ['dist', 'build']; // Try both common build outputs
const publicPath = path.resolve(__dirname, `../public/${appName}`);

function run(cmd, cwd) {
  console.log(`🔧 Running: ${cmd}`);
  execSync(cmd, { stdio: 'inherit', cwd });
}

// Step 1: Build the app
run('npm install', projectAppPath);
run('npm run build', projectAppPath);

// Step 2: Determine build output directory
let outputPath;
for (const dir of outputDirNames) {
  const candidate = path.join(projectAppPath, dir);
  if (fs.existsSync(candidate)) {
    outputPath = candidate;
    break;
  }
}

if (!outputPath) {
  console.error(
    `❌ Could not find build output in ${outputDirNames.join(
      ' or '
    )} under ${projectAppPath}`
  );
  process.exit(1);
}

// Step 3: Copy to public
console.log(`📁 Copying from ${outputPath} to ${publicPath}`);
fs.rmSync(publicPath, { recursive: true, force: true });
fs.mkdirSync(publicPath, { recursive: true });

fs.cpSync(outputPath, publicPath, { recursive: true });

// Step 4: Fix absolute asset paths in index.html
const indexHtmlPath = path.join(publicPath, 'index.html');
if (fs.existsSync(indexHtmlPath)) {
  let html = fs.readFileSync(indexHtmlPath, 'utf-8');

  // Replace src="/assets/..." and href="/assets/..." with ./assets/...
  html = html.replace(/(src|href)="\/assets\//g, '$1="./assets/');

  fs.writeFileSync(indexHtmlPath, html, 'utf-8');
  console.log('🛠️  Patched asset paths in index.html to be relative');
}

console.log(
  `✅ Successfully built and copied "${appName}" to public/${appName}`
);
