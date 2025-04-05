import React, { useState } from "react";
import Image, { StaticImageData } from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

import package_1_1 from '../public/images/1/1.jpg'
import package_1_2 from '../public/images/1/2.jpg'
import package_1_3 from '../public/images/1/3.jpg'
import package_1_4 from '../public/images/1/4.jpg'
import package_1_5 from '../public/images/1/5.jpeg'
import package_1_6 from '../public/images/1/6.jpg'
import package_1_7 from '../public/images/1/7.jpg'
import package_1_8 from '../public/images/1/8.jpg'
import package_1_9 from '../public/images/1/9.jpg'
import package_1_10 from '../public/images/1/10.jpg'
import package_1_11 from '../public/images/1/11.jpg'
import package_1_12 from '../public/images/1/12.jpg'
import package_1_13 from '../public/images/1/13.jpg'
import package_1_14 from '../public/images/1/14.jpg'
import package_2_1 from '../public/images/2/1.jpg'
import package_2_2 from '../public/images/2/2.jpg'
import package_2_3 from '../public/images/2/3.jpg'
import package_2_4 from '../public/images/2/4.jpg'
import package_2_5 from '../public/images/2/5.jpg'
import package_2_6 from '../public/images/2/6.jpg'
import package_3_1 from '../public/images/3/1.jpg'
import package_3_2 from '../public/images/3/2.jpg'
import package_3_3 from '../public/images/3/3.jpg'
import package_4_1 from '../public/images/4/1.jpg'
import package_4_2 from '../public/images/4/2.jpg'
import package_4_3 from '../public/images/4/3.jpg'
import package_4_4 from '../public/images/4/4.jpg'
import package_4_5 from '../public/images/4/5.jpg'
import package_4_6 from '../public/images/4/6.jpg'
import package_4_7 from '../public/images/4/7.jpg'
import package_4_8 from '../public/images/4/8.jpg'
import package_4_9 from '../public/images/4/9.jpg'
import package_4_10 from '../public/images/4/10.jpg'
import package_4_11 from '../public/images/4/11.jpg'
import package_4_12 from '../public/images/4/12.jpg'
import package_5_1 from '../public/images/5/1.jpg'
import package_5_2 from '../public/images/5/2.jpg'
import package_5_3 from '../public/images/5/3.jpg'
import package_5_4 from '../public/images/5/4.jpg'
import package_5_5 from '../public/images/5/5.jpg'
import package_5_6 from '../public/images/5/6.jpg'
import package_5_7 from '../public/images/5/7.jpg'
import package_5_8 from '../public/images/5/8.jpg'
import package_5_9 from '../public/images/5/9.jpg'
import package_5_10 from '../public/images/5/10.jpg'
import package_5_11 from '../public/images/5/11.jpg'
import package_6_1 from '../public/images/6/1.jpeg'
import package_6_2 from '../public/images/6/2.jpg'
import package_6_3 from '../public/images/6/3.jpg'
import package_6_4 from '../public/images/6/4.jpg'
import package_6_5 from '../public/images/6/5.jpg'
import package_6_6 from '../public/images/6/6.jpg'
import package_6_7 from '../public/images/6/7.jpg'
import package_6_8 from '../public/images/6/8.jpg'
import package_6_9 from '../public/images/6/9.jpg'
import package_7_1 from '../public/images/7/1.jpg'
import package_7_2 from '../public/images/7/2.jpg'
import package_7_3 from '../public/images/7/3.jpg'
import package_7_4 from '../public/images/7/4.jpg'
import package_7_5 from '../public/images/7/5.jpg'
import package_7_6 from '../public/images/7/6.jpg'
import package_7_8 from '../public/images/7/8.jpg'
import package_7_9 from '../public/images/7/9.jpg'
import package_7_10 from '../public/images/7/10.jpg'
import package_7_11 from '../public/images/7/11.jpg'
import package_7_12 from '../public/images/7/12.jpg'
import package_7_13 from '../public/images/7/13.jpg'
import package_7_14 from '../public/images/7/14.jpg'
import package_7_15 from '../public/images/7/15.jpg'
import package_7_16 from '../public/images/7/16.jpg'
import package_8_1 from '../public/images/8/1.jpg'
import package_8_2 from '../public/images/8/2.jpg'
import package_8_3 from '../public/images/8/3.jpg'
import package_8_4 from '../public/images/8/4.jpg'
import package_8_5 from '../public/images/8/5.jpg'
import package_8_6 from '../public/images/8/6.jpg'
import package_8_7 from '../public/images/8/7.jpg'
import package_8_8 from '../public/images/8/8.jpg'
import package_8_9 from '../public/images/8/9.jpg'
import package_8_10 from '../public/images/8/10.jpg'
import package_8_11 from '../public/images/8/11.jpg'
import package_8_12 from '../public/images/8/12.jpg'
import package_9_1 from '../public/images/9/1.jpg'
import package_9_2 from '../public/images/9/2.jpg'
import package_9_3 from '../public/images/9/3.jpg'
import package_9_4 from '../public/images/9/4.jpg'
import package_9_5 from '../public/images/9/5.jpg'
import package_9_6 from '../public/images/9/6.jpg'
import package_9_7 from '../public/images/9/7.jpg'
import package_9_8 from '../public/images/9/8.jpg'
import package_9_9 from '../public/images/9/9.jpg'
import package_9_10 from '../public/images/9/10.jpg'
import package_9_11 from '../public/images/9/11.jpg'
import package_9_12 from '../public/images/9/12.jpg'
import package_9_13 from '../public/images/9/13.jpg'
import package_9_14 from '../public/images/9/14.jpg'
import package_10_1 from '../public/images/10/1.jpg'
import package_10_2 from '../public/images/10/2.jpg'
import package_10_3 from '../public/images/10/3.jpg'
import package_10_4 from '../public/images/10/4.jpg'
import package_10_5 from '../public/images/10/5.jpg'
import package_10_6 from '../public/images/10/6.jpg'
import package_10_7 from '../public/images/10/7.jpg'
import package_10_8 from '../public/images/10/8.jpg'
import package_10_9 from '../public/images/10/9.jpg'
import package_10_10 from '../public/images/10/10.jpg'
import package_10_11 from '../public/images/10/11.jpg'
import package_10_12 from '../public/images/10/12.jpg'
import package_10_13 from '../public/images/10/13.jpg'
import package_10_14 from '../public/images/10/14.jpg'
import package_11_1 from '../public/images/11/1.jpg'
import package_11_2 from '../public/images/11/2.jpg'
import package_11_3 from '../public/images/11/3.jpg'
import package_11_4 from '../public/images/11/4.jpg'
import package_11_5 from '../public/images/11/5.jpg'
import package_11_6 from '../public/images/11/6.jpg'
import package_11_7 from '../public/images/11/7.jpg'
import package_11_8 from '../public/images/11/8.jpg'
import package_11_9 from '../public/images/11/9.jpg'
import package_11_10 from '../public/images/11/10.jpg'
import package_11_11 from '../public/images/11/11.jpg'
import package_12_1 from '../public/images/12/1.jpg'
import package_12_2 from '../public/images/12/2.jpg'
import package_12_3 from '../public/images/12/3.jpg'
import package_12_4 from '../public/images/12/4.jpg'
import package_12_5 from '../public/images/12/5.jpg'
import package_12_6 from '../public/images/12/6.jpg'
import package_12_7 from '../public/images/12/7.jpg'
import package_12_8 from '../public/images/12/8.jpg'
import package_13_1 from '../public/images/13/1.jpg'
import package_13_2 from '../public/images/13/2.jpg'
import package_13_3 from '../public/images/13/3.jpg'
import package_13_4 from '../public/images/13/4.jpg'
import package_13_5 from '../public/images/13/5.jpg'
import package_13_6 from '../public/images/13/6.jpg'
import package_13_7 from '../public/images/13/7.jpg'
import package_13_8 from '../public/images/13/8.jpg'
import package_13_9 from '../public/images/13/9.jpg'
import package_13_10 from '../public/images/13/10.jpg'
import package_13_11 from '../public/images/13/11.jpg'
import package_14_1 from '../public/images/14/1.jpg'
import package_14_2 from '../public/images/14/2.jpg'
import package_14_3 from '../public/images/14/3.jpg'
import package_14_4 from '../public/images/14/4.jpg'
import package_14_5 from '../public/images/14/5.jpg'
import package_14_6 from '../public/images/14/6.jpg'
import package_14_7 from '../public/images/14/7.jpg'
import package_15_1 from '../public/images/15/1.jpg'
import package_15_2 from '../public/images/15/2.jpg'
import package_15_3 from '../public/images/15/3.jpg'
import package_15_4 from '../public/images/15/4.jpg'
import package_15_5 from '../public/images/15/5.jpg'
import package_15_6 from '../public/images/15/6.jpg'
import package_15_7 from '../public/images/15/7.jpg'
import package_16_1 from '../public/images/16/1.jpg'
import package_16_2 from '../public/images/16/2.jpg'
import package_16_3 from '../public/images/16/3.jpg'
import package_16_4 from '../public/images/16/4.jpg'
import package_16_5 from '../public/images/16/5.jpg'
import package_16_6 from '../public/images/16/6.jpg'
import package_16_7 from '../public/images/16/7.jpg'
import package_16_8 from '../public/images/16/8.jpg'
import package_17_1 from '../public/images/17/1.jpg'
import package_17_2 from '../public/images/17/2.jpg'
import package_17_3 from '../public/images/17/3.jpg'
import package_17_4 from '../public/images/17/4.jpg'
import package_17_5 from '../public/images/17/5.jpg'
import package_17_6 from '../public/images/17/6.jpg'
import package_17_7 from '../public/images/17/7.jpg'
import package_17_8 from '../public/images/17/8.jpg'
import package_17_9 from '../public/images/17/9.jpg'
import package_17_10 from '../public/images/17/10.jpg'
import package_18_1 from '../public/images/18/1.jpg'
import package_18_2 from '../public/images/18/2.jpg'
import package_18_3 from '../public/images/18/3.jpg'
import package_18_4 from '../public/images/18/4.jpg'
import package_18_5 from '../public/images/18/5.jpg'
import package_18_6 from '../public/images/18/6.jpg'
import package_18_7 from '../public/images/18/7.jpg'
import package_18_8 from '../public/images/18/8.jpg'
import package_18_9 from '../public/images/18/9.jpg'
import package_18_10 from '../public/images/18/10.jpg'
import package_18_11 from '../public/images/18/11.jpg'
import package_18_12 from '../public/images/18/12.jpg'
import package_18_13 from '../public/images/18/13.jpg'
import package_19_1 from '../public/images/19/1.jpg'
import package_19_2 from '../public/images/19/2.jpg'
import package_19_3 from '../public/images/19/3.jpg'
import package_19_4 from '../public/images/19/4.jpg'
import package_19_5 from '../public/images/19/5.jpg'
import package_19_6 from '../public/images/19/6.jpg'
import package_19_7 from '../public/images/19/7.jpg'
import package_19_8 from '../public/images/19/8.jpg'
import package_20_1 from '../public/images/20/1.jpg'
import package_20_2 from '../public/images/20/2.jpg'
import package_20_3 from '../public/images/20/3.jpg'
import package_21_1 from '../public/images/21/1.jpg'
import package_21_2 from '../public/images/21/2.jpg'
import package_21_3 from '../public/images/21/3.jpg'
import package_22_1 from '../public/images/22/1.jpg'
import package_22_2 from '../public/images/22/2.jpg'
import package_22_3 from '../public/images/22/3.jpg'
import package_22_4 from '../public/images/22/4.jpg'
import package_22_5 from '../public/images/22/5.jpg'
import package_22_6 from '../public/images/22/6.jpg'
import package_22_7 from '../public/images/22/7.jpg'
import package_22_8 from '../public/images/22/8.jpg'
import package_23_1 from '../public/images/23/1.jpg'
import package_23_2 from '../public/images/23/2.jpg'
import package_23_3 from '../public/images/23/3.jpg'
import package_24_1 from '../public/images/24/1.jpg'
import package_24_2 from '../public/images/24/2.jpg'
import package_24_3 from '../public/images/24/3.jpg'
import package_24_4 from '../public/images/24/4.jpg'
import package_24_5 from '../public/images/24/5.jpg'
import package_24_6 from '../public/images/24/6.jpg'
import package_24_7 from '../public/images/24/7.jpg'
import package_24_8 from '../public/images/24/8.jpg'
import package_24_9 from '../public/images/24/9.jpg'
import package_24_10 from '../public/images/24/10.jpg'
import package_25_1 from '../public/images/25/1.jpg'
import package_25_2 from '../public/images/25/2.jpg'
import package_25_3 from '../public/images/25/3.jpg'
import package_26_1 from '../public/images/26/1.jpg'
import package_26_2 from '../public/images/26/2.jpg'
import package_26_3 from '../public/images/26/3.jpg'
import package_26_4 from '../public/images/26/4.jpg'
import package_26_5 from '../public/images/26/5.jpg'
import package_26_6 from '../public/images/26/6.jpg'
import package_26_7 from '../public/images/26/7.jpg'
import package_26_8 from '../public/images/26/8.jpg'
import package_26_9 from '../public/images/26/9.jpg'
import package_26_10 from '../public/images/26/10.jpg'
import package_26_11 from '../public/images/26/11.jpg'
import package_27_1 from '../public/images/27/1.jpg'
import package_27_2 from '../public/images/27/2.jpg'
import package_27_3 from '../public/images/27/3.jpg'
import package_27_4 from '../public/images/27/4.jpg'
import package_27_5 from '../public/images/27/5.jpg'
import package_27_6 from '../public/images/27/6.jpg'
import package_27_7 from '../public/images/27/7.jpg'
import package_27_8 from '../public/images/27/8.jpg'
import package_27_9 from '../public/images/27/9.jpg'
import package_27_10 from '../public/images/27/10.jpg'
import package_27_11 from '../public/images/27/11.jpg'
import package_27_12 from '../public/images/27/12.jpg'
import package_27_13 from '../public/images/27/13.jpg'
import package_28_1 from '../public/images/28/1.jpg'
import package_28_2 from '../public/images/28/2.jpg'
import package_28_3 from '../public/images/28/3.jpg'
import package_28_4 from '../public/images/28/4.jpg'
import package_28_5 from '../public/images/28/5.jpg'
import package_28_6 from '../public/images/28/6.jpg'
import package_28_7 from '../public/images/28/7.jpg'
import package_28_8 from '../public/images/28/8.jpg'
import package_29_1 from '../public/images/29/1.jpg'
import package_29_2 from '../public/images/29/2.jpg'
import package_29_3 from '../public/images/29/3.jpg'
import package_29_4 from '../public/images/29/4.jpg'
import package_29_5 from '../public/images/29/5.jpg'
import package_29_6 from '../public/images/29/6.jpg'
import package_29_7 from '../public/images/29/7.jpg'
import package_29_8 from '../public/images/29/8.jpg'
import package_30_1 from '../public/images/30/1.jpg'
import package_30_2 from '../public/images/30/2.jpg'
import package_30_3 from '../public/images/30/3.jpg'
import package_30_4 from '../public/images/30/4.jpg'
import package_30_5 from '../public/images/30/5.jpg'
import package_31_1 from '../public/images/31/1.jpg'
import package_31_2 from '../public/images/31/2.jpg'
import package_31_3 from '../public/images/31/3.jpg'
import package_31_4 from '../public/images/31/4.jpg'
import package_31_5 from '../public/images/31/5.jpg'
import package_31_6 from '../public/images/31/6.jpg'
import package_32_1 from '../public/images/32/1.jpg'
import package_32_2 from '../public/images/32/2.jpg'
import package_32_3 from '../public/images/32/3.jpg'
import package_32_4 from '../public/images/32/4.jpg'
import package_32_5 from '../public/images/32/5.jpg'
import package_32_6 from '../public/images/32/6.jpg'
import package_32_7 from '../public/images/32/7.jpg'
import package_32_8 from '../public/images/32/8.jpg'
import package_32_9 from '../public/images/32/9.jpg'
import package_32_10 from '../public/images/32/10.jpg'
import package_32_11 from '../public/images/32/11.jpg'
import package_32_12 from '../public/images/32/12.jpg'
import package_32_13 from '../public/images/32/13.jpg'
import package_33_1 from '../public/images/33/1.jpg'
import package_33_2 from '../public/images/33/2.jpg'
import package_33_3 from '../public/images/33/3.jpg'
import package_33_4 from '../public/images/33/4.jpg'
import package_33_5 from '../public/images/33/5.jpg'
import package_33_6 from '../public/images/33/6.jpg'
import package_34_2 from '../public/images/34/2.jpg'
import package_34_3 from '../public/images/34/3.jpg'
import package_34_4 from '../public/images/34/4.jpg'
import package_34_5 from '../public/images/34/5.jpg'
import package_34_6 from '../public/images/34/6.jpg'
import package_34_7 from '../public/images/34/7.jpg'
import package_34_8 from '../public/images/34/8.jpg'
import package_35_1 from '../public/images/35/2.jpg'
import package_35_2 from '../public/images/35/3.jpg'
import package_35_3 from '../public/images/35/4.jpg'
import package_35_4 from '../public/images/35/5.jpg'
import package_35_5 from '../public/images/35/6.jpg'
import package_35_6 from '../public/images/35/7.jpg'

interface IPackageImageProp {
    source: number;
}

const package_images: { [key: string]: { main: StaticImageData, list: Array<StaticImageData> } } = {
    "1": { main: package_1_1, list: [package_1_1, package_1_2, package_1_3, package_1_4, package_1_5, package_1_6, package_1_7, package_1_8, package_1_9, package_1_10, package_1_11, package_1_12, package_1_13, package_1_14] },
    "2": { main: package_2_2, list: [package_2_1, package_2_2, package_2_3, package_2_4, package_2_5, package_2_6] },
    "3": { main: package_3_2, list: [package_3_1, package_3_2, package_3_3] },
    "4": { main: package_4_4, list: [package_4_1, package_4_2, package_4_3, package_4_4, package_4_5, package_4_6, package_4_7, package_4_8, package_4_9, package_4_10, package_4_11, package_4_12] },
    "5": { main: package_5_5, list: [package_5_1, package_5_2, package_5_3, package_5_4, package_5_5, package_5_6, package_5_7, package_5_8, package_5_9, package_5_10, package_5_11] },
    "6": { main: package_6_4, list: [package_6_1, package_6_2, package_6_3, package_6_4, package_6_5, package_6_6, package_6_7, package_6_8, package_6_9] },
    "7": { main: package_7_4, list: [package_7_1, package_7_2, package_7_3, package_7_4, package_7_5, package_7_6, package_7_8, package_7_9, package_7_10, package_7_11, package_7_12, package_7_13, package_7_14, package_7_15, package_7_16] },
    "8": { main: package_8_4, list: [package_8_1, package_8_2, package_8_3, package_8_4, package_8_5, package_8_6, package_8_7, package_8_8, package_8_9, package_8_10, package_8_11, package_8_12] },
    "9": { main: package_9_2, list: [package_9_1, package_9_2, package_9_3, package_9_4, package_9_5, package_9_6, package_9_7, package_9_8, package_9_9, package_9_10, package_9_11, package_9_12, package_9_13, package_9_14] },
    "10": { main: package_10_5, list: [package_10_1, package_10_2, package_10_3, package_10_4, package_10_5, package_10_6, package_10_7, package_10_8, package_10_9, package_10_10, package_10_11, package_10_12, package_10_13, package_10_14] },
    "11": { main: package_11_2, list: [package_11_1, package_11_2, package_11_3, package_11_4, package_11_5, package_11_6, package_11_7, package_11_8, package_11_9, package_11_10, package_11_11] },
    "12": { main: package_12_5, list: [package_12_1, package_12_2, package_12_3, package_12_4, package_12_5, package_12_6, package_12_7, package_12_8] },
    "13": { main: package_13_7, list: [package_13_1, package_13_2, package_13_3, package_13_4, package_13_5, package_13_6, package_13_7, package_13_8, package_13_9, package_13_10, package_13_11] },
    "14": { main: package_14_3, list: [package_14_1, package_14_2, package_14_3, package_14_4, package_14_5, package_14_6, package_14_7] },
    "15": { main: package_15_3, list: [package_15_1, package_15_2, package_15_3, package_15_4, package_15_5, package_15_6, package_15_7] },
    "16": { main: package_16_2, list: [package_16_1, package_16_2, package_16_3, package_16_4, package_16_5, package_16_6, package_16_7, package_16_8] },
    "17": { main: package_17_10, list: [package_17_1, package_17_2, package_17_3, package_17_4, package_17_5, package_17_6, package_17_7, package_17_8, package_17_9, package_17_10] },
    "18": { main: package_18_8, list: [package_18_1, package_18_2, package_18_3, package_18_4, package_18_5, package_18_6, package_18_7, package_18_8, package_18_9, package_18_10, package_18_11, package_18_12, package_18_13] },
    "19": { main: package_19_2, list: [package_19_1, package_19_2, package_19_3, package_19_4, package_19_5, package_19_6, package_19_7, package_19_8] },
    "20": { main: package_20_1, list: [package_20_1, package_20_2, package_20_3] },
    "21": { main: package_21_1, list: [package_21_1, package_21_2, package_21_3] },
    "22": { main: package_22_1, list: [package_22_1, package_22_2, package_22_3, package_22_4, package_22_5, package_22_6, package_22_7, package_22_8] },
    "23": { main: package_23_3, list: [package_23_1, package_23_2, package_23_3] },
    "24": { main: package_24_4, list: [package_24_1, package_24_2, package_24_3, package_24_4, package_24_5, package_24_6, package_24_7, package_24_8, package_24_9, package_24_10] },
    "25": { main: package_25_2, list: [package_25_1, package_25_2, package_25_3] },
    "26": { main: package_26_7, list: [package_26_1, package_26_2, package_26_3, package_26_4, package_26_5, package_26_6, package_26_7, package_26_8, package_26_9, package_26_10, package_26_11] },
    "27": { main: package_27_11, list: [package_27_1, package_27_2, package_27_3, package_27_4, package_27_5, package_27_6, package_27_7, package_27_8, package_27_9, package_27_10, package_27_11, package_27_12, package_27_13] },
    "28": { main: package_28_3, list: [package_28_1, package_28_2, package_28_3, package_28_4, package_28_5, package_28_6, package_28_7, package_28_8] },
    "29": { main: package_29_5, list: [package_29_1, package_29_2, package_29_3, package_29_4, package_29_5, package_29_6, package_29_7, package_29_8] },
    "30": { main: package_30_1, list: [package_30_1, package_30_2, package_30_3, package_30_4, package_30_5] },
    "31": { main: package_31_1, list: [package_31_1, package_31_2, package_31_3, package_31_4, package_31_5, package_31_6] },
    "32": { main: package_32_1, list: [package_32_1, package_32_2, package_32_3, package_32_4, package_32_5, package_32_6, package_32_7, package_32_8, package_32_9, package_32_10, package_32_11, package_32_12, package_32_13] },
    "33": { main: package_33_2, list: [package_33_1, package_33_2, package_33_3, package_33_4, package_33_5, package_33_6] },
    "34": { main: package_34_4, list: [package_34_2, package_34_3, package_34_4, package_34_5, package_34_6, package_34_7, package_34_8] },
    "35": { main: package_35_5, list: [package_35_1, package_35_2, package_35_3, package_35_4, package_35_5, package_35_6] },

}

function PackageImage({ source }: IPackageImageProp) {
    return (
        <div className="flex  w-80 xl:w-96 h-[100%] justify-center content-center">
            <Image
                src={package_images[source]["main"]}
                style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                }}
                alt="PackageImage"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            >
            </Image>
        </div>
    )
}

function PackageImageSwiper({ source }: IPackageImageProp) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = package_images[source]["list"];

    // Handle Next Image
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Handle Previous Image
    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <>
            {/* Image Grid */}
            <div className="grid grid-cols-10 gap-x-6 max-w-screen-xl mx-8 relative h-full">
                {/* Left Column (65%) */}
                <div className="col-span-12 sm:col-span-7 h-full relative">
                    <Image
                        src={images[0]}
                        alt="Large Gallery Image"
                        className="w-full h-full object-cover rounded-[23px]"
                    />
                    {/* View All Button - Visible on Mobile Inside Left Image */}
                    <button
                        className="absolute bottom-4 right-4 sm:hidden px-3 py-1 bg-black/40 border-2 border-white text-white text-sm rounded-md hover:bg-[#025C7A]"
                        onClick={() => setIsModalOpen(true)}
                    >
                        View All
                    </button>
                </div>

                {/* Right Column (35%) */}
                <div className="col-span-3 hidden sm:flex flex-col gap-y-6 h-full">
                    <div className="h-1/2">
                        <Image
                            src={images[1]}
                            alt="Small Top Image"
                            className="w-full h-full object-cover rounded-[23px]"
                        />
                    </div>

                    {/* Bottom Image with View All Button */}
                    <div className="h-1/2 relative">
                        <Image
                            src={images[2]}
                            alt="Small Bottom Image"
                            className="w-full h-full object-cover rounded-[23px]"
                        />
                        {/* View All Button - Positioned at Bottom Right for Larger Screens */}
                        <button
                            className="absolute bottom-4 right-4 hidden sm:block px-3 py-1 bg-black/40 border-2 border-white text-white text-sm rounded-md hover:bg-[#025C7A]"
                            onClick={() => setIsModalOpen(true)}
                        >
                            View All
                        </button>
                    </div>
                </div>
            </div>

            {/* Fullscreen Lightbox Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
                    {/* Close Button */}
                    <button
                        className="absolute top-6 right-8 text-white text-3xl"
                        onClick={() => setIsModalOpen(false)}
                    >
                        ✕
                    </button>

                    {/* Image Display */}
                    <div className="relative w-[90%] max-w-3xl flex justify-center">
                        <Image
                            src={images[currentIndex]}
                            alt={`Gallery Image ${currentIndex + 1}`}
                            className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                        />

                        {/* Previous Button */}
                        <button
                            onClick={prevImage}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-4 text-white rounded-full hover:bg-opacity-80"
                        >
                            ❮
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={nextImage}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-4 text-white rounded-full hover:bg-opacity-80"
                        >
                            ❯
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export { PackageImage, PackageImageSwiper };
