<template>
	<div class="row justify-content-center">
		<div class="col-10">
			<a-list
				item-layout="vertical"
				size="large"
				v-bind:pagination="pagination"
				v-bind:data-source="articles"
				class="pointer"
			>
				<template #renderItem="{ item }">
					<a-list-item
						class="border bg-description _list_item my-2 py-2"
						@click="
							$store.dispatch('openModal', {
								state: {
									props: {
										title: item.name,
										component: view,
										item: item,
									},
								},
							})
						"
					>
						<a-list-item-meta>
							<template #title>
								<a href="/Article">{{ item.name }}</a>
							</template>
							<template #avatar>
								<a-avatar
									:size="{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }"
									:src="
										'http://localhost:3000/images/' +
										item.file +
										item.picturesExtension
									"
								/>
							</template>
							<template #description>
								<div class="text-start" v-html="item.intro"></div>
								<div
									class="
										border-top border-bottom
										py-1
										d-flex
										flex-row
										justify-content-center
										align-items-center
									"
								>
									<div class="fw-bold text-dark">Tags :</div>
									<div
										v-for="(
											{ name, backgroundColor, fontColor }, key
										) in item.tags"
										:key="key"
										:style="`background: ${backgroundColor}; color: ${fontColor}; font-weight: bold;`"
										class="py-1 px-2 mx-1 rounded"
									>
										{{ name }}
									</div>
								</div>
							</template>
						</a-list-item-meta>
					</a-list-item>
				</template>
			</a-list>
		</div>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Article } from '@/interfaces';
import { defineAsyncComponent, PropType } from '@vue/runtime-core';

@Options({
	props: {
		articles: { type: Object as PropType<Article[]>, default: [] },
	},
	data: () => {
		return {
			activatedKey: -1,
			hover: false,
			view: defineAsyncComponent(() => import('./TutorialView.vue')),
		};
	},
	setup: () => {
		const pagination = {
			onChange: (page: number) => {
				console.log(page);
			},
			pageSize: 3,
		};

		return {
			pagination,
		};
	},
})
export default class ArticlesList extends Vue {}
</script>

<style lang="scss" scoped>
.article_list_intro {
}
._list_item:hover {
	box-shadow: 3.5px 3.5px 3.5px rgba(128, 128, 128, 0.486);
}
</style>