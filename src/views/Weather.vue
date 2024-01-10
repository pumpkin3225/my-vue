<script>
import WeatherCard from '@/components/CusWeather/WeatherCard.vue';
import WeatherBtn from '@/components/CusWeather/WeatherBtn.vue';
export default {
    components: {
        WeatherCard,
        WeatherBtn,
    },
    data() {
        return {
            counties: [
                {
                    title: '台灣各縣市',
                    area: ['台灣各縣市'],
                },
                {
                    title: '北部地區',
                    area: ['臺北市', '新北市', '基隆市', '新竹市', '桃園市', '新竹縣', '宜蘭縣'],
                },
                {
                    title: '中部地區',
                    area: ['臺中市', '苗栗縣', '彰化縣', '南投縣', '雲林縣'],
                },
                {
                    title: '南部地區',
                    area: ['高雄市', '臺南市', '嘉義市', '嘉義縣', '屏東縣'],
                },
                {
                    title: '東部地區',
                    area: ['花蓮縣', '臺東縣'],
                },
                {
                    title: '離島地區',
                    area: ['澎湖縣', '金門縣', '連江縣'],
                }
            ],
            weatherData: [],
            selectedCounty: '台灣各縣市',
            url: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-772C064A-6F46-498D-BC1C-FDC4CF8B67EA',
            locationSort: ['臺北市', '新北市', '基隆市', '新竹市', '桃園市', '新竹縣', '宜蘭縣', '臺中市', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '高雄市', '臺南市', '嘉義市', '嘉義縣', '屏東縣', '花蓮縣', '臺東縣', '澎湖縣', '金門縣', '連江縣'],
        };
    },

    mounted() {
        fetch(this.url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.records.location);
                this.weatherData = data.records.location.sort((a, b) => {
                    return this.locationSort.indexOf(a.locationName) - this.locationSort.indexOf(b.locationName);
                });
            })
    },

    computed: {
        getCounty() {
            if (this.selectedCounty === '台灣各縣市') {
                return this.weatherData
            }
            else {
                const selectedCounties = this.selectedCounty.split(',');
                return this.weatherData.filter(item => {
                    return selectedCounties.some(county => item.locationName.includes(county.trim()));
                });
            }
        },
    },

    methods: {
        updateSelectedCounty(selectedCounty) {
            this.selectedCounty = selectedCounty.join(',');
        },
    },
}
</script>

<template>
    <main class="border-[gray] border-[1px] p-4">
        <div class="flex gap-4 justify-between">
            <WeatherBtn v-for="county in counties" :key="county.title" @click="updateSelectedCounty(county.area)">
                {{ county.title }}
            </WeatherBtn>
        </div>
        <div>
            <select v-model="selectedCounty" class="w-full cursor-pointer " aria-label="Default select example">
                <option v-for="county in counties" :key="county.id" :value="county.area.join()">{{ county.title }}
                </option>
            </select>
            <ul class=" bg-[#8DD7CF] border-[1px] p-2 text-center">
                <li class="">
                    {{ selectedCounty }}
                </li>
            </ul>
            <div class="flex flex-wrap  overflow-y-scroll h-[500px]">
                <div v-for="weather in getCounty" :key="weather.id" class=" w-[50%] bg-[#E9A2AD] border-[1px] p-3 flex ">
                    <WeatherCard :weather="weather" />
                </div>
            </div>
        </div>
    </main>
</template>