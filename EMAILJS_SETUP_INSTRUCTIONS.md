# EmailJS Setup Instructions for Chatbot Notifications

## Overview
The chatbot is configured to send email notifications to **bemes0112@gmail.com** whenever a user sends a message through the chat interface.

## Setup Steps

### 1. Create a New EmailJS Template

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/admin/template)
2. Click **"Create New Template"**
3. Name it: **"Chatbot Notification"** or similar

### 2. Configure Template Variables

In your EmailJS template, use these variables:

```
Subject: New Chat Message - {{timestamp}}

To: {{to_email}}
From: {{from_name}}

Message:
{{message}}

---
Page: {{page_title}}
URL: {{page_url}}
Time: {{timestamp}}
```

### 3. Template Structure Example

**Subject Line:**
```
New Chat Message from Website Visitor - {{timestamp}}
```

**Email Body:**
```
Hello,

You have received a new chat message from your website:

{{user_message}}

---
Page: {{page_title}}
URL: {{page_url}}
Time: {{timestamp}}

This is an automated notification from SBRIT Solution Chatbot.
```

### 4. Update Template ID in Code

After creating the template, copy the **Template ID** and update it in:
- File: `src/components/Chatbot.tsx`
- Line: Update `EMAILJS_TEMPLATE_ID` constant

```typescript
const EMAILJS_TEMPLATE_ID = "your_new_template_id_here";
```

### 5. Verify EmailJS Configuration

Make sure these are correct in `Chatbot.tsx`:
- `EMAILJS_SERVICE_ID`: Your EmailJS service ID
- `EMAILJS_TEMPLATE_ID`: Your new chat template ID
- `EMAILJS_USER_ID`: Your EmailJS user ID
- `NOTIFICATION_EMAIL`: bemes0112@gmail.com

### 6. Test the Integration

1. Open your website
2. Send a test message through the chatbot
3. Check bemes0112@gmail.com for the notification email

## Current Configuration

- **Service ID**: `service_slrxim8`
- **User ID**: `mFRIsSwCYxzv3SMOW`
- **Notification Email**: `bemes0112@gmail.com`
- **Template ID**: Update with your new template ID

## Troubleshooting

### Email Not Received?
1. Check EmailJS dashboard for error logs
2. Verify template variables match exactly
3. Check spam folder
4. Verify EmailJS service is active
5. Check browser console for errors

### Template Variables Not Working?
- Make sure variable names match exactly (case-sensitive)
- Use double curly braces: `{{variable_name}}`
- Test with EmailJS template tester

## Alternative: Use Existing Template

If you want to use the existing template (`template_q9fc9jr`), you may need to adjust the parameter names in `sendEmailNotification` function to match your existing template structure.

## Support

For EmailJS support, visit: https://www.emailjs.com/docs/

