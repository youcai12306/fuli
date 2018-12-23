<template>
	<!--
		作者：lixiaoyi
		时间：2018-12-23
		描述：特色餐厅
	-->
	<section>
		<Header></Header>
		<div class="art" id="art">
			<div class="meng2">
				<swiper :options="certifySwiper1" ref="certifySwiper1">
					<swiper-slide>
						<img src="../../assets/img/md-14.png" alt>
					</swiper-slide>
					<swiper-slide>
						<img src="../../assets/img/md-15.png" alt>
					</swiper-slide>
					<swiper-slide>
						<img src="../../assets/img/md-16.png" alt>
					</swiper-slide>
				</swiper>
			</div>
			
			<div class="meng">
				<div class="certify" id="certify">
					<swiper :options="certifySwiper" ref="certifySwiper">
						<swiper-slide>
							<div class="venve">
								<img src="../../assets/img/md-14.png" alt>
								<div class="p1">街头表演<span>表演时间14：00</span></div>
								<div class="p2">舞蹈，音乐，表演，互动，这所有的一切都是为了给你一份难忘的体验。</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="venve">
								<img src="../../assets/img/md-15.png" alt>
								<div class="p1">街头表演<span>表演时间16：00</span></div>
								<div class="p2">舞蹈，音乐，表演，互动，这所有的一切都是为了给你一份难忘的体验。</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="venve">
								<img src="../../assets/img/md-16.png" alt>
								<div class="p1">街头表演<span>表演时间19：00</span></div>
								<div class="p2">舞蹈，音乐，表演，互动，这所有的一切都是为了给你一份难忘的体验。</div>
							</div>
						</swiper-slide>
					</swiper>
					<div class="swiper-button-prev"></div>
					<div class="swiper-button-next"></div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import "swiper/dist/css/swiper.css";
	import {
		swiper,
		swiperSlide
	} from "vue-awesome-swiper";
	import Header from "@/components/Header"; //引入头部
	export default {
		data() {
			return {
				certifySwiper: { //精彩演艺
					watchSlidesProgress: true,
					slidesPerView: 'auto',
					centeredSlides: true,
					loop: true,
					loopedSlides: 5,
					// autoplay: true,
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					on: {
						progress: function(progress) {
							for (let i = 0; i < this.slides.length; i++) {
								var slide = this.slides.eq(i);
								var slideProgress = this.slides[i].progress;
								let modify = 1;
								if (Math.abs(slideProgress) > 1) {
									modify = (Math.abs(slideProgress) - 1) * 0.5 + 1;
								}
								let translate = slideProgress * modify * 500 + 'px';
								let scale = 1 - Math.abs(slideProgress) / 5;
								let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
								slide.transform('translateX(' + translate + ') scale(' + scale + ')');
								slide.css('zIndex', zIndex);
								slide.css('opacity', 1);
								if (Math.abs(slideProgress) > 3) {
									slide.css('opacity', 0);
								}
							}
						},
						setTransition: function(transition) {
							for (var i = 0; i < this.slides.length; i++) {
								var slide = this.slides.eq(i)
								slide.transition(transition);
							}

						}
					},

				},
				certifySwiper1: {
					watchSlidesProgress: true,
					slidesPerView: 'auto',
					centeredSlides: true,
					loop: true,
					loopedSlides: 5,
					effect: 'fade'
				}
			}
		},
		components: {
			swiper,
			swiperSlide,
			Header
		},
		computed: {

		},
		mounted() {
			this.$nextTick(() => {
				var swiper = this.$refs.certifySwiper.swiper;
				var swiper2 = this.$refs.certifySwiper1.swiper;
				swiper.controller.control = swiper2;
			})
		},
		methods: {

		},
	}
</script>

<style lang="scss" scoped="scoped">
	.art {
		width: 100%;
		height: 1088px;
		position: relative;

		.meng {
			position: absolute;
			left: 0;
			top: 0;
			bottom: 0;
			right: 0;
			z-index: 10;
			background: rgba(15, 57, 119, 0.7);
		}

		.meng2 {
			width: 100%;
			height: 1088px;
			position: absolute;
			left: 0;
			top: 0;
			z-index: -1;
			background: #fff;

			img {
				width: 100%;
				height: 100%;
				display: inline-block;
			}
		}

	}
</style>
<style src="@/assets/scss/certify.css" scoped="scoped"></style>
