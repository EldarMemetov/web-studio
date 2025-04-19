'use client';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styles from './ReviewsForm.module.scss';
import Container from '@/shared/container/Container';
import { sendReviews } from '@/services/api';
import { useReviews } from '../GetReview/Components/ReviewsSection/ReviewsSection';
import Button from '@/shared/components/button/Button';
import Modal from '@/shared/Modal/Modal';

import {
  TextField,
  TextAreaField,
  CheckboxField,
  RatingField,
} from '@/shared/components/InputForm/InputForm';

export default function ReviewsForm() {
  const { t } = useTranslation('reviewsForm');
  const { addReview } = useReviews();
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const initialValues = {
    name: '',
    email: '',
    text: '',
    rating: 0,
    agree: false,
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, t('validation.name.min'))
      .required(t('validation.name.required')),
    email: Yup.string()
      .email(t('validation.email.invalid'))
      .required(t('validation.email.required')),
    text: Yup.string()
      .min(10, t('validation.message.min'))
      .required(t('validation.message.required')),
    rating: Yup.number()
      .min(1, t('validation.rating.required'))
      .max(5)
      .required(t('validation.rating.required')),
    agree: Yup.boolean()
      .oneOf([true], t('validation.agree'))
      .required(t('validation.agree')),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setSubmissionStatus(null);
    try {
      const response = await sendReviews(values);
      setSubmissionStatus({
        type: 'success',
        message: response.message || t('successMessage'),
      });
      addReview(response.review);
      resetForm();
    } catch (error) {
      setSubmissionStatus({
        type: 'error',
        message: error.message || t('errorMessage'),
      });
    }
  };

  useEffect(() => {
    if (submissionStatus?.type) {
      const timer = setTimeout(() => setSubmissionStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [submissionStatus]);

  return (
    <Container>
      <div className={styles.ContentContainer}>
        <h2 className={styles.title}>{t('title')}</h2>
        <div className={styles.containerForm}>
          <p>{t('description')}</p>

          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <Form className={styles.form}>
              <div className={styles.containerBig}>
                <div className={styles.containerNameEmail}>
                  <div className={styles.fieldContainer}>
                    <TextField
                      name="name"
                      type="text"
                      placeholder={t('fields.name')}
                    />
                  </div>
                  <div className={styles.fieldContainer}>
                    <TextField
                      name="email"
                      type="email"
                      placeholder={t('fields.email')}
                    />
                  </div>
                </div>
                <div className={styles.fieldContainer}>
                  <TextAreaField
                    name="text"
                    placeholder={t('fields.message')}
                  />
                </div>
              </div>

              {/* Rating */}
              <RatingField label={t('rating')} />

              <div className={styles.checkboxContainer}>
                <CheckboxField name="agree">{t('fields.agree')}</CheckboxField>
              </div>

              <Button type="submit" variant="variant2" data-aos="zoom-in">
                {t('submitButton')}
              </Button>
            </Form>
          </Formik>
        </div>
      </div>

      <Modal
        show={!!submissionStatus}
        onClose={() => setSubmissionStatus(null)}
      >
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
