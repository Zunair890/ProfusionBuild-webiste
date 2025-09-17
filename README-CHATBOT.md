# Profusion Construction Website with AI Chatbot

## 🤖 AI Chatbot Setup

### Features
- **Gemini AI Integration** - Powered by Google's Gemini Pro API
- **Construction Expertise** - Specialized knowledge for roofing, remodeling, restoration
- **Mobile Responsive** - Works on all devices
- **Professional Design** - Matches website branding

### Quick Start
The chatbot is already configured and ready to use with your API key.

### Customization Instructions

#### 1. Update System Prompt
In `chatbot.js`, find the section marked:
```javascript
[CLIENT CUSTOM DETAILS SPACE - ADD SPECIFIC BUSINESS DETAILS HERE]
```

Add your specific business details such as:
- Special services or certifications
- Service areas beyond DFW
- Pricing information
- Team member expertise
- Company history/awards
- Specific project types you specialize in

#### 2. Customize Responses
You can modify the response guidelines to match your company's tone:
- Adjust the formality level
- Add specific terminology you use
- Include pricing ranges if desired
- Modify emergency protocols

#### 3. API Key Management
Your API key is stored in `.env` file (not committed to git for security).
For production deployment:
- Use environment variables on your hosting platform
- Never expose the API key in client-side code

### Testing the Chatbot

1. **Open the website**
2. **Click the yellow chatbot icon** (bottom right corner)
3. **Try these test questions:**
   - "I need roof inspection"
   - "Emergency water damage help"
   - "Kitchen remodeling costs"
   - "Service areas in DFW"

### Deployment Notes

**For Vercel/Netlify:**
- Add `GEMINI_API_KEY` to environment variables
- The API key is securely stored server-side

**For static hosting:**
- The current setup works with static hosting
- API calls are made directly from browser (ensure key quotas are set)

### Support

For chatbot customization or issues:
- Check browser console for errors
- Verify API key is valid
- Test API connectivity

### Security
- ✅ API key stored in environment file
- ✅ .gitignore protects sensitive data
- ✅ Rate limiting handled by Gemini API
- ✅ Content filtering enabled

---

**Ready to deploy!** 🚀