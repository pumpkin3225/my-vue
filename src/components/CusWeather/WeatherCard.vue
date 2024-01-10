<script>
export default {
    props: {
        weather: {
            type: Object,
        }
    },
    methods: {
        getWeatherIMG(weatherEl) {
            return `/src/assets/Img/${weatherEl}.svg`;
        }
    }
};
</script>

<template>
    <div  class="w-[100%] bg-[#E9A2AD] border-[1px] p-3 flex">
        <div class="order-last">
            <img :src="getWeatherIMG(weather.weatherElement[0].time[0].parameter.parameterName)" alt="">
        </div>
        <div class="w-[50%]">
            <div>
                <h5>{{ weather.locationName }}</h5>
                <p>{{ weather.weatherElement[0].time[0].parameter.parameterName }}</p>
            </div>
            <ul>
                <li>{{ weather.weatherElement[2].time[0].parameter.parameterName }}°~{{
                    weather.weatherElement[4].time[0].parameter.parameterName }}°</li>
                <li>{{ weather.weatherElement[1].time[0].parameter.parameterName }}% 降雨率</li>
                <li>{{ weather.weatherElement[3].time[0].parameter.parameterName }}</li>
            </ul>
        </div>
    </div>
</template>
  
  