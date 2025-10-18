import SectionLayout from '@/layouts/SectionLayout';
import { useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import Alert from '@/components/Alert';
import { AnimatePresence, motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const ContactSection = () => {
  const { t } = useTranslation();
  const [showMessage, setShowMessage] = useState<null | 'success' | 'error'>(null);

  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const form = useRef<HTMLFormElement | null>(null);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async () => {
    if (!form.current) return;
    try {
      const response = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        { publicKey: PUBLIC_KEY },
      );
      if (response.status !== 200) {
        setShowMessage('error');
      }
      setShowMessage('success');
      reset();
    } catch (error) {
      console.error(error);
      setShowMessage('error');
    }
  };

  if (showMessage !== null) {
    setTimeout(() => {
      setShowMessage(null);
    }, 4000);
  }

  const alertMessage = () => {
    if (showMessage === 'success') {
      return <Alert message={t('contact.alert.success')} status="success" />;
    } else if (showMessage === 'error') {
      return <Alert message={t('contact.alert.error')} status="error" />;
    }
  };

  return (
    <SectionLayout id="contact" className="bg-neutral-900 text-white">
      {/* Alert */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {alertMessage()}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Title */}
      <h3 className="text-accent-500 font-bold lg:text-base text-xs text-center tracking-widest">
        {t('contact.title')}
      </h3>
      <h2 className="text-center lg:text-4xl text-2xl font-bold">
        {t('contact.subtitle')}
      </h2>

      {/* Description */}
      <div className="flex lg:flex-row flex-col justify-center items-center lg:mt-4 mb-5">
        <p className="lg:text-xl text-lg text-center  text-neutral-300 max-w-lg leading-relaxed">
          {t('contact.description')}
        </p>
      </div>

      <div className="max-w-2xl mx-auto mt-10">
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          {/* Name Input */}
          <div className="relative mt-2">
            <input
              type="text"
              id="name"
              placeholder={t('contact.form.name')}
              {...register('name', {
                required: t('contact.form.errors.required') as string,
              })}
              className="block mt-1 w-full px-8 py-6 border-b bg-transparent border-b-neutral-600 focus:border-b-accent-500 outline-hidden placeholder:text-neutral-600"
            />
            {errors.name && (
              <span className="absolute bottom-0 right-4 translate-y-1/2 px-6 py-1 text-white rounded bg-accent-500 text-xs uppercase">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email Input */}
          <div className="relative mt-2">
            <input
              type="email"
              id="email"
              placeholder={t('contact.form.email')}
              {...register('email', {
                required: t('contact.form.errors.required') as string,
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: t('contact.form.errors.invalidEmail') as string,
                },
              })}
              className="block mt-1 w-full px-8 py-6 border-b bg-transparent border-b-neutral-600 focus:border-b-accent-500 outline-hidden placeholder:text-neutral-600"
            />
            {errors.email && (
              <span className="absolute bottom-0 right-4 translate-y-1/2 px-6 py-1 text-white rounded bg-accent-500 text-xs uppercase">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Message Input */}
          <div className="relative mt-2">
            <textarea
              id="message"
              placeholder={t('contact.form.message')}
              {...register('message', {
                required: t('contact.form.errors.required') as string,
              })}
              className="block w-full px-8 py-6 border-b bg-transparent border-b-neutral-600 focus:border-b-accent-500 outline-hidden placeholder:text-neutral-600 resize-none"
              rows={4}
            ></textarea>
            {errors.message && (
              <span className="absolute bottom-0 right-4 translate-y-1/2 px-6 py-1 text-white rounded bg-accent-500 text-xs uppercase">
                {errors.message.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded text-xl cursor-pointer text-center py-6 text-white bg-accent-500 hover:bg-accent-500/90 transition-all duration-300 mt-16"
          >
            {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
          </button>
        </form>
      </div>
    </SectionLayout>
  );
};

export default ContactSection;
