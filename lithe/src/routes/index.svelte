<script lang="ts">
import Input from "$lib/input.svelte";
import LayoutGrid, {Cell} from "@smui/layout-grid"

let textInput;
</script>

<div class="bg-primary-900 w-full h-10">
	<p>Lithe Editor</p>
</div>

<LayoutGrid>
	<Cell span={6}>
		<div class="bg-secondary-700">
			<p>Input</p>
			<div>
					<Input {textInput}/>
				</div>
			</div>
	
	</Cell>
	<Cell span={6}>
		<div class="bg-secondary-900">
			<p>Output</p>
			<div>{textInput}</div>
		</div>
	
	</Cell>

</LayoutGrid>

<style>
</style>
