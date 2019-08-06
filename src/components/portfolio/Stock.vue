<template>
	<div class="col-md-6">
		<div class="panel panel-success">
			<div class="panel-heading">
				<h3 class="panel-title">
					{{ stock.name }}
					<small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
				</h3>
			</div>
			<div class="panel-body">
				<div class="pull-left">
					<input
						class="form-control"
						placeholder="Quantity"
						v-model="quantity"
						type="number">
				</div>
				<div class="pull-right">
					<button 
						:disabled="lowQuantity || quantity <= 0 && !Number.isInteger(quantity)"
						@click="sellStock"
						class="btn btn-success">Sell</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'
	export default {
		props: ['stock'],
		data() {
			return {
				quantity: 0
			}
		},
		methods: {
			...mapActions({
				placeSellOrder: 'sellStock'
			}),
			sellStock() {
				const order = {
					stockId: this.stock.id,
					stockPrice: this.stock.price,
					quantity: this.quantity
				}
				this.placeSellOrder(order)
			}
		},
		computed: {
			lowQuantity() {
				return parseInt(this.quantity) > parseInt(this.stock.quantity);
			}
		}
	}
</script>

<style>

</style>