import React from 'react';
import Layout from '../../Components/Layout/Layout';

const About = () => {
  return (
    <Layout>
      <main className="pt-24 container mx-auto px-4 sm:px-6 py-12 sm:py-16 bg-gradient-to-b from-offwhite to-gray-50 dark:from-darkslate dark:to-gray-800 transition-colors duration-500">
        {/* العنوان الرئيسي مع تأثير ذهبي */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-teal bg-gradient-to-r from-teal to-gold bg-clip-text text-transparent text-center mb-10 sm:mb-12 font-poppins animate-fade-in">
          عن متجر الرخام
        </h1>

        {/* الفقرة التعريفية */}
        <p className="text-lg sm:text-xl text-charcoal dark:text-lightgray max-w-4xl mx-auto text-center leading-relaxed mb-12 sm:mb-16 font-cairo">
          نحن متجر متخصص في تقديم أفضل أنواع الرخام الطبيعي من جميع أنحاء العالم. نهدف إلى تحويل مساحاتك إلى تحف فنية تعكس الفخامة والجودة العالية، مع الالتزام بتقديم تجربة تسوق استثنائية تلبي تطلعاتكم.
        </p>

        {/* القسم الرئيسي بتقسيم الأعمدة */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* البطاقة الأولى: المهمة */}
          <div className="relative bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-transform transform hover:-translate-y-2 duration-300">
            {/* خط ذهبي تزييني في الأعلى */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal to-gold rounded-t-xl"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-teal dark:text-teal mb-4 font-poppins">
              مهمتنا
            </h2>
            <p className="text-charcoal dark:text-lightgray text-base sm:text-lg leading-relaxed font-cairo">
              توفير أجود أنواع الرخام مع خدمة عملاء استثنائية تضمن رضاكم التام، مع التركيز على الاستدامة والابتكار.
            </p>
          </div>

          {/* البطاقة الثانية: الرؤية */}
          <div className="relative bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-transform transform hover:-translate-y-2 duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal to-gold rounded-t-xl"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-teal dark:text-teal mb-4 font-poppins">
              رؤيتنا
            </h2>
            <p className="text-charcoal dark:text-lightgray text-base sm:text-lg leading-relaxed font-cairo">
              أن نكون الوجهة الأولى لعشاق الفخامة والتصميم الداخلي في المنطقة، مع تقديم جودة وإبداع لا مثيل لهما.
            </p>
          </div>

          {/* البطاقة الثالثة: القيم */}
          <div className="relative bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-transform transform hover:-translate-y-2 duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal to-gold rounded-t-xl"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-teal dark:text-teal mb-4 font-poppins">
              قيمنا
            </h2>
            <p className="text-charcoal dark:text-lightgray text-base sm:text-lg leading-relaxed font-cairo">
              الجودة، النزاهة، والتفاني في تقديم تجربة شراء لا مثيل لها لعملائنا الأعزاء.
            </p>
          </div>
        </div>

        {/* قسم التواصل */}
        <div className="mt-12 sm:mt-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-teal dark:text-teal mb-6 font-poppins">
            تواصل معنا
          </h2>
          <p className="text-charcoal dark:text-lightgray text-base sm:text-lg mb-6 font-cairo">
            هل لديك استفسار؟ تواصلوا معنا عبر الواتساب أو زوروا متجرنا لتجربة فريدة!
          </p>
          <a
            href="https://wa.me/00963967428420"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-teal to-gold text-white px-6 py-3 rounded-lg hover:from-gold hover:to-teal transition-colors duration-300 font-poppins font-semibold shadow-md hover:shadow-lg"
          >
            تواصل الآن
          </a>
        </div>
      </main>
    </Layout>
  );
};

// تأثير الظهور التدريجي
const animateFadeIn = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fadeIn 1s ease-out;
  }
`;

export default About;