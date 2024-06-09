// Import Swiper React components
import ReactECharts from 'echarts-for-react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Button } from 'antd';
import { Navigation } from 'swiper/modules';

export default function App() {
  const pageIds = [1, 6];
  const EChartsOptions = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
      },
    ],
  };
  return (
    <>
      <ReactECharts
        option={EChartsOptions}
        onEvents={{
          click() {
            console.log('click!!!!!');
          },
        }}
      />
      <div className="flex">
        <Swiper
          touch={{
            enable: false,
          }}
          simulateTouch={false}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            {' '}
            <div className=" w-[800px] h-[400px]">
              <ReactECharts
                option={EChartsOptions}
                onEvents={{
                  click() {
                    console.log('click!!!!!');
                  },
                }}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>

        <div className="flex gap-2">
          {pageIds.map((item) => {
            return (
              <Button key={item} onClick={() => {}}>
                点击发布
              </Button>
            );
          })}
        </div>
      </div>
    </>
  );
}
