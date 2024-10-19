import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: 'Simple Style',
    image: 'img/Phone1.png',
    description: (
      <>
        <Translate id="homePage.app1.description">
          时尚触手可及：轻松管理与搭配您的衣橱
        </Translate>
      </>
    ),
  },
  {
    title: 'Quick Fit',
    image: 'img/Phone2.png',
    description: (
      <>
        <Translate id="homePage.app2.description">
          贴心健身伴侣：助您轻松达成健康目标
        </Translate>
      </>
    ),
  },
  {
    title: 'Dream Track',
    image: 'img/Phone3.png',
    description: (
      <>
        <Translate id="homePage.app3.description">
          梦想成真：高效管理您的目标与任务
        </Translate>
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
