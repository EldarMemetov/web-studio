'use client';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ReviewsForm.module.scss';
import Container from '@/shared/container/Container';
import { sendReviews } from '@/services/api';
import { useReviews } from '../GetReview/Components/ReviewsSection/ReviewsSection';
import Button from '@/shared/components/button/Button';
import Icon from '@/shared/Icon/Icon';

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
    if (submissionStatus?.type === 'success') {
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

          {submissionStatus && (
            <p
              className={`
                ${styles.status} 
                ${
                  submissionStatus.type === 'error'
                    ? styles.errorStatus
                    : styles.successStatus
                }
              `}
            >
              {submissionStatus.message}
            </p>
          )}

          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ values, setFieldValue }) => (
              <Form className={styles.form}>
                {/* Поля name, email, text */}
                <div className={styles.containerBig}>
                  <div className={styles.containerNameEmail}>
                    <div className={styles.fieldContainer}>
                      <Field
                        className={styles.input}
                        type="text"
                        name="name"
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
                        placeholder={t('fields.email')}
                      />
                      <ErrorMessage
                        name="email"
                        component="p"
                        className={styles.error}
                      />
                    </div>
                  </div>
                  <div className={styles.fieldContainer}>
                    <Field
                      className={styles.input}
                      as="textarea"
                      name="text"
                      placeholder={t('fields.message')}
                    />
                    <ErrorMessage
                      name="text"
                      component="p"
                      className={styles.error}
                    />
                  </div>
                </div>

                {/* Рейтинг */}
                <div className={styles.fieldContainer}>
                  <label className={styles.ratingLabel}>
                    {t('fields.rating')}
                  </label>
                  <div className={styles.rating}>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Icon
                        key={i}
                        iconName={
                          values.rating >= i
                            ? 'icon-star-filled'
                            : 'icon-star-outline'
                        }
                        className={styles.star}
                        onClick={() => setFieldValue('rating', i)}
                      />
                    ))}
                  </div>
                  <ErrorMessage
                    name="rating"
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
                <ErrorMessage
                  name="agree"
                  component="p"
                  className={styles.error}
                />

                <Button type="submit" variant="variant2" data-aos="zoom-in">
                  {t('submitButton')}
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Container>
  );
}
