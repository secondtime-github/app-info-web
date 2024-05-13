import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '轻松管理您的衣橱',
    image: 'img/Phone1.png',
    description: (
      <>
        将爱衣按类别整理，一目了然
      </>
    ),
  },
  {
    title: '搭配您的完美装扮',
    image: 'img/Phone2.png',
    description: (
      <>
        从上到下挑选合适的服饰，轻松穿搭
      </>
    ),
  },
  {
    title: '记录您的每日穿搭',
    image: 'img/Phone3.png',
    description: (
      <>
        跟踪并记录每日的着装选择，随时回顾
      </>
    ),
  },
];

function Feature({ image, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <img className={styles.featureSvg} src={image} alt="" />
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
