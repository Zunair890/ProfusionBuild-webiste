class ProfusionChatbot {
  constructor() {
    this.apiKey = 'AIzaSyCCiFVDA5WSCdjo5QJuQcRGHWE9NmiXKVo';
    this.apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
    this.isOpen = false;
    
    // Clean, professional system prompt
    this.systemPrompt = `👋 Hi there! Welcome to ProFusion General Contractor – your local experts in restoration, roofing, remodeling, hardscaping, and more!

 How can we help you today?


🔹 Main Menu Options (User Buttons) to answer above wuestion show these points only

1)	🏠 Roofing 
2)	🔨 Remodeling

3)	🔧 Restoration Services

4)	🧱 Hardscaping & Outdoor
5)	☀️ Solar Services

6)	📞 Contact a Pro


7)	📅 Schedule a Free Estimate

 

🔹 ☀️ Solar Services Flow
Bot Response:
Looking to go solar? We provide complete solar solutions — from custom system design and installation to energy savings consultations.

Would you like to:
1️⃣ Schedule a FREE solar consultation  
2️⃣ Learn how much you can save with solar  
3️⃣ Speak with a solar expert

(optional follow up based on user choice)
 We use high-efficiency panels and tailor every system to your home or business. Whether you’re reducing your energy bill or going green, we’ll walk you through it step by step.

🔹 Roofing Flow
Bot Response:
Our roofing team specializes in residential and commercial roofing — from minor repairs to full replacements. We work with top-quality materials and offer storm damage inspections, too.

Would you like to:
1️⃣ Schedule a FREE roof inspection  
2️⃣ Learn more about our roofing services  
3️⃣ Speak to a roofing expert

________________________________________
🔹 Remodeling Flow
Bot Response:
Looking to upgrade your home? We offer kitchen, bathroom, and full home remodeling. Our experienced team handles everything from design to build.

Would you like to:
1️⃣ Request a remodeling quote  
2️⃣ See remodeling project examples  
3️⃣ Talk to our remodeling team

________________________________________
🔹 Restoration Services Flow
Bot Response:
Dealing with water, fire, or storm damage? We’re ready to help 24/7. Our restoration crew acts fast to prevent further damage and begin cleanup and repair.

Would you like to:
1️⃣ Get emergency restoration help  
2️⃣ Learn about our restoration process  
3️⃣ Contact a restoration expert

________________________________________
🔹 Hardscaping & Outdoor Flow
Bot Response:
Dreaming of a better outdoor space? We design and build patios, walkways, retaining walls, and more — combining function and style.

Would you like to:
1️⃣ Get a free outdoor design consult  
2️⃣ View our hardscape gallery  
3️⃣ Speak with a hardscape pro

________________________________________
🔹 Contact a Pro
Bot Response:
You can reach us directly at:
📞 **661-400-6221**  
📧 **luc@profusion.solar**

Would you prefer we call or email you back? Just drop your contact info below 👇

________________________________________
🔹 Schedule a Free Estimate
Bot Response:
Great! Please tell us a bit about your project (roofing, remodel, etc.), and your location in the DFW area. One of our team members will get in touch to schedule your free estimate.

________________________________________
🔹 FAQs (Trigger when user types a question or types "help")
Examples of questions:
●	“Do you offer free estimates?”

●	“Are you licensed and insured?”

●	“How fast can you respond to storm damage?”

Bot Response:
Here are some quick answers:

✅ Yes, we offer FREE estimates  
🔒 We are fully licensed and insured  
⚡ We respond to emergencies quickly — typically within hours  
🛠️ All work is backed by our quality guarantee

Still have a question? Type it here or tap “Contact a Pro” and we’ll help you right away.


🔹 After-Hours Message
If users contact outside business hours:
Thanks for reaching out! Our team is currently offline, but we’ll get back to you ASAP during business hours.

You can leave us a message here or call/text **661-400-6221**. We’ll follow up soon!


🔹 End of Conversation / Thank You
Thanks for visiting ProFusion General Contractor! We appreciate the opportunity to serve you in the DFW Metroplex. If you need anything else, just type “menu” to return to options


✅ ProFusion General Contractor – Frequently Asked Questions (FAQs)

🔨 General Contractor FAQs
Q1: Are you licensed and insured?
 Ans: Yes! ProFusion is fully licensed and insured to operate in the DFW Metroplex. We meet or exceed all state and local requirements to ensure your project is safe and protected.
Q2: Do you offer free estimates?
 Ans: Absolutely. We offer 100% free, no-obligation estimates for all services — including roofing, remodeling, restoration, solar, and outdoor work.
Q3: What areas do you serve?
 Ans: We proudly serve the entire Dallas–Fort Worth (DFW) Metroplex and surrounding communities.
Q4: Do you offer financing options?
 Ans   : Yes! We have flexible financing options available for qualifying roofing, solar, and remodeling projects. Ask us for details during your estimate.
________________________________________
🏠 Roofing FAQs
Q5: What types of roofing do you install?
 Ans: We install asphalt shingles, metal roofing, flat roofs, and more — for both residential and commercial properties. We’ll help you choose the best material for your needs and budget.
Q6: Do you work with insurance claims for storm damage?
 Ans: Yes, we work directly with your insurance company to simplify the claims process after hail, wind, or storm damage.
Q7: How do I know if I need a roof repair or full replacement?
 Ans: A free inspection can determine that. Minor issues may only need repairs, while extensive damage or an aging roof may require a replacement. We’ll give you an honest assessment.
________________________________________
🔧 Restoration FAQs
Q8: What types of restoration services do you offer?
 A: We specialize in water damage, fire damage, storm damage, and mold remediation. We respond quickly to limit further damage and begin the cleanup and rebuild process.
Q9: Is emergency service available?
 A: No. However, we will try our best to respond in a timely manner.  Usually within 4 hours for emergencies.
Q10: How long does the restoration process take?
 A: It depends on the severity of the damage. We’ll give you a timeline after inspection, but our goal is always to restore your property quickly, safely, and correctly.
________________________________________
🔨 Remodeling FAQs
Q11: What remodeling services do you offer?
 Ans: We provide complete remodeling solutions including kitchens, bathrooms, flooring, room additions, and full-home renovations.
Q12: Can you help with design ideas?
 Ans: Absolutely! We can help you plan and design your space based on your style, goals, and budget — from concept to completion.
Q13: How long does a remodeling project usually take?
 Ans: Project timelines vary depending on size and scope, but we’ll provide a clear schedule during your consultation.
________________________________________
🧱 Hardscape & Outdoor FAQs
Q14: What types of hardscaping do you do?
 Ans: We build patios, walkways, retaining walls, fire pits, outdoor kitchens, and more — designed to enhance your home’s curb appeal and outdoor living.
Q15: Do you provide design services for outdoor projects?
 Ans: Yes! We offer custom 2D/3D design concepts so you can see your outdoor space before construction begins.
Q16: What materials do you use in hardscaping?
 Ans: We use high-quality materials such as pavers, flagstone, concrete, brick, and natural stone — based on your vision and budget.
________________________________________
☀️ Solar FAQs
Q17: Why should I go solar with ProFusion?
 Ans: We design custom solar systems using high-efficiency panels and quality installation. Going solar helps reduce your electric bill and increase your home’s value.
Q18: Do you offer solar financing or incentives?
 Ans: Yes, we offer financing and help you take advantage of available federal tax credits and local utility rebates where applicable.
Q19: How much can I save with solar?
 Ans: It depends on your energy use, system size, and utility rates. We offer a free solar consultation to calculate your potential savings and ROI.
Q20: Do you handle permits and inspections?
 Ans: Yes, we handle everything from start to finish — design, permitting, installation, inspection, and utility hookup.



`;

    this.init();
  }

  init() {
    this.addStyles();
    this.bindEvents();
    this.ensureMobileCompatibility();
    this.createFloatingButton();
    this.ensureProperInitialState();
  }

  ensureProperInitialState() {
    // Force hide chat widget on initialization
    const widget = document.getElementById('chatbot-widget');
    if (widget) {
      widget.classList.add('chatbot-hidden');
      widget.classList.remove('chatbot-visible');
    }
    
    // Add chatbot-ready class to body to show buttons
    document.body.classList.add('chatbot-ready');
    
    // Ensure original toggle button is visible initially (if exists)
    const originalToggle = document.getElementById('chatbot-toggle');
    if (originalToggle) {
      originalToggle.style.opacity = '1';
      originalToggle.style.visibility = 'visible';
      originalToggle.style.pointerEvents = 'auto';
    }
    
    // Ensure floating button is visible initially
    setTimeout(() => {
      const floatingBtn = document.getElementById('chatbot-toggle-floating');
      if (floatingBtn && !this.isOpen) {
        floatingBtn.classList.remove('chat-hidden');
        floatingBtn.style.display = 'flex';
        floatingBtn.style.visibility = 'visible';
        floatingBtn.style.opacity = '1';
        floatingBtn.style.pointerEvents = 'auto';
        floatingBtn.style.transform = 'scale(1)';
      }
    }, 100);
  }

  ensureMobileCompatibility() {
    // Add viewport meta if not present
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement('meta');
      viewport.name = 'viewport';
      viewport.content = 'width=device-width, initial-scale=1.0, user-scalable=yes';
      document.head.appendChild(viewport);
    }

    // Prevent zoom on input focus for mobile
    const style = document.createElement('style');
    style.textContent = `
      @media screen and (max-width: 768px) {
        #chatbot-input {
          font-size: 16px !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  createFloatingButton() {
    // Remove existing toggle if any
    const existingToggle = document.getElementById('chatbot-toggle');
    if (existingToggle) {
      existingToggle.remove();
    }

    // Create floating button that's always visible
    const floatingBtn = document.createElement('div');
    floatingBtn.id = 'chatbot-toggle-floating';
    floatingBtn.innerHTML = `
      <div class="chat-icon">
        <img src="chatbot.png" alt="Chat" />
        <div class="pulse-ring"></div>
      </div>
      <div class="chat-label">Need Help?</div>
    `;
    
    document.body.appendChild(floatingBtn);
  }

  bindEvents() {
    // Handle chatbot toggle - both existing and floating button
    document.addEventListener('click', (e) => {
      if (e.target.closest('#chatbot-toggle') || e.target.closest('#chatbot-toggle-floating')) {
        e.preventDefault();
        this.toggleChat();
      }
      if (e.target.closest('#chatbot-close')) {
        e.preventDefault();
        this.closeChat();
      }
      if (e.target.matches('#chatbot-send')) {
        e.preventDefault();
        this.handleSubmit();
      }
    });

    // Add touch events for better mobile interaction
    document.addEventListener('touchstart', (e) => {
      if (e.target.closest('#chatbot-toggle') || e.target.closest('#chatbot-toggle-floating')) {
        e.target.closest('.chat-icon, #chatbot-toggle').style.transform = 'scale(0.95)';
      }
    });

    document.addEventListener('touchend', (e) => {
      if (e.target.closest('#chatbot-toggle') || e.target.closest('#chatbot-toggle-floating')) {
        e.target.closest('.chat-icon, #chatbot-toggle').style.transform = 'scale(1)';
      }
    });

    // Handle enter key
    document.addEventListener('keypress', (e) => {
      if (e.target.id === 'chatbot-input' && e.key === 'Enter') {
        this.handleSubmit();
      }
    });

    // Handle scroll for floating button visibility
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      const floatingBtn = document.getElementById('chatbot-toggle-floating');
      if (floatingBtn && !this.isOpen) {
        floatingBtn.style.opacity = '1';
        floatingBtn.style.transform = 'scale(1)';
        
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          if (!this.isOpen) {
            floatingBtn.style.opacity = '0.8';
          }
        }, 2000);
      }
    });
  }

  toggleChat() {
    const widget = document.getElementById('chatbot-widget');
    const toggle = document.getElementById('chatbot-toggle');
    const floatingBtn = document.getElementById('chatbot-toggle-floating');
    
    if (!widget) return;

    this.isOpen = !this.isOpen;
    
    if (this.isOpen) {
      widget.classList.remove('chatbot-hidden');
      widget.classList.add('chatbot-visible');
      
      // Completely hide all chat icons/buttons when interface is open
      if (toggle) {
        toggle.style.display = 'none';
        toggle.style.visibility = 'hidden';
        toggle.style.opacity = '0';
        toggle.style.pointerEvents = 'none';
      }
      if (floatingBtn) {
        floatingBtn.classList.add('chat-hidden');
        floatingBtn.style.display = 'none';
        floatingBtn.style.visibility = 'hidden';
        floatingBtn.style.opacity = '0';
        floatingBtn.style.pointerEvents = 'none';
        floatingBtn.style.transform = 'scale(0)';
      }
      
      // Add initial message if no messages exist
      const messagesContainer = document.getElementById('chatbot-messages');
      if (messagesContainer && messagesContainer.children.length <= 1) {
        this.addMessage("Hi! I'm here to help with your construction needs. What can I assist you with today? 🏠", true);
      }
    } else {
      widget.classList.remove('chatbot-visible');
      widget.classList.add('chatbot-hidden');
      
      // Show chat icons/buttons when interface is closed
      if (toggle) {
        toggle.style.display = 'flex';
        toggle.style.visibility = 'visible';
        toggle.style.opacity = '1';
        toggle.style.pointerEvents = 'auto';
      }
      if (floatingBtn) {
        floatingBtn.classList.remove('chat-hidden');
        floatingBtn.style.display = 'flex';
        floatingBtn.style.visibility = 'visible';
        floatingBtn.style.opacity = '1';
        floatingBtn.style.pointerEvents = 'auto';
        floatingBtn.style.transform = 'scale(1)';
      }
    }
  }

  closeChat() {
    const widget = document.getElementById('chatbot-widget');
    const toggle = document.getElementById('chatbot-toggle');
    const floatingBtn = document.getElementById('chatbot-toggle-floating');
    
    if (!widget) return;

    this.isOpen = false;
    widget.classList.remove('chatbot-visible');
    widget.classList.add('chatbot-hidden');
    
    // Show chat icons/buttons when interface is closed
    if (toggle) {
      toggle.style.display = 'flex';
      toggle.style.visibility = 'visible';
      toggle.style.opacity = '1';
      toggle.style.pointerEvents = 'auto';
    }
    if (floatingBtn) {
      floatingBtn.classList.remove('chat-hidden');
      floatingBtn.style.display = 'flex';
      floatingBtn.style.visibility = 'visible';
      floatingBtn.style.opacity = '1';
      floatingBtn.style.pointerEvents = 'auto';
      floatingBtn.style.transform = 'scale(1)';
    }
  }

  addMessage(text, isBot = false) {
    const messagesContainer = document.getElementById('chatbot-messages');
    if (!messagesContainer) return;

    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isBot ? 'bot-message' : 'user-message'}`;
    
    if (isBot) {
      messageDiv.innerHTML = `
        <div class="message-avatar">
          <img src="chatbot.png" alt="Assistant" />
        </div>
        <div class="message-content">
          <p>${text}</p>
        </div>
      `;
    } else {
      messageDiv.innerHTML = `
        <div class="message-content">
          <p>${text}</p>
        </div>
      `;
    }

    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  showTyping() {
    const messagesContainer = document.getElementById('chatbot-messages');
    if (!messagesContainer) return;

    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing-indicator';
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = `
      <div class="message-avatar">
        <img src="chatbot.png" alt="Assistant" />
      </div>
      <div class="message-content">
        <div class="typing-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    `;
    
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  hideTyping() {
    const typing = document.getElementById('typing-indicator');
    if (typing) typing.remove();
  }

  async handleSubmit() {
    const input = document.getElementById('chatbot-input');
    const sendBtn = document.getElementById('chatbot-send');
    
    if (!input || !sendBtn) return;
    
    const message = input.value.trim();
    if (!message) return;

    // Add user message
    this.addMessage(message, false);
    input.value = '';
    
    // Disable input while processing
    input.disabled = true;
    sendBtn.disabled = true;
    
    // Show typing
    this.showTyping();

    try {
      const response = await this.getGeminiResponse(message);
      this.hideTyping();
      this.addMessage(response, true);
    } catch (error) {
      this.hideTyping();
      console.error('Chat Error:', error);
      this.addMessage('I apologize for the connection issue. Please call us directly at 661-400-6221 for immediate assistance! 📞', true);
    }

    // Re-enable input
    input.disabled = false;
    sendBtn.disabled = false;
    input.focus();
  }

  async getGeminiResponse(userMessage) {
    const requestBody = {
      contents: [{
        parts: [{
          text: `${this.systemPrompt}\n\nUser: ${userMessage}`
        }]
      }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 150
      }
    };

    const response = await fetch(`${this.apiUrl}?key=${this.apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    
    if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
      return data.candidates[0].content.parts[0].text;
    }
    
    throw new Error('Invalid response format');
  }

  addStyles() {
    // Check if styles already exist
    if (document.querySelector('#chatbot-styles-enhanced')) return;
    
    const styles = document.createElement('style');
    styles.id = 'chatbot-styles-enhanced';
    styles.textContent = `
      /* Enhanced Floating Chat Button - Always Visible */
      #chatbot-toggle-floating {
        position: fixed !important;
        bottom: 25px;
        right: 25px;
        z-index: 9999 !important;
        display: flex !important;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
        opacity: 1;
        visibility: visible !important;
        pointer-events: auto !important;
      }

      /* Force hide floating button when chat is open */
      #chatbot-toggle-floating.chat-hidden {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
        transform: scale(0) !important;
      }

      #chatbot-toggle-floating .chat-icon {
        position: relative;
        width: 65px;
        height: 65px;
        background: linear-gradient(135deg, #FFD700, #FFC107);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 20px rgba(255, 215, 0, 0.3);
        transition: all 0.3s ease;
      }

      #chatbot-toggle-floating:hover .chat-icon {
        transform: scale(1.1);
        box-shadow: 0 6px 25px rgba(255, 215, 0, 0.4);
      }

      #chatbot-toggle-floating .chat-icon img {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        object-fit: cover;
        pointer-events: none;
      }

      #chatbot-toggle-floating .pulse-ring {
        position: absolute;
        width: 100%;
        height: 100%;
        border: 2px solid #FFD700;
        border-radius: 50%;
        animation: pulse 2s infinite;
        opacity: 0.6;
      }

      @keyframes pulse {
        0% { transform: scale(1); opacity: 0.6; }
        50% { transform: scale(1.2); opacity: 0.3; }
        100% { transform: scale(1.4); opacity: 0; }
      }

      #chatbot-toggle-floating .chat-label {
        background: rgba(25, 33, 42, 0.9);
        color: white;
        padding: 6px 12px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
        white-space: nowrap;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      }

      /* Original toggle button enhancement */
      #chatbot-toggle {
        position: fixed !important;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, #FFD700, #FFC107);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 4px 20px rgba(255, 215, 0, 0.3);
        z-index: 9999 !important;
        display: flex !important;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        visibility: visible !important;
        opacity: 1 !important;
        pointer-events: auto !important;
      }

      #chatbot-toggle:hover, #chatbot-toggle:active {
        transform: scale(1.1);
        box-shadow: 0 6px 25px rgba(255, 215, 0, 0.4);
      }

      #chatbot-toggle img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        object-fit: cover;
        pointer-events: none;
      }

      /* Chatbot Widget - Mobile First Design */
      #chatbot-widget {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 380px;
        max-width: calc(100vw - 40px);
        max-height: 550px;
        background: white;
        border-radius: 20px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05);
        z-index: 9998;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        display: flex;
        flex-direction: column;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        overflow: hidden;
        backdrop-filter: blur(10px);
      }

      .chatbot-hidden {
        opacity: 0;
        transform: translateY(20px) scale(0.95);
        pointer-events: none;
      }

      .chatbot-visible {
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: all;
      }

      /* Chatbot Header */
      .chatbot-header {
        background: linear-gradient(135deg, #19212a 0%, #2c3e50 100%);
        color: white;
        padding: 20px;
        border-radius: 20px 20px 0 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        overflow: hidden;
      }

      .chatbot-header::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, transparent 30%, rgba(255,215,0,0.1) 50%, transparent 70%);
        pointer-events: none;
      }

      .chatbot-info {
        display: flex;
        align-items: center;
        gap: 12px;
        position: relative;
        z-index: 1;
      }

      .chatbot-avatar {
        width: 42px;
        height: 42px;
        border: 2px solid rgba(255, 215, 0, 0.3);
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      }

      .chatbot-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .chatbot-info h3 {
        margin: 0;
        font-size: 17px;
        font-weight: 600;
        color: white;
      }

      .chatbot-status {
        font-size: 12px;
        opacity: 0.9;
        color: #FFD700;
        margin-top: 2px;
        font-weight: 500;
      }

      #chatbot-close {
        background: rgba(255,255,255,0.1);
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        backdrop-filter: blur(10px);
        position: relative;
        z-index: 1;
      }

      #chatbot-close:hover {
        background: rgba(255,255,255,0.2);
        transform: scale(1.05);
      }

      /* Messages Area - Improved Mobile Scrolling */
      .chatbot-messages {
        flex: 1;
        padding: 20px;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        max-height: 350px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        scroll-behavior: smooth;
        background: linear-gradient(to bottom, #fafbfc 0%, #f8f9fa 100%);
      }

      .chatbot-messages::-webkit-scrollbar {
        width: 4px;
      }

      .chatbot-messages::-webkit-scrollbar-track {
        background: transparent;
      }

      .chatbot-messages::-webkit-scrollbar-thumb {
        background: rgba(0,0,0,0.1);
        border-radius: 2px;
      }

      .chatbot-messages::-webkit-scrollbar-thumb:hover {
        background: rgba(0,0,0,0.2);
      }

      .message {
        display: flex;
        gap: 12px;
        align-items: flex-start;
        animation: messageSlide 0.3s ease-out;
      }

      @keyframes messageSlide {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .user-message {
        flex-direction: row-reverse;
        align-self: flex-end;
      }

      .bot-message {
        align-self: flex-start;
      }

      .message-avatar {
        width: 32px;
        height: 32px;
        flex-shrink: 0;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }

      .message-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .message-content {
        max-width: 75%;
        background: white;
        padding: 12px 16px;
        border-radius: 18px;
        color: #333;
        box-shadow: 0 2px 12px rgba(0,0,0,0.08);
        border: 1px solid rgba(0,0,0,0.05);
        position: relative;
      }

      .user-message .message-content {
        background: linear-gradient(135deg, #19212a 0%, #2c3e50 100%);
        color: white;
        border: none;
        box-shadow: 0 2px 12px rgba(25, 33, 42, 0.3);
      }

      .bot-message .message-content::before {
        content: '';
        position: absolute;
        left: -6px;
        top: 12px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 6px 6px 0;
        border-color: transparent white transparent transparent;
      }

      .user-message .message-content::before {
        content: '';
        position: absolute;
        right: -6px;
        top: 12px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 6px 6px;
        border-color: transparent transparent #19212a transparent;
      }

      .message-content p {
        margin: 0;
        font-size: 14px;
        line-height: 1.5;
        font-weight: 400;
      }

      /* Typing Indicator */
      .typing-dots {
        display: flex;
        gap: 4px;
        padding: 5px 0;
      }

      .typing-dots span {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #ccc;
        animation: typing 1.4s infinite ease-in-out;
      }

      .typing-dots span:nth-child(1) { animation-delay: -0.32s; }
      .typing-dots span:nth-child(2) { animation-delay: -0.16s; }

      @keyframes typing {
        0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
        40% { transform: scale(1); opacity: 1; }
      }

      /* Input Area */
      .chatbot-input-area {
        padding: 20px;
        border-top: 1px solid rgba(0,0,0,0.08);
        display: flex;
        gap: 12px;
        align-items: center;
        background: white;
        border-radius: 0 0 20px 20px;
      }

      #chatbot-input {
        flex: 1;
        padding: 12px 18px;
        border: 2px solid #f0f0f0;
        border-radius: 25px;
        outline: none;
        font-size: 14px;
        font-family: inherit;
        background: #fafbfc;
        transition: all 0.2s ease;
        color: #333;
      }

      #chatbot-input:focus {
        border-color: #19212a;
        background: white;
        box-shadow: 0 0 0 3px rgba(25, 33, 42, 0.1);
      }

      #chatbot-input::placeholder {
        color: #999;
        font-weight: 400;
      }

      #chatbot-send {
        background: linear-gradient(135deg, #FFD700 0%, #FFC107 100%);
        border: none;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        cursor: pointer;
        color: #19212a;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        box-shadow: 0 2px 12px rgba(255, 215, 0, 0.3);
        font-size: 16px;
        font-weight: 600;
      }

      #chatbot-send:hover {
        background: linear-gradient(135deg, #FFC107 0%, #FFB300 100%);
        transform: scale(1.05);
        box-shadow: 0 4px 16px rgba(255, 215, 0, 0.4);
      }

      #chatbot-send:active {
        transform: scale(0.95);
      }

      #chatbot-send:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
        box-shadow: 0 2px 8px rgba(255, 215, 0, 0.2);
      }

      /* Mobile Responsive - Enhanced breakpoints */
      @media (max-width: 768px) {
        #chatbot-widget {
          width: calc(100vw - 16px);
          max-height: 70vh;
          right: 8px;
          bottom: 8px;
          border-radius: 16px;
        }

        #chatbot-toggle-floating {
          bottom: 20px;
          right: 20px;
          gap: 6px;
        }

        #chatbot-toggle-floating .chat-icon {
          width: 58px;
          height: 58px;
        }

        #chatbot-toggle-floating .chat-icon img {
          width: 32px;
          height: 32px;
        }

        #chatbot-toggle-floating .chat-label {
          font-size: 11px;
          padding: 5px 10px;
        }

        #chatbot-toggle {
          bottom: 15px;
          right: 15px;
          width: 58px;
          height: 58px;
        }

        #chatbot-toggle img {
          width: 32px;
          height: 32px;
        }

        .chatbot-header {
          padding: 16px 18px;
          border-radius: 16px 16px 0 0;
        }

        .chatbot-info h3 {
          font-size: 16px;
        }

        .chatbot-status {
          font-size: 11px;
        }

        .chatbot-avatar {
          width: 38px;
          height: 38px;
        }

        .chatbot-messages {
          padding: 16px;
          max-height: 300px;
          gap: 14px;
        }

        .message-content {
          max-width: 82%;
          font-size: 14px;
          padding: 10px 14px;
          border-radius: 16px;
        }

        .message-avatar {
          width: 30px;
          height: 30px;
        }

        .chatbot-input-area {
          padding: 16px;
        }

        #chatbot-input {
          padding: 12px 16px;
          font-size: 16px;
          border-radius: 22px;
        }

        #chatbot-send {
          width: 42px;
          height: 42px;
        }

        #chatbot-close {
          width: 32px;
          height: 32px;
          font-size: 18px;
        }
      }

      @media (max-width: 480px) {
        #chatbot-widget {
          width: calc(100vw - 12px);
          max-height: 75vh;
          right: 6px;
          bottom: 6px;
          border-radius: 14px;
        }

        #chatbot-toggle-floating {
          bottom: 16px;
          right: 16px;
          gap: 5px;
        }

        #chatbot-toggle-floating .chat-icon {
          width: 54px;
          height: 54px;
        }

        #chatbot-toggle-floating .chat-icon img {
          width: 28px;
          height: 28px;
        }

        #chatbot-toggle-floating .chat-label {
          font-size: 10px;
          padding: 4px 8px;
          border-radius: 16px;
        }

        #chatbot-toggle {
          bottom: 12px;
          right: 12px;
          width: 54px;
          height: 54px;
        }

        #chatbot-toggle img {
          width: 28px;
          height: 28px;
        }

        .chatbot-header {
          padding: 14px 16px;
          border-radius: 14px 14px 0 0;
        }

        .chatbot-info h3 {
          font-size: 15px;
        }

        .chatbot-status {
          font-size: 10px;
        }

        .chatbot-avatar {
          width: 36px;
          height: 36px;
        }

        .chatbot-messages {
          padding: 14px;
          max-height: 280px;
          gap: 12px;
        }

        .message-content {
          max-width: 85%;
          font-size: 13px;
          padding: 9px 12px;
          border-radius: 14px;
        }

        .message-avatar {
          width: 28px;
          height: 28px;
        }

        .chatbot-input-area {
          padding: 14px;
          gap: 10px;
        }

        #chatbot-input {
          padding: 10px 14px;
          font-size: 16px;
          border-radius: 20px;
        }

        #chatbot-send {
          width: 40px;
          height: 40px;
          font-size: 15px;
        }

        #chatbot-close {
          width: 30px;
          height: 30px;
          font-size: 16px;
        }

        /* Enhanced touch targets for mobile */
        .message-content {
          min-height: 36px;
          display: flex;
          align-items: center;
        }

        /* Better scrolling on mobile */
        .chatbot-messages {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }

        /* Prevent zoom on input focus */
        #chatbot-input {
          font-size: 16px !important;
        }
      }

        #chatbot-send {
          width: 34px;
          height: 34px;
        }
      }

      @media (max-width: 768px) and (orientation: landscape) {
        #chatbot-widget {
          max-height: 75vh;
        }
      }

      /* Force visibility on all devices */
      #chatbot-toggle, #chatbot-toggle-floating {
        display: flex !important;
        visibility: visible !important;
        opacity: 1 !important;
      }
    `;
    document.head.appendChild(styles);
  }
}

// Initialize chatbot when page loads
document.addEventListener('DOMContentLoaded', () => {
  new ProfusionChatbot();
});