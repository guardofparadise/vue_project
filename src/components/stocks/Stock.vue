<template>
	<div class="col-md-6">
		<div class="panel panel-success">
			<div class="panel-heading">
				<h3 class="panel-title">
					{{ stock.name }}
					<small>(Price: {{ stock.price }})</small>
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
						:disabled="lowFunds || quantity <= 0 && !Number.isInteger(quantity)"
						@click="buyStock"
						class="btn btn-success">Buy</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['stock'],
		data() {
			return {
				quantity: 0
			}
		},
		methods: {
			buyStock() {
				const order = {
					stockId: this.stock.id,
					stockPrice: this.stock.price,
					quantity: this.quantity
				};
				this.$store.dispatch('buyStock', order);
				this.quantity = 0;
			}
		},
		computed: {
			funds() {
				return this.$store.getters.funds
			},
			lowFunds() {
				return this.quantity * this.stock.price > this.funds;
			}
		}
	}
</script>

<style>

</style>