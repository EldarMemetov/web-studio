// 'use client';
// import React, { useState, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import styles from './FeedbackForm.module.scss';
// import Container from '@/shared/container/Container';
// import { sendFeedback } from '../../services/api';
// import Image from 'next/image';
// import Button from '@/shared/components/button/Button';
// import FadeError from '@/shared/components/FadeError/FadeError';
// import Modal from '../../shared/Modal/Modal';

// export default function FeedbackForm() {
//   const { t } = useTranslation('feedbackForm');
//   const [submissionStatus, setSubmissionStatus] = useState(null);
//   const [isHovered, setIsHovered] = useState(false);
//   const [modalVisible, setModalVisible] = useState(false);

//   const initialValues = {
//     name: '',
//     email: '',
//     message: '',
//     agree: false,
//   };

//   const handleSubmit = async (values, { resetForm }) => {
//     setSubmissionStatus(null);

//     try {
//       const response = await sendFeedback(values);

//       let message = response.message || t('successMessage');

//       message = message.replace(/✅.*$/, '');

//       setSubmissionStatus({
//         type: 'success',
//         message: message,
//       });
//       resetForm();
//     } catch (error) {
//       setSubmissionStatus({
//         type: 'error',
//         message: error.message || t('errorMessage'),
//       });
//     }
//     setModalVisible(true);
//   };

//   const validationSchema = Yup.object({
//     name: Yup.string()
//       .min(3, t('validation.name.min'))
//       .required(t('validation.name.required')),
//     email: Yup.string()
//       .email(t('validation.email.invalid'))
//       .required(t('validation.email.required')),
//     message: Yup.string()
//       .min(10, t('validation.message.min'))
//       .required(t('validation.message.required')),
//     agree: Yup.boolean()
//       .oneOf([true], t('validation.agree'))
//       .required(t('validation.agree')),
//   });

//   useEffect(() => {
//     let timer;
//     if (modalVisible) {
//       timer = setTimeout(() => {
//         setModalVisible(false);
//       }, 225000);
//     }
//     return () => clearTimeout(timer);
//   }, [modalVisible]);

//   return (
//     <Container>
//       <section>
//         <h2 className={styles.title}>
//           {t('title')} <span className={styles.andTitle}>{t('andTitle')}</span>
//         </h2>
//         <div className={styles.bigContainer}>
//           <div className={styles.containerForm}>
//             <h3 className={styles.description}>{t('description')}</h3>
//             <p className={styles.subtitle}>{t('subtitle')}</p>
//             <div className={styles.containerImg}>
//               <Image
//                 src="/image/feedback.png"
//                 alt="feedback"
//                 width={568}
//                 height={390}
//                 className={`${styles.feedback} ${isHovered ? styles.imageHover : ''}`}
//               />
//               <Formik
//                 initialValues={initialValues}
//                 onSubmit={handleSubmit}
//                 validationSchema={validationSchema}
//               >
//                 <Form className={styles.form}>
//                   <div className={styles.fieldContainer}>
//                     <Field
//                       className={styles.input}
//                       type="text"
//                       name="name"
//                       id="name"
//                       placeholder={t('fields.name')}
//                     />
//                     <ErrorMessage name="name">
//                       {(msg) => (
//                         <FadeError message={msg} className={styles.error} />
//                       )}
//                     </ErrorMessage>
//                   </div>
//                   <div className={styles.fieldContainer}>
//                     <Field
//                       className={styles.input}
//                       type="email"
//                       name="email"
//                       id="email"
//                       placeholder={t('fields.email')}
//                     />
//                     <ErrorMessage name="email">
//                       {(msg) => (
//                         <FadeError message={msg} className={styles.error} />
//                       )}
//                     </ErrorMessage>
//                   </div>
//                   <div className={styles.fieldContainer}>
//                     <Field
//                       className={styles.inputText}
//                       as="textarea"
//                       name="message"
//                       id="message"
//                       placeholder={t('fields.message')}
//                     />
//                     <ErrorMessage name="message">
//                       {(msg) => (
//                         <FadeError message={msg} className={styles.error} />
//                       )}
//                     </ErrorMessage>
//                   </div>
//                   <div className={styles.checkboxContainer}>
//                     <Field
//                       type="checkbox"
//                       name="agree"
//                       id="agree"
//                       className={styles.checkbox}
//                     />
//                     <label htmlFor="agree" className={styles.checkboxLabel}>
//                       {t('fields.agree')}
//                     </label>
//                   </div>
//                   <ErrorMessage name="agree">
//                     {(msg) => (
//                       <FadeError message={msg} className={styles.error} />
//                     )}
//                   </ErrorMessage>
//                   <div className={styles.buttonWrapper}>
//                     <Button
//                       type="submit"
//                       variant="variant3"
//                       onMouseEnter={() => setIsHovered(true)}
//                       onMouseLeave={() => setIsHovered(false)}
//                     >
//                       {t('submitButton')}
//                     </Button>
//                   </div>
//                 </Form>
//               </Formik>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Modal show={modalVisible} onClose={() => setModalVisible(false)}>
//         <h3 className={styles.status}>
//           {submissionStatus?.type === 'success'
//             ? t('status.success')
//             : t('status.error')}
//         </h3>
//         <p>{submissionStatus?.message}</p>
//       </Modal>
//     </Container>
//   );
// }
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './FeedbackForm.module.scss';
import Container from '@/shared/container/Container';
import { sendFeedback } from '../../services/api';
import Image from 'next/image';
import Button from '@/shared/components/button/Button';
import FadeError from '@/shared/components/FadeError/FadeError';
import Modal from '../../shared/Modal/Modal';
import { gsap } from 'gsap';

export default function FeedbackForm() {
  const { t } = useTranslation('feedbackForm');
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const rocketRef = useRef(null);
  const smokeRef = useRef(null);

  const initialValues = {
    name: '',
    email: '',
    message: '',
    agree: false,
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, t('validation.name.min'))
      .required(t('validation.name.required')),
    email: Yup.string()
      .email(t('validation.email.invalid'))
      .required(t('validation.email.required')),
    message: Yup.string()
      .min(10, t('validation.message.min'))
      .required(t('validation.message.required')),
    agree: Yup.boolean()
      .oneOf([true], t('validation.agree'))
      .required(t('validation.agree')),
  });

  const handleHoverAnimation = () => {
    if (rocketRef.current && smokeRef.current) {
      const tl = gsap.timeline();

      tl.to(rocketRef.current, {
        x: '+=5',
        duration: 0.05,
        repeat: 5,
        yoyo: true,
        ease: 'power1.inOut',
      });

      tl.to(rocketRef.current, {
        y: -20,
        duration: 0.3,
        ease: 'power1.out',
      }).to(rocketRef.current, {
        y: 0,
        duration: 0.3,
        ease: 'power1.inOut',
      });

      tl.to(
        smokeRef.current,
        {
          opacity: 0.3,
          duration: 0.2,
          ease: 'power1.inOut',
        },
        0
      ).to(
        smokeRef.current,
        {
          opacity: 0,
          duration: 0.4,
          ease: 'power1.out',
        },
        '+=0.2'
      );
    }
  };

  useEffect(() => {
    if (isHovered) {
      handleHoverAnimation();
    }
  }, [isHovered]);

  const handleAnimation = (message, resetForm) => {
    const tl = gsap.timeline();

    tl.to(rocketRef.current, {
      x: '+=5',
      duration: 0.05,
      repeat: 5,
      yoyo: true,
      ease: 'power1.inOut',
    });

    tl.to(
      smokeRef.current,
      {
        opacity: 0.6,
        duration: 0.3,
        ease: 'power1.inOut',
      },
      '<'
    );

    tl.to(rocketRef.current, {
      y: -300,
      opacity: 0,
      duration: 1.2,
      ease: 'power2.in',
    });

    tl.to(
      smokeRef.current,
      {
        opacity: 0,
        duration: 0.4,
        ease: 'power1.out',
      },
      '-=0.8'
    );

    tl.add(() => {
      setSubmissionStatus({
        type: 'success',
        message,
      });
      setModalVisible(true);
      resetForm();
      gsap.set(rocketRef.current, { y: 0, opacity: 1 });
    });
  };

  const handleSubmit = async (values, { resetForm }) => {
    setSubmissionStatus(null);
    try {
      const response = await sendFeedback(values);
      let cleanMessage = response.message || t('successMessage');
      cleanMessage = cleanMessage.replace(/✅.*$/, '');

      if (rocketRef.current && smokeRef.current) {
        handleAnimation(cleanMessage, resetForm);
      } else {
        setSubmissionStatus({
          type: 'success',
          message: cleanMessage,
        });
        setModalVisible(true);
        resetForm();
      }
    } catch (error) {
      setSubmissionStatus({
        type: 'error',
        message: error.message || t('errorMessage'),
      });
      setModalVisible(true);
    }
  };

  useEffect(() => {
    if (!modalVisible) return;
    const timer = setTimeout(() => setModalVisible(false), 5000);
    return () => clearTimeout(timer);
  }, [modalVisible]);

  return (
    <Container>
      <section>
        <h2 className={styles.title}>
          {t('title')} <span className={styles.andTitle}>{t('andTitle')}</span>
        </h2>
        <div className={styles.bigContainer}>
          <div className={styles.containerForm}>
            <h3 className={styles.description}>{t('description')}</h3>
            <p className={styles.subtitle}>{t('subtitle')}</p>
            <div className={styles.containerImg}>
              <div className={styles.rocketWrapper}>
                <div ref={rocketRef}>
                  <Image
                    src="/image/feedback.png"
                    alt="feedback"
                    width={568}
                    height={390}
                    className={styles.feedback}
                  />
                </div>
                <div className={styles.smoke} ref={smokeRef}></div>
              </div>
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
              >
                <Form className={styles.form}>
                  <div className={styles.fieldContainer}>
                    <Field
                      className={styles.input}
                      type="text"
                      name="name"
                      placeholder={t('fields.name')}
                    />
                    <ErrorMessage name="name">
                      {(msg) => (
                        <FadeError message={msg} className={styles.error} />
                      )}
                    </ErrorMessage>
                  </div>
                  <div className={styles.fieldContainer}>
                    <Field
                      className={styles.input}
                      type="email"
                      name="email"
                      placeholder={t('fields.email')}
                    />
                    <ErrorMessage name="email">
                      {(msg) => (
                        <FadeError message={msg} className={styles.error} />
                      )}
                    </ErrorMessage>
                  </div>
                  <div className={styles.fieldContainer}>
                    <Field
                      className={styles.inputText}
                      as="textarea"
                      name="message"
                      placeholder={t('fields.message')}
                    />
                    <ErrorMessage name="message">
                      {(msg) => (
                        <FadeError message={msg} className={styles.error} />
                      )}
                    </ErrorMessage>
                  </div>
                  <div className={styles.checkboxContainer}>
                    <Field
                      type="checkbox"
                      name="agree"
                      className={styles.checkbox}
                    />
                    <label htmlFor="agree" className={styles.checkboxLabel}>
                      {t('fields.agree')}
                    </label>
                  </div>
                  <ErrorMessage name="agree">
                    {(msg) => (
                      <FadeError message={msg} className={styles.error} />
                    )}
                  </ErrorMessage>
                  <div className={styles.buttonWrapper}>
                    <Button
                      type="submit"
                      variant="variant3"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      {t('submitButton')}
                    </Button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </section>

      <Modal show={modalVisible} onClose={() => setModalVisible(false)}>
        <h3 className={styles.status}>
          {submissionStatus?.type === 'success'
            ? t('status.success')
            : t('status.error')}
        </h3>
        <p>{submissionStatus?.message}</p>
      </Modal>
    </Container>
  );
}
