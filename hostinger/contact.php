<?php
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
$body = "Name: $name
Email: $email
Arrival: $arrive
Departure: $depart
Guests: $guests
Villa: $villa

Message:
$message";
$headers = "From: $email";

if (mail($to, $subject, $body, $headers)) {
  echo 'Thank you. Your enquiry has been sent.';
} else {
  http_response_code(500);
  echo 'Sorry, there was a problem sending your enquiry. Please call us directly.';
}
