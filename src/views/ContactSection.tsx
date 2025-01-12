import SectionLayout from '@/layouts/SectionLayout';
import { useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import Alert from '@/components/Alert';
import { AnimatePresence, motion } from 'motion/react';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const ContactSection = () => {
  const [showMessage, setShowMessage] = useState<null | 'success' | 'error'>(
    null,
  );

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
      return <Alert message="Message sent successfully" status="success" />;
    } else if (showMessage === 'error') {
      return <Alert message="Error sending message" status="error" />;
    }
  };

  return (
    <SectionLayout id="contact" className="bg-zinc-900 text-white">
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
      <h3 className="text-primary font-bold lg:text-base text-xs text-center tracking-widest">
        CONTACT
      </h3>
      <h2 className="text-center lg:text-4xl text-2xl font-bold">
        i'd love to hear from you.
      </h2>
      {/* Avatar */}
      <div className="flex lg:flex-row flex-col justify-center items-center lg:mt-4 mb-5">
        <p className="lg:text-xl text-lg text-center font-serif text-zinc-300 max-w-lg leading-relaxed">
          Feel free to get in touch with me for collaboration, questions, or
          opportunities—I’m always open to connecting!
        </p>
      </div>

      <div className="max-w-2xl mx-auto mt-10">
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          {/* Name Input */}
          <div className="relative mt-2">
            <input
              type="text"
              id="name"
              placeholder="Name"
              {...register('name', {
                required: 'this field is required',
              })}
              className="block mt-1 w-full px-8 py-6 border-b bg-transparent border-b-zinc-600 focus:border-b-primary outline-none placeholder:text-zinc-600"
            />
            {errors.name && (
              <span className="absolute bottom-0 right-4 translate-y-1/2 px-6 py-1  text-white bg-primary text-xs uppercase">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email Input */}
          <div className="relative mt-2">
            <input
              type="email"
              id="email"
              placeholder="Email"
              {...register('email', {
                required: 'this field is required',
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'invalid email format',
                },
              })}
              className="block mt-1 w-full px-8 py-6 border-b bg-transparent border-b-zinc-600 focus:border-b-primary outline-none placeholder:text-zinc-600"
            />
            {errors.email && (
              <span className="absolute bottom-0 right-4 translate-y-1/2 px-6 py-1  text-white bg-primary text-xs uppercase">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Message Input */}
          <div className="relative mt-2">
            <textarea
              id="message"
              placeholder="Message"
              {...register('message', {
                required: 'this field is required',
              })}
              className="block w-full px-8 py-6 border-b bg-transparent border-b-zinc-600 focus:border-b-primary outline-none placeholder:text-zinc-600 resize-none"
              rows={4}
            ></textarea>
            {errors.message && (
              <span className="absolute bottom-0 right-4 translate-y-1/2 px-6 py-1  text-white bg-primary text-xs uppercase">
                {errors.message.message}
              </span>
            )}
          </div>

          {/* Submit Button */}

          <button
            type="submit"
            className="w-full font-bold text-center py-6 text-white bg-primary hover:bg-primary/80 transition-all duration-300 mt-16"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </SectionLayout>
  );
};

export default ContactSection;
