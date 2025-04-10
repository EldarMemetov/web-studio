'use client';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './FeedbackForm.module.scss';
import Container from '@/shared/container/Container';
import { sendFeedback } from '../../services/api';
import Image from 'next/image';
import Button from '@/shared/components/button/Button';
import FadeError from '@/shared/components/FadeError/FadeError';

export default function FeedbackForm() {
  const { t } = useTranslation('feedbackForm');
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    message: '',
    agree: false,
  };

  const handleSubmit = async (values, { resetForm }) => {
    setSubmissionStatus(null);

    try {
      const response = await sendFeedback(values);
      setSubmissionStatus({
        type: 'success',
        message: response.message || t('successMessage'),
      });
      resetForm();
    } catch (error) {
      setSubmissionStatus({
        type: 'error',
        message: error.message || t('errorMessage'),
      });
    }
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

  useEffect(() => {
    if (submissionStatus && submissionStatus.type === 'success') {
      const timer = setTimeout(() => {
        setSubmissionStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submissionStatus]);

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

            {submissionStatus && (
              <p
                className={`${styles.status} ${submissionStatus.type === 'error' ? styles.errorStatus : styles.successStatus}`}
              >
                {submissionStatus.message}
              </p>
            )}
            <div className={styles.containerImg}>
              <Image
                src="/image/feedback.png"
                alt="feedback"
                width={568}
                height={390}
                className={`${styles.feedback} ${isHovered ? styles.imageHover : ''}`}
              />
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
                      id="name"
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
                      id="email"
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
                      id="message"
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
                      id="agree"
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
    </Container>
  );
}
