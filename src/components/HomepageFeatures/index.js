import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Hızır App Nedir?',
    Img: require('@site/static/img/1.png').default,
    description: (
      <>
        Hızır App, afet öncesinde, anında ve sonrasında güvenliğinizi sağlamak ve size acil yardım ulaştırmak amacıyla tasarlanmış bir mobil uygulamadır. Acil durum ekiplerine anında bilgi ileterek, hayat kurtarıcı önlemlerin alınmasına yardımcı olur.
      </>
    ),
  },
  {
    title: "Neden Hızır App'i Seçmelisiniz?",
    Img: require('@site/static/img/2.png').default,
    description: (
      <>
        Hızır App, güçlü altyapısı ve kullanıcı dostu arayüzüyle, doğal afetlere karşı sizi korumak ve size destek olmak için tasarlanmıştır. Güvenliğiniz bizim önceliğimizdir.
      </>
    ),
  },
  {
    title: 'Nasıl İndirebilirim?',
    Img: require('@site/static/img/3.png').default,
    description: (
      <>
        Hemen şimdi Hızır App'i indirin ve sevdiklerinizle birlikte daha güvenli bir geleceğe adım atın.

        Afetlere karşı hazır olun, Hızır App yanınızda!
      </>
    ),
  },
];

function Feature({ Img, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Img} alt={title} className={styles.featureImg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}