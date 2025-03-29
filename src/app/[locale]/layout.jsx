// import TranslationsProvider from '@/i18n/utils/TranslationsProvider';
// import { Header } from '../../modules/Header/Header';
// import '../globals.scss';
// import ErrorBoundaryWithTranslation from '@/shared/components/ErrorBoundary/ErrorBoundaryWithTranslation/ErrorBoundaryWithTranslation';
// import { Montserrat, Open_Sans } from 'next/font/google';
// import clsx from 'clsx';

// export const metadata = {
//   title: 'web studio',
//   description: 'Generated by create next app',
// };

// const montserrat = Montserrat({
//   subsets: ['latin', 'cyrillic'],
//   weight: ['700'],
//   display: 'swap',
//   variable: '--font-montserrat',
// });

// const open_sans = Open_Sans({
//   subsets: ['latin', 'cyrillic'],
//   weight: ['400', '600'],
//   display: 'swap',
//   variable: '--font-open_sans',
// });

// export default async function Layout({ children, params }) {
//   const awaitedParams = await Promise.resolve(params);
//   const { locale } = awaitedParams;

//   return (
//     <html lang={locale}>
//       <body
//         suppressHydrationWarning={true}
//         className={clsx(montserrat.variable, open_sans.variable)}
//       >
//         <TranslationsProvider locale={locale}>
//           <ErrorBoundaryWithTranslation>
//             <Header />
//             <main>{children}</main>
//           </ErrorBoundaryWithTranslation>
//         </TranslationsProvider>
//       </body>
//     </html>
//   );
// }
// import TranslationsProvider from '@/i18n/utils/TranslationsProvider';
// import { Header } from '../../modules/Header/Header';
// import '../globals.scss';
// import ErrorBoundaryWithTranslation from '@/shared/components/ErrorBoundary/ErrorBoundaryWithTranslation/ErrorBoundaryWithTranslation';

// export const metadata = {
//   title: 'web studio',
//   description: 'Generated by create next app',
// };

// export default async function Layout({ children, params }) {
//   const awaitedParams = await Promise.resolve(params);
//   const { locale } = awaitedParams;

//   return (
//     <html lang={locale}>
//       <body suppressHydrationWarning={true}>
//         <TranslationsProvider locale={locale}>
//           <ErrorBoundaryWithTranslation>
//             <Header />
//             <main>{children}</main>
//           </ErrorBoundaryWithTranslation>
//         </TranslationsProvider>
//       </body>
//     </html>
//   );
// }
import {
  Manrope,
  Oswald,
  PT_Sans,
  Raleway,
  Rubik,
  Orbitron,
} from 'next/font/google';
import TranslationsProvider from '@/i18n/utils/TranslationsProvider';
import { Header } from '../../modules/Header/Header';
import '../globals.scss';
import ErrorBoundaryWithTranslation from '@/shared/components/ErrorBoundary/ErrorBoundaryWithTranslation/ErrorBoundaryWithTranslation';
import clsx from 'clsx';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-manrope',
});

const oswald = Oswald({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-oswald',
});

const ptSans = PT_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-pt-sans',
});

const raleway = Raleway({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-raleway',
});

const rubik = Rubik({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-rubik',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-orbitron',
});

export const metadata = {
  title: 'web studio',
  description: 'Generated by create next app',
};

export default async function Layout({ children, params }) {
  const awaitedParams = await Promise.resolve(params);
  const { locale } = awaitedParams;

  return (
    <html lang={locale}>
      <body
        suppressHydrationWarning={true}
        className={clsx(
          manrope.variable,
          oswald.variable,
          ptSans.variable,
          raleway.variable,
          rubik.variable,
          orbitron.variable
        )}
      >
        <TranslationsProvider locale={locale}>
          <ErrorBoundaryWithTranslation>
            <Header />
            <main>{children}</main>
          </ErrorBoundaryWithTranslation>
        </TranslationsProvider>
      </body>
    </html>
  );
}
