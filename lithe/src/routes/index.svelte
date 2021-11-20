<script lang="ts">
import Input from "$lib/input.svelte";
import LayoutGrid, {Cell} from "@smui/layout-grid"

let textInput;
</script>

<div>
	<p>Lithe Editor</p>
</div>

<LayoutGrid>
	<Cell span={6}>
		<div class="inputField">
			<p>Input</p>
			<div>
					<Input {textInput}/>
				</div>
			</div>
	
	</Cell>
	<Cell span={6}>
		<div>
			<p>Output</p>
			<div>{textInput}</div>
		</div>
	
	</Cell>

</LayoutGrid>

<style>
	.inputField{
		background-color: #9eefff;
	}

</style>
