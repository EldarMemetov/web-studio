'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styles from './FeedbackForm.module.scss';
import Container from '@/shared/container/Container';
import { sendFeedback } from '@/services/api';
import Image from 'next/image';
import Button from '@/shared/components/button/Button';
import Modal from '../../shared/Modal/Modal';
import {
  handleHoverAnimation,
  handleSubmitAnimation,
} from '../../\/shared/RocketAnimation/RocketAnimation';
import {
  TextField,
  TextAreaField,
  CheckboxField,
} from '@/shared/components/InputForm/InputForm';

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

  useEffect(() => {
    if (isHovered) {
      handleHoverAnimation(rocketRef.current, smokeRef.current);
    }
  }, [isHovered]);

  const handleSubmit = async (values, { resetForm }) => {
    setSubmissionStatus(null);
    try {
      const response = await sendFeedback(values);
      let cleanMessage = response.message || t('successMessage');
      cleanMessage = cleanMessage.replace(/✅.*$/, '');

      handleSubmitAnimation(
        rocketRef.current,
        smokeRef.current,
        cleanMessage,
        resetForm,
        setSubmissionStatus,
        setModalVisible
      );
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
                  <div className={styles.smoke} ref={smokeRef}></div>
                </div>
              </div>
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
              >
                <Form className={styles.form}>
                  <TextField
                    name="name"
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder={t('fields.name')}
                  />
                  <TextField
                    name="email"
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder={t('fields.email')}
                  />
                  <TextAreaField
                    name="message"
                    id="message"
                    autoComplete="off"
                    placeholder={t('fields.message')}
                  />
                  <div className={styles.checkboxContainer}>
                    <CheckboxField name="agree" id="agree">
                      {t('fields.agree')}
                    </CheckboxField>
                  </div>
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
          <div className={styles.cloudBlur}></div>
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
