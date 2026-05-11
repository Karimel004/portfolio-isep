import { Button } from "@heroui/react";

export default function Contact() {
  return (
    <section id="contact" className="w-full max-w-7xl mx-auto px-8 py-24 border-t border-gray-100 dark:border-gray-800">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
        Me <span className="text-blue-600 dark:text-blue-400">Contacter</span>
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
        
        {/* Email */}
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </div>
          <h4 className="font-bold text-lg mb-1">Email</h4>
          <a href="mailto:karim.elamrani@eleve.isep.fr" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
            karim.elamrani@eleve.isep.fr
          </a>
        </div>

        {/* Téléphone */}
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
          </div>
          <h4 className="font-bold text-lg mb-1">Téléphone</h4>
          <a href="tel:+33753029280" className="text-gray-600 dark:text-gray-400 hover:text-green-600 transition-colors">
            +33 7 53 02 92 80
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-700 rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </div>
          <h4 className="font-bold text-lg mb-1">LinkedIn</h4>
          <a href="https://www.linkedin.com/in/karim-el-amrani-6b6512320" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-blue-700 transition-colors">
            linkedin.com/in/karim-elamrani
          </a>
        </div>

      </div>
    </section>
  );
}