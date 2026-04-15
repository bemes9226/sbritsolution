import React, { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! 👋 Welcome to SBRIT Solution. I'm here to help you with information about our courses, training programs, and enrollment. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [hasUnreadMessages, setHasUnreadMessages] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  // EmailJS Configuration
  // IMPORTANT: You need to create a new EmailJS template for chat notifications
  // Go to https://dashboard.emailjs.com/admin/template and create a new template with these variables:
  // {{to_email}}, {{from_name}}, {{subject}}, {{message}}, {{page_url}}, {{timestamp}}
  const EMAILJS_SERVICE_ID = "service_slrxim8"; // Your EmailJS service ID
  const EMAILJS_TEMPLATE_ID = "template_q9fc9jr"; // Update this with your new chat template ID
  const EMAILJS_USER_ID = "mFRIsSwCYxzv3SMOW"; // Your EmailJS user ID
  const NOTIFICATION_EMAIL = "bemes0112@gmail.com"; // Email to receive notifications

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Show notification after 3 seconds if chat is closed
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setShowNotification(true);
        setHasUnreadMessages(true);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setHasUnreadMessages(false);
      setShowNotification(false);
    }
  }, [isOpen]);

  const quickReplies = [
    "Course Information",
    "Training Schedule",
    "Placement Assistance",
    "Course Fees",
    "Contact Details"
  ];

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  // Function to send email notification
  const sendEmailNotification = async (userMessage: string) => {
    try {
      setIsSendingEmail(true);
      
      // Get current page URL and user info
      const currentPage = window.location.href;
      const pageTitle = document.title;
      const timestamp = new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'long'
      });

      // Format email content
      const emailContent = `
New chat message received from your website:

Message: ${userMessage}

Page: ${pageTitle}
URL: ${currentPage}
Time: ${timestamp}

---
This is an automated notification from SBRIT Solution Chatbot.
      `.trim();

      // Prepare email template parameters
      // Note: These parameters should match your EmailJS template variables
      // The code includes multiple common variable formats to work with different templates
      const templateParams: { [key: string]: string } = {
        // Standard EmailJS variables
        to_email: NOTIFICATION_EMAIL,
        to_name: 'SBRIT Solution',
        from_name: 'SBRIT Solution Chatbot',
        reply_to: NOTIFICATION_EMAIL,
        subject: `New Chat Message - ${new Date().toLocaleDateString('en-IN')}`,
        message: emailContent, // Full formatted message
        // Additional variables for flexibility
        user_message: userMessage, // Original user message
        page_url: currentPage,
        page_title: pageTitle,
        timestamp: timestamp,
        // Alternative variable names (for different template structures)
        name: 'Website Visitor',
        email: NOTIFICATION_EMAIL,
        course: 'Chat Inquiry'
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );

      console.log('✅ Email notification sent successfully to', NOTIFICATION_EMAIL);
    } catch (error) {
      console.error('❌ Failed to send email notification:', error);
      // Silently fail - don't interrupt user experience
      // You can add a retry mechanism here if needed
    } finally {
      setIsSendingEmail(false);
    }
  };

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Send email notification
    sendEmailNotification(messageText);

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse = getBotResponse(messageText);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      
      // Show notification if chat is closed
      if (!isOpen) {
        setHasUnreadMessages(true);
        setShowNotification(true);
      }
    }, 1000);
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('course') || lowerMessage.includes('training')) {
      return "We offer comprehensive training in Angular, React, Java, Python, Full Stack Development, AWS, Data Science, and more! 🎓 Which course are you interested in? You can visit our courses page or I can provide more details about any specific course.";
    }

    if (lowerMessage.includes('schedule') || lowerMessage.includes('timing') || lowerMessage.includes('batch')) {
      return "Our training programs are flexible! We offer:\n• Live Online Training\n• Classroom Training\n• Weekend Batches\n• Weekday Batches\n\nNew batches start every month. Would you like to know about the next batch schedule? 📅";
    }

    if (lowerMessage.includes('placement') || lowerMessage.includes('job') || lowerMessage.includes('career')) {
      return "Yes! We provide 100% placement assistance to all our students! 🎯 This includes:\n• Resume Building\n• Interview Preparation\n• Mock Interviews\n• Job Placement Support\n• Career Guidance\n\nOur placement team has strong connections with top IT companies. Would you like more details?";
    }

    if (lowerMessage.includes('fee') || lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return "Our course fees are competitive and we offer flexible payment options! 💰\n• Course fees range from ₹2,000 to ₹20,000\n• EMI options available\n• Special discounts for early enrollment\n• Group booking discounts\n\nWhich course are you interested in? I can provide specific pricing details.";
    }

    if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email') || lowerMessage.includes('address')) {
      return "You can reach us through:\n📞 Phone: +91-XXXXXXXXXX\n📧 Email: info@sbritsolution.in\n🌐 Website: www.sbritsolution.in\n📍 Location: Hyderabad, Telangana\n\nWe're available Monday to Saturday, 9 AM to 7 PM. Would you like to schedule a call or visit?";
    }

    if (lowerMessage.includes('angular')) {
      return "Great choice! Our Angular Training includes:\n✅ 4-month comprehensive program\n✅ TypeScript, Components, Routing\n✅ Hands-on projects\n✅ 100% Placement Assistance\n✅ Industry Certification\n\nFee: ₹16,999 (EMI available)\nWould you like to enroll or need more details?";
    }

    if (lowerMessage.includes('java') || lowerMessage.includes('python') || lowerMessage.includes('react')) {
      return `Excellent! We have comprehensive ${userMessage} training programs with:\n✅ Industry experts\n✅ Hands-on projects\n✅ Placement assistance\n✅ Certification\n\nWould you like specific details about ${userMessage} course fees, schedule, or curriculum?`;
    }

    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! 👋 I'm here to help you with:\n• Course Information\n• Training Schedules\n• Placement Assistance\n• Course Fees\n• Enrollment Process\n\nWhat would you like to know?";
    }

    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return "You're welcome! 😊 If you have any more questions about our courses or training programs, feel free to ask. You can also visit our website or contact us directly. Have a great day!";
    }

    // Default response
    return "Thank you for your message! 💬 I can help you with:\n• Course information and details\n• Training schedules and batches\n• Placement assistance\n• Course fees and payment options\n• Enrollment process\n• Contact information\n\nCould you please be more specific about what you'd like to know? Or you can visit our website at www.sbritsolution.in for detailed information.";
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setHasUnreadMessages(false);
      setShowNotification(false);
    }
  };

  return (
    <>
      {/* Chat Button with Notification Badge */}
      <div
        className="fixed bottom-6 right-6 md:bottom-6 md:right-6 bottom-4 right-4"
        onClick={toggleChat}
        style={{ cursor: 'pointer', zIndex: 1001 }}
      >
        <div className="relative">
          {/* Notification Badge */}
          {hasUnreadMessages && showNotification && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse shadow-lg">
              <span className="text-xs">!</span>
            </div>
          )}
          
          {/* Notification Message Bubble */}
          {hasUnreadMessages && showNotification && !isOpen && (
            <div className="absolute bottom-full right-0 mb-2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg border border-gray-200 w-64 animate-slide-up">
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">S</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">New Message!</p>
                  <p className="text-xs text-gray-600 mt-1">Click to view your message</p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowNotification(false);
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white border-r border-b border-gray-200"></div>
            </div>
          )}
          
          {/* Chat Button */}
          <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div
          ref={chatContainerRef}
          className="fixed bg-white rounded-lg shadow-2xl flex flex-col border border-gray-200 animate-slide-up md:bottom-24 md:right-6 md:w-96 md:h-[600px] bottom-20 right-4 left-4 h-[calc(100vh-6rem)] max-w-md md:max-w-none"
          style={{
            animation: 'slideUp 0.3s ease-out',
            zIndex: 1001
          }}
        >
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-red-500 font-bold text-lg">S</span>
              </div>
              <div>
                <h3 className="font-semibold">SBRIT Solution</h3>
                <p className="text-xs opacity-90">Online Support</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
                      : 'bg-white text-gray-800 shadow-md'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === 'user'
                        ? 'text-white opacity-70'
                        : 'text-gray-500'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 bg-white border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-2">Quick replies:</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-200 rounded-b-lg">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              We typically reply within a few minutes
            </p>
          </div>
        </div>
      )}

      {/* Add CSS animation */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Chatbot;

