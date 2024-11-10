import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Faqs.css';

const Faqs = () => {
  return (
    <div>
      <h2 className='faq-heading'>Frequently Asked Questions</h2>
      <Accordion className='faq-acc mt-5' flush>
        <Accordion.Item eventKey='0'>
          <Accordion.Header className='faq-header'>
            Can I join Graphene InfoTech as a beginner?
          </Accordion.Header>
          <Accordion.Body className='text-start'>
            Absolutely! Graphene Infotech offers programs suited for both
            beginners and advanced learners. Our curriculum is structured to
            help you build a strong foundation before moving on to more complex
            concepts.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1' className='mt-3'>
          <Accordion.Header className='faq-header'>
            Who is eligible to join Graphene InfoTech Training Program?
          </Accordion.Header>
          <Accordion.Body className='text-start'>
            Graphene Infotech courses are open to anyone interested in
            upskilling or starting a career in the digital domain. Whether
            you're a student, a working professional, or a freelancer, our
            programs are designed to meet your needs.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2' className='mt-3'>
          <Accordion.Header className='faq-header'>
            Is it necessary to have an engineering background?
          </Accordion.Header>
          <Accordion.Body className='text-start'>
            No, an engineering background is not necessary. Our courses are
            designed for learners from various educational backgrounds. Whether
            you’re new to tech or looking to upskill, we provide the
            foundational knowledge and support needed to help you succeed in the
            field.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='3' className='mt-3'>
          <Accordion.Header className='faq-header'>
            Can I get help with mock interviews?
          </Accordion.Header>
          <Accordion.Body className='text-start'>
            Yes, we offer dedicated support for mock interviews. Our mentors and
            career coaches will conduct practice interviews to help you prepare
            for real-world situations and enhance your performance.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='4' className='mt-3'>
          <Accordion.Header className='faq-header'>
            Does Graphene InfoTech provide certificates?
          </Accordion.Header>
          <Accordion.Body className='text-start'>
            Upon successfully completing a course at Graphene Infotech, you’ll
            receive a certificate that verifies your newly gained skills. This
            certificate is a valuable asset to enhance your resume and LinkedIn
            profile, highlighting your expertise.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Faqs;
