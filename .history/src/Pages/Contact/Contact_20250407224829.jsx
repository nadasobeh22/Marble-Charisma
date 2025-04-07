import React, { useState } from 'react';
import Layout from '../../Components/Layout/Layout';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('جاري الإرسال...')ل

    const formspreeEndpoint = 'https://formspree.io/f/xqapazdr'; // تأكد إن هذا الـ ID صحيح ومرتبط بإيميلك

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('فشل الإرسال، حاول مرة أخرى لاحقًا.');
      }
    } catch (error) {
      setStatus('حدث خطأ، تأكد من اتصالك بالإنترنت وحاول مجددًا.');
    }
  };

  return (
    <Layout>
      <main className="pt-24 container mx-auto px-4 sm:px-6 py-12 sm:py-16 bg-offwhite dark:bg-darkslate transition-colors duration-300">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-teal dark:text-teal text-center mb-10 sm:mb-12 font-poppins">
          اتصل بنا
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
          <div className="bg-offwhite dark:bg-darkslate p-4 sm:p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl sm:text-2xl font-bold text-teal dark:text-teal mb-4 sm:mb-6 font-poppins">معلومات التواصل</h2>
            <ul className="text-charcoal dark:text-lightgray space-y-3 sm:space-y-4 text-sm sm:text-base">
              <li>البريد الإلكتروني: <a href="mailto:info@marbleluxe.com" className="hover:text-gold">info@marbleluxe.com</a></li>
              <li>الهاتف: <a href="tel:00963967428420" className="hover:text-gold">00963967428420</a></li>
              <li>العنوان: اللاذقية - أوتستراد الثورة</li>
            </ul>
          </div>
          <div className="bg-offwhite dark:bg-darkslate p-4 sm:p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl sm:text-2xl font-bold text-teal dark:text-teal mb-4 sm:mb-6 font-poppins">راسلنا</h2>
            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="الاسم"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 sm:p-4 border rounded-lg dark:bg-darkslate dark:text-lightgray focus:ring-2 focus:ring-teal"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="البريد الإلكتروني"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 sm:p-4 border rounded-lg dark:bg-darkslate dark:text-lightgray focus:ring-2 focus:ring-teal"
                required
              />
              <textarea
                name="message"
                placeholder="رسالتك"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 sm:p-4 border rounded-lg h-24 sm:h-32 dark:bg-darkslate dark:text-lightgray focus:ring-2 focus:ring-teal"
                required
              />
              <button
                type="submit"
                className="w-full bg-teal text-white py-3 sm:py-4 rounded-lg hover:bg-gold hover:text-charcoal transition duration-300 font-poppins text-sm sm:text-base"
              >
                إرسال
              </button>
            </form>
            {status && (
              <p className={`text-center mt-4 ${status.includes('نجاح') ? 'text-teal' : 'text-red-500'}`}>
                {status}
              </p>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Contact;