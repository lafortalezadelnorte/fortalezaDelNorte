<template>
	<div class="section-contact" id="contact">
		<div class="content-contact">
			<div class="br-mobile">
				<img src="/static/images/section/image-contact.png" alt="">
			</div>
			<div class="form-contact">
				<form action="enviar.php" method="post">
					<v-flex class="bold title-contact">{{$t('titleContact')}}</v-flex>
					<div class="user_info">
						<input :placeholder="$t('placeholderName')" class="input-form" type="text" id="names" name="nombre" required>
					</div>
					<div class="user_info">
						<input :placeholder="$t('placeholderPhone')" class="input-form" type="text" id="phone" name="telefono">
					</div>
					<div class="user_info">
						<input :placeholder="$t('placeholderEmail')" class="input-form" type="text" id="email" name="correo" required>
					</div>
					<div class="user_info">
						<textarea :placeholder="$t('placeholderMessage')" class="input-form pt-10" id="mensaje" name="mensaje" required></textarea>
					</div>
					<input class="btn-submit" type="submit" :value="$t('btnTitleContact')" id="btnSend" @click="saveForm">
				</form>
			</div>
			<!-- <div class="form-contact">
				<v-layout column>
					<v-flex>
						<input
						:placeholder="$t('placeholderName')"
						class="input-form"
						type="text">
					</v-flex>
					<v-flex>
						<input
						:placeholder="$t('placeholderEmail')"
						class="input-form"
						type="email">
					</v-flex>
					<v-flex>
						<input
						:placeholder="$t('placeholderPhone')"
						class="input-form"
						type="phone">
					</v-flex>
					<v-flex>
						<textarea
						:placeholder="$t('placeholderMessage')"
						class="textarea-contact"></textarea>
					</v-flex>
					<v-flex class="left-desktop">
						<button
						type="submit"
						class="btn-submit">
							{{$t('btnTitleContact')}}
						</button>
					</v-flex>
				</v-layout>
			</div> -->
		</div>
	</div>
</template>

<script>
export default {
	name: 'section-contact',
};
</script>

<style lang="scss" scoped>
.section-contact {
	background-color: white;
	padding: 62px 15px 53px 15px;

	@media (min-width: 936px) {
		padding: 100px 14% 62px 0;
	}
}

.title-contact {
	color: #878787;
	font-size: 25px;
	margin-bottom: 61px;

	@media (min-width: 936px) {
		font-size: 33px;
		margin-bottom: 42px;
	}
}

.content-contact {
	display: flex;
}

.form-contact {
	text-align: center;
	width: 100%;

	@media (min-width: 936px) {
		margin-left: 70px;
		width: 50%;
	}
}

.input-form {
	border: 1px solid #41aa36;
	border-radius: 5px;
	color: #a6a6a6;
	height: 40px;
	font-family: 'Poppins', sans-serif !important;
	font-size: 14px;
	padding-left: 13px;
	margin-bottom: 20px;
	outline: none;
	width: 100%;
}

.btn-submit {
	border-radius: 31.5px;
  background-image: linear-gradient(to right, #64c733 -7%, #66cc33 54%, #5abe28 100%);
	color: white;
	height: 51px;
	font-size: 16px;
	font-weight: 600;
	width: 100%;

	@media (min-width: 936px) {
		width: 134px;
	}
}

.textarea-contact {
	border: 1px solid #41aa36;
	border-radius: 5px;
	height: 191px;
	margin-bottom: 25px;
	resize: none;
	padding: 14px 0 0 13px;
	width: 100%;

	@media (min-width: 936px) {
		margin-bottom: 31px;
	}
}

.left-desktop {
	@media (min-width: 936px) {
		text-align: right;
	}
}

.pt-10 {
	padding-top: 10px;
}
</style>