import { writeFile, mkdir, cp, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";


const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const distClient = join(root, "dist/client");
const hostingerOut = join(root, "hostinger");

async function main() {
  // 1. Build the project first
  console.log("Building project...");
  const { execSync } = await import("node:child_process");
  execSync("bun run build", { cwd: root, stdio: "inherit" });

  // 2. Load the Nitro server handler
  const serverMod = await import(join(root, "dist/server/index.mjs"));
  const handler = serverMod.default || serverMod;

  // 3. Render the home page by making a request to the server
  const request = new Request("http://localhost/");
  const response = await handler.fetch(request, {}, { waitUntil: () => {} });
  let html = await response.text();

  // 4. Make asset URLs relative so the site works on any host/subdomain/subfolder
  html = html
    .replace(/href="\//g, 'href="')
    .replace(/src="\//g, 'src="')
    .replace(/url\("\//g, 'url("')
    .replace(/src="__l5e\/assets-v1\/[^"]+"/g, 'src="favicon.png"');


  // 5. Write the static index.html
  await writeFile(join(distClient, "index.html"), html, "utf-8");

  // 6. Copy dist/client to hostinger/ folder
  if (existsSync(hostingerOut)) {
    await rm(hostingerOut, { recursive: true, force: true });
  }
  await mkdir(hostingerOut, { recursive: true });
  await cp(distClient, hostingerOut, { recursive: true });

  // 7. Add a PHP contact form handler for Hostinger
  await writeFile(
    join(hostingerOut, "contact.php"),
    `<?php
// Simple contact form handler for Hostinger
header('Content-Type: text/plain; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo 'Method not allowed';
  exit;
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$arrive = trim($_POST['arrive'] ?? '');
$depart = trim($_POST['depart'] ?? '');
$guests = trim($_POST['guests'] ?? '');
$villa = trim($_POST['villa'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || $email === '') {
  http_response_code(400);
  echo 'Please provide your name and email.';
  exit;
}

$to = 'reservations@seaweedvilla.com';
$subject = 'Seaweed Villa availability enquiry';
$body = "Name: $name\nEmail: $email\nArrival: $arrive\nDeparture: $depart\nGuests: $guests\nVilla: $villa\n\nMessage:\n$message";
$headers = "From: $email";

if (mail($to, $subject, $body, $headers)) {
  echo 'Thank you. Your enquiry has been sent.';
} else {
  http_response_code(500);
  echo 'Sorry, there was a problem sending your enquiry. Please call us directly.';
}
`,
    "utf-8",
  );

  console.log("Hostinger export ready at:", hostingerOut);
  console.log("Upload the contents of this folder to your Hostinger subdomain/public_html.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
