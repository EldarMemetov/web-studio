'use client';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './FeedbackForm.module.scss';
import Container from '@/shared/container/Container';
import { sendFeedback } from '../../services/api';

export default function FeedbackForm() {
  const { t } = useTranslation('feedbackForm');
  const [submissionStatus, setSubmissionStatus] = useState(null);

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
      <h2>{t('title')}</h2>
      <div className={styles.containerForm}>
        <h3>{t('description')}</h3>
        <p>{t('subtitle')}</p>

        {submissionStatus && (
          <p
            className={`${styles.status} ${submissionStatus.type === 'error' ? styles.errorStatus : styles.successStatus}`}
          >
            {submissionStatus.message}
          </p>
        )}

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
              <ErrorMessage
                name="name"
                component="p"
                className={styles.error}
              />
            </div>
            <div className={styles.fieldContainer}>
              <Field
                className={styles.input}
                type="email"
                name="email"
                id="email"
                placeholder={t('fields.email')}
              />
              <ErrorMessage
                name="email"
                component="p"
                className={styles.error}
              />
            </div>
            <div className={styles.fieldContainer}>
              <Field
                className={styles.input}
                type="text"
                name="message"
                id="message"
                placeholder={t('fields.message')}
              />
              <ErrorMessage
                name="message"
                component="p"
                className={styles.error}
              />
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
            <ErrorMessage name="agree" component="p" className={styles.error} />
            <button className={styles.submitButton} type="submit">
              {t('submitButton')}
            </button>
          </Form>
        </Formik>
      </div>
    </Container>
  );
}
