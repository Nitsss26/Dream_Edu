import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs"
import ContactAddress from "@/components/ContactPage/ContactAddress"
import ContactForm from "@/components/ContactPage/ContactForm"
import { PageWrapper } from "../page-wrapper"

export const metadata = {
  title: 'Dream Education / Contact',
  description: 'Welcome To Dream Education.',
}
const Contact = () => {

  return (
    <>
      <PageWrapper>
        <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-slate-100"} />
      </PageWrapper>
      <PageWrapper>
        <ContactAddress />
      </PageWrapper>
    </>
  )
}

export default Contact

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
// import ContactAddress from "@/components/ContactPage/ContactAddress";
// import ContactForm from "@/components/ContactPage/ContactForm";
// import { PageWrapper } from "../page-wrapper";
// import { getContactById } from '@/services/contactService';

// // export const metadata = {
// //   title: 'Dream Education / Contact',
// //   description: 'All digital marketing services, seo, smo, PPC, web development.',
// // };

// const Contact = () => {
//   const [contact, setContact] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchContact = async () => {
//       const contactId = '60d0fe4f5311236168a109ca'; // Replace with the actual contact ID you want to display
//       try {
//         const data = await getContactById(contactId);
//         setContact(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchContact();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;
//   if (!contact) return <p>No contact found</p>;

//   return (
//     <>
//       <PageWrapper>
//         <ContactForm heading={`Get in <span class="highlight">Touch</span>`} color={"bg-slate-100"} />
//       </PageWrapper>
//       <PageWrapper>
//         <ContactAddress />
//       </PageWrapper>
//       <PageWrapper>
//         <div className="contact-detail">
//           <h1>{contact.title}</h1>
//           <p>{contact.description}</p>
//           <img src={contact.image} alt={contact.title} />
//           <p>{contact.field1}</p>
//           <p>{contact.field2}</p>
//           <p>{contact.field3}</p>
//           <p>{contact.field4}</p>
//           <p>{contact.field5}</p>
//           <p>{contact.field6}</p>
//           <p>{contact.field7}</p>
//           <p>{contact.field8}</p>
//           <p>{contact.field9}</p>
//         </div>
//       </PageWrapper>
//     </>
//   );
// };

// export default Contact;
