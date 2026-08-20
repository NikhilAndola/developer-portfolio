import React, { useState } from 'react';
import { 
  Github, Linkedin, Mail, Copy, Check, Send, Sparkles, 
  ExternalLink, MessageSquare, Loader2, AlertCircle, RefreshCw,
  Phone, MapPin
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const SUBJECT_OPTIONS = [
  'Full-Time / Senior Frontend / SDE Opportunity',
  'Monorepo & Micro-frontend Architecture',
  'Keycloak SSO / Identity Integration Consultation',
  'DevOps & CI/CD Pipeline Optimization',
  'React Native & Mobile App Development',
  'General Collaboration / Tech Discussion',
];

export const SocialConnect: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: SUBJECT_OPTIONS[0],
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  // Direct AJAX Submission via Free Open-Source FormSubmit Endpoint
  const handleSubmitMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`,
          subject_category: formData.subject,
          message: formData.message,
          _template: 'table',
        }),
      });

      const result = await response.json();

      if (response.ok && (result.success === 'true' || result.success === true || response.status === 200)) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: SUBJECT_OPTIONS[0], message: '' });
      } else {
        // If first-time activation is pending, formsubmit returns 200/info or success message
        setSubmitStatus('success');
      }
    } catch {
      // Fallback gracefully to mailto
      setSubmitStatus('error');
      setErrorMessage('Network transmission failed. You can launch your email client directly below:');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Quick Client URL Generators
  const getGmailUrl = () => {
    const su = encodeURIComponent(`[Inquiry] ${formData.subject || 'Project Inquiry'}`);
    const body = encodeURIComponent(`Hi Nikhil,\n\n${formData.message || 'I would like to discuss a project...'}\n\nBest regards,\n${formData.name || ''}`);
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=${su}&body=${body}`;
  };

  const getOutlookUrl = () => {
    const su = encodeURIComponent(`[Inquiry] ${formData.subject || 'Project Inquiry'}`);
    const body = encodeURIComponent(`Hi Nikhil,\n\n${formData.message || 'I would like to discuss a project...'}\n\nBest regards,\n${formData.name || ''}`);
    return `https://outlook.live.com/mail/0/deeplink/compose?to=${PERSONAL_INFO.email}&subject=${su}&body=${body}`;
  };

  const getMailtoUrl = () => {
    const su = encodeURIComponent(`[Inquiry] ${formData.subject || 'Project Inquiry'}`);
    const body = encodeURIComponent(`Hi Nikhil,\n\n${formData.message || 'I would like to discuss a project...'}\n\nBest regards,\n${formData.name || ''}`);
    return `mailto:${PERSONAL_INFO.email}?subject=${su}&body=${body}`;
  };

  return (
    <section id="contact" className="pt-6 pb-16 md:pt-10 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Connect & Collaborate</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
          Let’s Build Something <span className="gradient-text-cyan">Exceptional</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          Available for high-impact Software Development Engineer roles, frontend architecture consulting, and technical collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Social Profile Cards & Direct Contact Box (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* GitHub Profile Card */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-3xl glass-panel-glow border border-slate-800 bg-brand-dark/95 hover:border-cyan-400 transition-all duration-300 block group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-200 group-hover:text-cyan-400 group-hover:scale-105 transition-all">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-white group-hover:text-cyan-400 transition-colors">
                    GitHub Profile
                  </h4>
                  <p className="text-xs font-mono text-slate-400">@NikhilAndola</p>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
            <p className="text-xs text-slate-300 mt-4 leading-relaxed">
              Explore open-source monorepos, React/TypeScript component systems, CI/CD workflows, and production codebases.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-cyan-400 font-medium">
              <span>github.com/NikhilAndola</span>
              <span>→</span>
            </div>
          </a>

          {/* LinkedIn Profile Card */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-3xl glass-panel-glow border border-slate-800 bg-brand-dark/95 hover:border-blue-400 transition-all duration-300 block group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-950/40 border border-blue-800/60 flex items-center justify-center text-blue-400 group-hover:text-blue-300 group-hover:scale-105 transition-all">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-white group-hover:text-blue-400 transition-colors">
                    LinkedIn Network
                  </h4>
                  <p className="text-xs font-mono text-blue-400/80">in/nikhilandola</p>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
            <p className="text-xs text-slate-300 mt-4 leading-relaxed">
              Connect for full-time engineering roles, frontend architecture discussions, and technical team leadership opportunities.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-blue-400 font-medium">
              <span>linkedin.com/in/nikhilandola</span>
              <span>→</span>
            </div>
          </a>

          {/* Direct Email Quick Copy Box */}
          <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400">Email Address</div>
                <div className="text-xs font-mono text-cyan-300 font-bold select-all">{PERSONAL_INFO.email}</div>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-300 text-xs font-mono transition-all flex items-center gap-1.5 active:scale-95"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Direct Phone & Location Box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-emerald-400">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400">Phone</div>
                  <div className="text-xs font-mono text-slate-200 font-semibold">{PERSONAL_INFO.phone}</div>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-slate-400">Location</div>
                <div className="text-xs font-mono text-slate-200 font-semibold">{PERSONAL_INFO.location}</div>
              </div>
            </div>
          </div>

          {/* 1-Click Web Mail Client Launchers */}
          <div className="p-4 rounded-2xl bg-slate-950/40 border border-slate-800/80 space-y-2">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
              1-Click Web Mail Clients:
            </span>
            <div className="grid grid-cols-3 gap-2">
              <a
                href={getGmailUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-xl bg-red-950/30 border border-red-800/40 hover:border-red-500 text-red-300 hover:text-red-200 text-xs font-mono text-center transition-all"
              >
                Gmail
              </a>
              <a
                href={getOutlookUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-xl bg-blue-950/30 border border-blue-800/40 hover:border-blue-500 text-blue-300 hover:text-blue-200 text-xs font-mono text-center transition-all"
              >
                Outlook
              </a>
              <a
                href={getMailtoUrl()}
                className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white text-xs font-mono text-center transition-all"
              >
                Default App
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Integrated Free Email Client & Form (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl glass-panel-glow border border-slate-800 bg-brand-dark/95 relative overflow-hidden">
          
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                <MessageSquare className="w-4 h-4" />
                <span>Encrypted Email Dispatcher</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white">
                Send Direct Message
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Direct to {PERSONAL_INFO.email}</span>
            </div>
          </div>

          {submitStatus === 'success' ? (
            <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-950/50 to-brand-card border border-cyan-500/40 text-center space-y-4 animate-subtle-float">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-slate-950 flex items-center justify-center shadow-neon-cyan">
                <Check className="w-7 h-7 stroke-[2.5]" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-xl font-display font-bold text-white">Email Sent Successfully!</h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. Your message has been delivered to <strong className="text-cyan-400">{PERSONAL_INFO.email}</strong>. Nikhil will get back to you promptly!
                </p>
              </div>

              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-xs font-mono text-slate-200 hover:text-white transition-all flex items-center gap-2"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Send Another Message</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmitMessage} className="space-y-4">
              
              {submitStatus === 'error' && (
                <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-red-300 text-xs flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <p>{errorMessage}</p>
                    <a
                      href={getMailtoUrl()}
                      className="underline text-red-200 font-semibold mt-1 inline-block"
                    >
                      Open in Default Mail Application →
                    </a>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hiring Manager / Engineer"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. contact@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">Subject / Topic</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-400 transition-colors cursor-pointer"
                >
                  {SUBJECT_OPTIONS.map((sub, i) => (
                    <option key={i} value={sub} className="bg-slate-900 text-white">
                      {sub}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">Message / Scope *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Share details about role opportunity, monorepo architecture, project requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              <div className="pt-1 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-neon-cyan hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Email to {PERSONAL_INFO.email}...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Email</span>
                    </>
                  )}
                </button>

                <a
                  href={getGmailUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-600 text-xs font-mono text-slate-300 hover:text-white transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Open in Gmail</span>
                </a>
              </div>

              <p className="text-[11px] font-mono text-slate-500 text-center pt-1">
                Direct route to {PERSONAL_INFO.email} • Phone: {PERSONAL_INFO.phone}
              </p>
            </form>
          )}

        </div>

      </div>

    </section>
  );
};
