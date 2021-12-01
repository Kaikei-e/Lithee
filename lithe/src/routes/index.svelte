<script lang="ts">
	import Input from '$lib/input.svelte';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';

	let prominent = false;
	let dense = false;
	let secondaryColor = false;

	let textInput;

	$: output = textInput;
</script>

<div class="flexy">
	<div class="top-app-bar-container">
		<TopAppBar variant="static" {prominent} {dense} color={secondaryColor ? 'secondary' : 'primary'}
			>Lithee: lithe md editor</TopAppBar
		>
	</div>

	<div class="flexor">
		<div class="flexor-content">

			<LayoutGrid>
				<Cell span={6}>
					<div class="inputField">
						<p>Input</p>
						<div>
							<Input {textInput} />
						</div>
					</div>
				</Cell>
				<Cell span={6}>
					<div>
						<p>Output</p>
						<div>{output}</div>
					</div>
				</Cell>
			</LayoutGrid>
	

		</div>
	</div>

</div>

<style>
	.top-app-bar-container {
		max-width: 480px;
		width: 100%;
		border: 1px solid var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
		margin: 0 18px 18px 0;
		background-color: var(--mdc-theme-background, #fff);

		overflow: auto;
		display: inline-block;
	}

	.flexy {
    display: flex;
    flex-wrap: wrap;
  }

  .flexor {
    display: inline-flex;
    flex-direction: column;
  }
 
  .flexor-content {
    flex-basis: 0;
    height: 0;
    flex-grow: 1;
    overflow: auto;
  }

	.inputField {
		background-color: #9eefff;
	}
</style>
