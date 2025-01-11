import SectionLayout from '@/layouts/SectionLayout';

const ContactSection = () => {
  return (
    <SectionLayout id="contact" className="bg-zinc-900 text-white">
      {/* Title */}
      <h3 className="text-primary font-bold lg:text-base text-sm text-center tracking-widest">
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
    </SectionLayout>
  );
};

export default ContactSection;
