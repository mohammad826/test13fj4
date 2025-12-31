import React, { useState } from 'react';
import { siteConfig } from '../data/mockData';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', phone: '', subject: 'new-order', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        
        // Simulate Backend Call
        setTimeout(() => {
            console.log("Form Submitted to Backend:", formData);
            setStatus('success');
            setFormData({ name: '', phone: '', subject: 'new-order', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <div className="w-full animate-fade-up py-10">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan-400">تماس با ما</h1>
                <p className="text-cyan-100/60">پاسخگویی ۲۴ ساعته در ۷ روز هفته</p>
            </div>

            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start px-4">
                
                {/* Contact Info Card */}
                <div className="glass-panel p-10 rounded-[2.5rem] relative overflow-hidden h-full flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-white border-b border-white/10 pb-4">اطلاعات دسترسی</h3>
                        
                        <div className="space-y-8">
                            <div className="flex items-start gap-4 group">
                                <div className="p-4 bg-cyan-900/40 rounded-2xl text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-2 text-lg">آدرس دفتر مرکزی</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{siteConfig.contact.address}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="p-4 bg-cyan-900/40 rounded-2xl text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-2 text-lg">تلفن‌های تماس</h4>
                                    <p className="text-gray-400 text-sm font-mono dir-ltr">{siteConfig.contact.phone1}</p>
                                    <p className="text-gray-400 text-sm font-mono dir-ltr">{siteConfig.contact.phone2}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="p-4 bg-cyan-900/40 rounded-2xl text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-2 text-lg">پست الکترونیک</h4>
                                    <p className="text-gray-400 text-sm font-mono">{siteConfig.contact.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-12 p-6 rounded-2xl bg-cyan-950/30 border border-cyan-500/10 text-center">
                        <p className="text-sm text-cyan-300">ساعات کاری: شنبه تا چهارشنبه ۸ الی ۱۸ | پنجشنبه ۸ الی ۱۴</p>
                    </div>
                </div>

                {/* Form Card */}
                <div className="glass-panel p-10 rounded-[2.5rem] border border-gold-400/20">
                    <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                        <span className="text-gold-400">✉️</span> ارسال پیام
                    </h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm text-cyan-200/70 mr-1">نام و نام خانوادگی</label>
                            <input 
                                required
                                type="text" 
                                value={formData.name}
                                onChange={e => setFormData({...formData, name: e.target.value})}
                                className="w-full bg-cyan-950/30 border border-cyan-500/20 rounded-xl p-4 focus:border-cyan-400 focus:bg-cyan-900/50 focus:outline-none focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all text-white placeholder-gray-600" 
                                placeholder="مثال: رضا علوی" 
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm text-cyan-200/70 mr-1">شماره تماس</label>
                                <input 
                                    required
                                    type="tel" 
                                    value={formData.phone}
                                    onChange={e => setFormData({...formData, phone: e.target.value})}
                                    className="w-full bg-cyan-950/30 border border-cyan-500/20 rounded-xl p-4 focus:border-cyan-400 focus:bg-cyan-900/50 focus:outline-none focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all text-white placeholder-gray-600" 
                                    placeholder="۰۹۱۲..." 
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-cyan-200/70 mr-1">موضوع پیام</label>
                                <select 
                                    value={formData.subject}
                                    onChange={e => setFormData({...formData, subject: e.target.value})}
                                    className="w-full bg-cyan-950/30 border border-cyan-500/20 rounded-xl p-4 focus:border-cyan-400 focus:bg-cyan-900/50 focus:outline-none focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all text-white"
                                >
                                    <option value="new-order">ثبت سفارش جدید</option>
                                    <option value="tracking">پیگیری سفارش</option>
                                    <option value="consultation">مشاوره رایگان</option>
                                    <option value="other">سایر موارد</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-cyan-200/70 mr-1">متن پیام</label>
                            <textarea 
                                required
                                value={formData.message}
                                onChange={e => setFormData({...formData, message: e.target.value})}
                                className="w-full bg-cyan-950/30 border border-cyan-500/20 rounded-xl p-4 h-40 focus:border-cyan-400 focus:bg-cyan-900/50 focus:outline-none focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all text-white resize-none placeholder-gray-600" 
                                placeholder="توضیحات تکمیلی..."
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            disabled={status === 'sending'}
                            className={`
                                w-full py-4 rounded-xl font-bold text-black text-lg shadow-lg transition-all relative overflow-hidden group
                                ${status === 'success' ? 'bg-green-500' : 'bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500'}
                            `}
                        >
                            <span className="relative z-10 flex justify-center items-center gap-2">
                                {status === 'sending' ? 'در حال ارسال...' : status === 'success' ? 'پیام ارسال شد ✓' : 'ارسال درخواست'}
                            </span>
                            {status === 'idle' && <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>}
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};