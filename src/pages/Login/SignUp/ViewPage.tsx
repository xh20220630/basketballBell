import { animated, useSprings } from '@react-spring/web';
import { useMeasure } from '@uidotdev/usehooks';
import { clamp } from 'lodash';
import { useRef } from 'react';
import { useDrag } from 'react-use-gesture';
import styles from './styles.module.css';

const pages = [
  'https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/4016596/pexels-photo-4016596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
];

function Viewpager() {
  const index = useRef(0);
  const [ref, { width }] = useMeasure();
  const widthNumber: number = width!;
  const [props, api] = useSprings(
    pages.length,
    (i) => ({
      x: i * widthNumber,
      scale: widthNumber === 0 ? 0 : 1,
      display: 'block',
    }),
    [widthNumber],
  );
  const bind = useDrag(
    ({ active, movement: [mx], direction: [xDir], distance, cancel }) => {
      if (active && distance > widthNumber / 2) {
        index.current = clamp(
          index.current + (xDir > 0 ? -1 : 1),
          0,
          pages.length - 1,
        );
        cancel();
      }
      api.start((i) => {
        if (i < index.current - 1 || i > index.current + 1)
          return { display: 'none' };
        const x = (i - index.current) * widthNumber + (active ? mx : 0);
        const scale = active ? 1 - distance / widthNumber / 2 : 1;
        return { x, scale, display: 'block' };
      });
    },
  );
  return (
    <div ref={ref} className={styles.wrapper}>
      {props.map(({ x, display, scale }, i) => (
        <animated.div
          className={styles.page}
          {...bind()}
          key={i}
          style={{ display, x }}
        >
          <animated.div
            style={{ scale, backgroundImage: `url(${pages[i]})` }}
          />
        </animated.div>
      ))}
    </div>
  );
}

export default function ViewPage() {
  return (
    <div className={styles.container}>
      <Viewpager />
    </div>
  );
}
