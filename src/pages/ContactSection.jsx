import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { FiSend } from 'react-icons/fi';
// import { CONTACT_INFO, SOCIAL_LINKS } from '../../utils/data';
import { containerVariants, itemVariants } from '../utils/helper';
import { TextInput, SuccessModel } from '../components';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  // fancy scroll parallax
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const handleInputChange = (key, value) =>
    setFormData((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_4f3ibci',
        'template_9w8f5bb',
        formRef.current,
        '2HIYDXG-aYuMTy2fI'
      )
      .then(() => {
        setShowSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setShowSuccess(false), 3000);
      })
      .catch((err) => {
        alert('Failed to send email! 😥');
        console.error(err);
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="pt-24 pb-5 px-6 bg-gray-950 text-white relative overflow-hidden"
    >
      {/* decorative blobs */}
      <motion.div style={{ y }}>
        <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-50 bg-blue-500" />
        <div className="absolute bottom-40 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-50 bg-purple-500" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ---------- Section Header ---------- */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="text-sm uppercase tracking-widest mb-4 text-gray-500">
            Let's Connect
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-light mb-6">
            Get In <span className="text-blue-500 font-medium">Touch</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl max-w-2xl mx-auto text-gray-400">
            Ready to start your next project? Let's discuss how we can bring your ideas to life.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* -------- Contact Form -------- */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="p-8 rounded-2xl border space-y-6 bg-gray-800/50 border-gray-700 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-medium mb-4">Send me a message</h3>

            {/* two‑column grid for name & email */}
            <div className="grid md:grid-cols-2 gap-6">
              <TextInput
                name="user_name" // must match EmailJS template
                label="Your Name"
                value={formData.name}
                handleInputChange={(v) => handleInputChange('name', v)}
              />

              <TextInput
                name="user_email"
                label="Email Address"
                value={formData.email}
                handleInputChange={(v) => handleInputChange('email', v)}
              />
            </div>

            {/* full‑width textarea */}
            <TextInput
              name="message"
              label="Your Message"
              value={formData.message}
              handleInputChange={(v) => handleInputChange('message', v)}
              textarea
            />

            {/* submit button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 text-white py-4 rounded-xl text-sm uppercase tracking-wider font-medium transition-all duration-300 flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                  />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <FiSend size={18} />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>

      {/* success modal */}
      <SuccessModel
        showSuccess={showSuccess}
        setShowSuccess={setShowSuccess}
      />
    </section>
  );
};

export default ContactSection;