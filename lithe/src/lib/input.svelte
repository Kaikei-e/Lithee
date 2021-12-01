<script lang="ts">
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';

	export let textInput;
</script>

<div>
  <Textfield variant="filled" bind:value={textInput} label="Write here!!">
		<Icon class="material-icons" slot="leadingIcon">Edit</Icon>
	</Textfield>
</div>

<style>
</style>
